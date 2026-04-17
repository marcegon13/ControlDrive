import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
  Share,
  AppState // ✅ AGREGADO
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as LocalAuthentication from 'expo-local-authentication'; // Biometria
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

// Mantener el Splash Screen visible mientras cargamos recursos
SplashScreen.preventAutoHideAsync();

// Imports de estructura
import {
  Billetera,
  RegistroDiario,
  CargaCombustible,
  Transaction,
  ScreenType,
  TransactionType,
  Jornada,
  ProSettings,
  Mantenimiento,
  VehicleProfile
} from "./src/types";
import { INITIAL_BILLETERAS, STORAGE_KEYS, INITIAL_PRO_SETTINGS, TRIAL_DAYS_LIMIT } from "./src/constants";

import { exportToCSV } from "./src/utils/export";
import { 
  processSaveRegistroDiario, 
  processDeleteRegistroDiario, 
  processSaveCargaCombustible, 
  processDeleteCargaCombustible, 
  processSaveTransaction, 
  processDeleteTransaction, 
  processAddMantenimiento, 
  processDeleteMantenimiento, 
  processAdjustBalance 
} from "./src/logic/finance";
import { restaurarDesdeJSON, BACKUP_MARCELO_13_ENE_2026 } from "./src/utils/restaurarBackup"; // ✅ RESTAURACIÓN EMERGENCIA
// Google Drive Service (Restaurado)
import { configureGoogleSignIn, signInWithGoogle, uploadBackupToDrive, restoreBackupFromDrive } from "./src/services/GoogleDriveService";


// Imports de Componentes y Modales
import { COLORS } from "./src/theme/colors";
import RegistroDiarioModal from "./src/components/modals/RegistroDiarioModal";
import CargaCombustibleModal from "./src/components/modals/CargaCombustibleModal";
import TransactionModal from "./src/components/modals/TransactionModal";
import { SettingsModal } from "./src/components/modals/SettingsModal"; // Import correcto

// Imports de Pantallas
import { DashboardScreen } from "./src/screens/DashboardScreen";
import BilleterasScreen from "./src/screens/BilleterasScreen";
import CombustibleScreen from "./src/screens/CombustibleScreen";
import HistorialScreen from "./src/screens/HistorialScreen";
import { ErrorBoundary } from "./src/components/ErrorBoundary"; // ✅ AGREGADO

// Colores del tema (basados en la imagen)
const THEME = {
  headerBg: "#202c39",
  tabBg: "#202c39",
  tabActiveBg: "#2c3e50",
  textLight: "#ecf0f1",
  textGray: "#95a5a6",
  accent: "#2ecc71",
  background: "#ecf0f1",
};

const App: React.FC = () => {
  const [billeteras, setBilleteras] = useState<Billetera[]>(INITIAL_BILLETERAS);
  const [registrosDiarios, setRegistrosDiarios] = useState<RegistroDiario[]>([]);
  const [cargasCombustible, setCargasCombustible] = useState<CargaCombustible[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [jornadas, setJornadas] = useState<Jornada[]>([]);
  const [mantenimientos, setMantenimientos] = useState<Mantenimiento[]>([]);
  const [vehicleProfile, setVehicleProfile] = useState<VehicleProfile>({} as VehicleProfile);



  const [currentScreen, setCurrentScreen] = useState<ScreenType>("dashboard");

  // Settings State
  const [isPro, setIsPro] = useState(INITIAL_PRO_SETTINGS.isPro);
  const [hideBalances, setHideBalances] = useState(INITIAL_PRO_SETTINGS.hideBalances);
  const [weeklyGoal, setWeeklyGoal] = useState(INITIAL_PRO_SETTINGS.weeklyGoal);
  const [biometricEnabled, setBiometricEnabled] = useState(false); // Estado para biometria

  const [registroDiarioModalVisible, setRegistroDiarioModalVisible] = useState(false);
  const [cargaCombustibleModalVisible, setCargaCombustibleModalVisible] = useState(false);

  // Trial Logic
  const [trialExpired, setTrialExpired] = useState(false);
  const [transactionModalVisible, setTransactionModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const [transactionModalType, setTransactionModalType] = useState<TransactionType | null>(null);
  const [selectedWalletId, setSelectedWalletId] = useState<string | null>(null);

  // Bandera de carga para evitar sobresscritura inicial
  const [isLoaded, setIsLoaded] = useState(false);

  // ✅ NUEVO: Modo Oscuro Automático (20:00 a 06:00)
  const isNightMode = () => {
    const hour = new Date().getHours();
    return hour >= 20 || hour < 6;
  };
  // TODO: Etapa 2 — Conectar currentTheme al renderizado para habilitar modo oscuro automático
  const [currentTheme, setCurrentTheme] = useState(isNightMode() ? 'dark' : 'light');

  // Actualizar tema cada minuto
  useEffect(() => {
    const timer = setInterval(() => {
      const mode = isNightMode() ? 'dark' : 'light';
      if (mode !== currentTheme) setCurrentTheme(mode);
    }, 60000);
    return () => clearInterval(timer);
  }, [currentTheme]);

  // --- ARRANQUE Y BIOMETRIA ---
  useEffect(() => {
    // Inicialización segura para evitar crash
    const init = async () => {
      try {
        configureGoogleSignIn();
      } catch (e) {
        console.log("Error inicializando Google Login:", e);
      }
    };
    init();
    loadData();
    checkTrialPeriod();
  }, []);

  // Re-check trial when Pro status changes (e.g. user activates code)
  useEffect(() => {
    if (isPro) setTrialExpired(false);
  }, [isPro]);

  // ✅ AGREGADO: Auto-guardar cuando cambian datos CRITICOS
  useEffect(() => {
    // PROTECCIÓN CRÍTICA: Solo guardar si YA CARGAMOS los datos del disco.
    // Si guardamos antes de cargar, borramos todo lo del usuario con arrays vacíos.
    if (isLoaded) {
      saveData();
    }
  }, [vehicleProfile, mantenimientos, billeteras, registrosDiarios, cargasCombustible, transactions, jornadas, isLoaded]);

  const checkTrialPeriod = async () => {
    try {
      const firstRun = await AsyncStorage.getItem("@first_run_date");
      const now = new Date();
      if (!firstRun) {
        await AsyncStorage.setItem("@first_run_date", now.toISOString());
      } else {
        const startDate = new Date(firstRun);
        const diffTime = Math.abs(now.getTime() - startDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > TRIAL_DAYS_LIMIT) {
          setTrialExpired(true);
        }
      }
    } catch (e) { console.log("Trial check error", e); }
  };

  const loadData = async () => {
    try {
      const keys = [
        STORAGE_KEYS.BILLETERAS,
        STORAGE_KEYS.REGISTROS_DIARIOS,
        STORAGE_KEYS.CARGAS,
        STORAGE_KEYS.TRANSACTIONS,
        STORAGE_KEYS.JORNADAS,
        STORAGE_KEYS.SETTINGS,
        STORAGE_KEYS.MANTENIMIENTOS, // ✅ YA ESTABA
        STORAGE_KEYS.VEHICLE_PROFILE // ✅ AGREGADO
      ];

      const results = await AsyncStorage.multiGet(keys);
      const data: Record<string, string | null> = {};
      results.forEach(([key, value]) => { data[key] = value; });

      if (data[STORAGE_KEYS.BILLETERAS]) setBilleteras(JSON.parse(data[STORAGE_KEYS.BILLETERAS]));
      if (data[STORAGE_KEYS.REGISTROS_DIARIOS]) setRegistrosDiarios(JSON.parse(data[STORAGE_KEYS.REGISTROS_DIARIOS]).map((r: any) => ({ ...r, fecha: new Date(r.fecha) })));
      if (data[STORAGE_KEYS.CARGAS]) setCargasCombustible(JSON.parse(data[STORAGE_KEYS.CARGAS]).map((c: any) => ({ ...c, fecha: new Date(c.fecha) })));
      if (data[STORAGE_KEYS.TRANSACTIONS]) setTransactions(JSON.parse(data[STORAGE_KEYS.TRANSACTIONS]).map((t: any) => ({ ...t, fecha: new Date(t.fecha) })));
      if (data[STORAGE_KEYS.JORNADAS]) setJornadas(JSON.parse(data[STORAGE_KEYS.JORNADAS]).map((j: any) => ({ ...j, fecha: new Date(j.fecha), fechaFin: j.fechaFin ? new Date(j.fechaFin) : undefined })));

      // ✅ AGREGADO: Cargar mantenimientos
      if (data[STORAGE_KEYS.MANTENIMIENTOS]) {
        setMantenimientos(JSON.parse(data[STORAGE_KEYS.MANTENIMIENTOS]).map((m: any) => ({ ...m, fecha: new Date(m.fecha) })));
      }

      // ✅ AGREGADO: Cargar perfil del vehículo
      if (data[STORAGE_KEYS.VEHICLE_PROFILE]) {
        setVehicleProfile(JSON.parse(data[STORAGE_KEYS.VEHICLE_PROFILE]));
      }

      if (data[STORAGE_KEYS.SETTINGS]) {
        const settings = JSON.parse(data[STORAGE_KEYS.SETTINGS]);
        if (settings.isPro !== undefined) setIsPro(settings.isPro);
        if (settings.hideBalances !== undefined) setHideBalances(settings.hideBalances);
        if (settings.weeklyGoal !== undefined) setWeeklyGoal(settings.weeklyGoal);
        if (settings.biometricEnabled !== undefined) {
          setBiometricEnabled(settings.biometricEnabled);
          if (settings.biometricEnabled) {
            authenticateUser(); // Desafío biométrico al iniciar si está habilitado
          }
        }
      }

    } catch (error) {
      console.error("Error FATAL cargando datos:", error);
    } finally {
      setIsLoaded(true); // ✅ DATOS CARGADOS: Habilitar guardado
      try { await SplashScreen.hideAsync(); } catch (e) { }
    }
  };

  const authenticateUser = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (hasHardware) {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Desbloquear Control Driver',
        fallbackLabel: 'Entrar sin protección'
      });
      if (!result.success) {
        // Si falla, podríamos cerrar la app o mostrar una pantalla bloqueada
        // Por ahora solo avisamos
        Alert.alert("Bloqueado", "No se pudo verificar la identidad.");
      }
    }
  };

  const saveData = async () => {
    try {
      const pairs: [string, string][] = [
        [STORAGE_KEYS.BILLETERAS, JSON.stringify(billeteras)],
        [STORAGE_KEYS.REGISTROS_DIARIOS, JSON.stringify(registrosDiarios)],
        [STORAGE_KEYS.CARGAS, JSON.stringify(cargasCombustible)],
        [STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions)],
        [STORAGE_KEYS.JORNADAS, JSON.stringify(jornadas)],
        [STORAGE_KEYS.MANTENIMIENTOS, JSON.stringify(mantenimientos)], // ✅ AGREGADO
        [STORAGE_KEYS.VEHICLE_PROFILE, JSON.stringify(vehicleProfile)], // ✅ AGREGADO
        [STORAGE_KEYS.SETTINGS, JSON.stringify({ isPro, hideBalances, weeklyGoal, biometricEnabled })],
      ];
      await AsyncStorage.multiSet(pairs);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // ✅ NUEVO: Recargar datos al volver de segundo plano para evitar "pantalla en cero"
  // ✅ NUEVO: Recargar datos al volver de segundo plano para evitar "pantalla en cero"
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        // Verificar si los datos críticos están vacíos
        if (registrosDiarios.length === 0 && cargasCombustible.length === 0 && transactions.length === 0) {
          console.log('⚡ App activa con datos vacíos. Forzando recarga...');
          loadData();
        }
      }
    });
    return () => {
      subscription.remove();
    };
  }, [registrosDiarios, cargasCombustible, transactions]);

  // --- FUNCIONALIDADES DE SETTINGS ---
  const handleUpdateSettings = (newSettings: Partial<ProSettings>) => {
    if (newSettings.isPro !== undefined) setIsPro(newSettings.isPro);
    if (newSettings.hideBalances !== undefined) setHideBalances(newSettings.hideBalances);
    if (newSettings.biometricEnabled !== undefined) setBiometricEnabled(newSettings.biometricEnabled);
    if (newSettings.weeklyGoal !== undefined) setWeeklyGoal(newSettings.weeklyGoal);
  };

  const handleManualBackup = async () => {
    const fullBackup = {
      billeteras, registrosDiarios, cargasCombustible, transactions, jornadas,
      settings: { isPro, hideBalances, weeklyGoal, biometricEnabled, vehicleProfile }
    };
    const jsonStr = JSON.stringify(fullBackup);
    const filename = `Respaldo_ControlDriver_${new Date().toISOString().split('T')[0]}.json`;
    const fileUri = FileSystem.documentDirectory + filename;

    try {
      await FileSystem.writeAsStringAsync(fileUri, jsonStr);
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri, {
          mimeType: 'application/json',
          dialogTitle: 'Guardar Respaldo en Drive/Nube',
          UTI: 'public.json' // Ayuda a iOS/Android a saber qué es
        });
      } else {
        Alert.alert("Error", "Compartir no disponible en este dispositivo.");
      }
    } catch (e) { Alert.alert("Error", "No se pudo generar el archivo de respaldo."); }
  };

  const handleRestoreBackup = async (jsonText: string): Promise<boolean> => {
    try {
      const data = JSON.parse(jsonText);

      // 1. PERSISTENCIA INMEDIATA (Guardar en disco antes de actualizar UI)
      const pairs: [string, string][] = [];

      if (data.billeteras) pairs.push([STORAGE_KEYS.BILLETERAS, JSON.stringify(data.billeteras)]);
      if (data.registrosDiarios) pairs.push([STORAGE_KEYS.REGISTROS_DIARIOS, JSON.stringify(data.registrosDiarios)]);
      if (data.cargasCombustible) pairs.push([STORAGE_KEYS.CARGAS, JSON.stringify(data.cargasCombustible)]);
      if (data.transactions) pairs.push([STORAGE_KEYS.TRANSACTIONS, JSON.stringify(data.transactions)]);
      if (data.jornadas) pairs.push([STORAGE_KEYS.JORNADAS, JSON.stringify(data.jornadas)]);

      let newSettings = { isPro, hideBalances, weeklyGoal, biometricEnabled, vehicleProfile };
      if (data.settings) {
        newSettings = { ...newSettings, ...data.settings };
        pairs.push([STORAGE_KEYS.SETTINGS, JSON.stringify(newSettings)]);
      }

      if (pairs.length > 0) {
        await AsyncStorage.multiSet(pairs);
      }

      // 2. ACTUALIZAR UI (State)
      if (data.billeteras) setBilleteras(data.billeteras);
      if (data.registrosDiarios) setRegistrosDiarios(data.registrosDiarios.map((r: any) => ({ ...r, fecha: new Date(r.fecha) })));
      if (data.cargasCombustible) setCargasCombustible(data.cargasCombustible.map((c: any) => ({ ...c, fecha: new Date(c.fecha) })));
      if (data.transactions) setTransactions(data.transactions.map((t: any) => ({ ...t, fecha: new Date(t.fecha) })));
      if (data.jornadas) setJornadas(data.jornadas.map((j: any) => ({ ...j, fecha: new Date(j.fecha), fechaFin: j.fechaFin ? new Date(j.fechaFin) : undefined })));

      if (data.settings) {
        if (data.settings.isPro !== undefined) setIsPro(data.settings.isPro);
        if (data.settings.hideBalances !== undefined) setHideBalances(data.settings.hideBalances);
        if (data.settings.weeklyGoal !== undefined) setWeeklyGoal(data.settings.weeklyGoal);
        if (data.settings.vehicleProfile !== undefined) setVehicleProfile(data.settings.vehicleProfile);
      }

      Alert.alert("✅ Restaurado", "Tus datos han sido recuperados y guardados permanentemente.");
      return true;
    } catch (e) {
      Alert.alert("Error", "El formato del backup es inválido.");
      return false;
    }
  };

  const handleFactoryReset = () => {
    Alert.alert(
      "⚠️ BORRAR TODO",
      "Esta acción eliminará permanentemente todos tus datos y no se puede deshacer. ¿Estás seguro?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "SÍ, BORRAR TODO", style: 'destructive', onPress: async () => {
            await AsyncStorage.clear();
            setBilleteras(INITIAL_BILLETERAS);
            setRegistrosDiarios([]);
            setCargasCombustible([]);
            setTransactions([]);
            setJornadas([]);
            setIsPro(false);
            Alert.alert("Reinicio", "La aplicación ha sido reiniciada de fábrica.");
          }
        }
      ]
    );
  };


  // --- LOGICA HANDLERS ---
  const handleExportData = () => exportToCSV(registrosDiarios, cargasCombustible, transactions);
  const handleOpenRegistroDiarioModal = () => setRegistroDiarioModalVisible(true);
  const handleCloseRegistroDiarioModal = () => setRegistroDiarioModalVisible(false);
  const handleOpenCargaCombustibleModal = () => setCargaCombustibleModalVisible(true);
  const handleCloseCargaCombustibleModal = () => setCargaCombustibleModalVisible(false);
  const handleOpenModal = (type: TransactionType, walletId: string | null) => {
    setTransactionModalType(type);
    setSelectedWalletId(walletId);
    setTransactionModalVisible(true);
  };
  const handleCloseTransactionModal = () => {
    setTransactionModalVisible(false);
    setTransactionModalType(null);
    setSelectedWalletId(null);
  };
  const onOpenSettings = () => setSettingsModalVisible(true);

  //  ✅ NUEVO: Recalcular todos los saldos desde cero
  const handleRecalcularSaldos = async () => {
    Alert.alert(
      "🔄 Recalcular Saldos",
      "Esto reconstruirá los saldos de tus billeteras basándose en TODO tu historial de transacciones. ¿Continuar?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Recalcular",
          style: "destructive",
          onPress: async () => {
            try {
              console.log('🔄 Iniciando recálculo de saldos...');
              console.log('📊 Datos actuales:', {
                billeteras: billeteras.length,
                registros: registrosDiarios.length,
                cargas: cargasCombustible.length,
                transacciones: transactions.length
              });

              const { recalcularSaldosDesdeHistorial } = require('./src/utils/recalcularSaldos');
              const billeterasActualizadas = recalcularSaldosDesdeHistorial(
                billeteras,
                registrosDiarios,
                cargasCombustible,
                transactions
              );

              console.log('✅ Saldos recalculados:', billeterasActualizadas.map(b => `${b.nombre}: $${b.saldo}`));

              // Actualizar estado
              setBilleteras(billeterasActualizadas);

              // Guardar manualmente en AsyncStorage INMEDIATAMENTE
              await AsyncStorage.setItem(STORAGE_KEYS.BILLETERAS, JSON.stringify(billeterasActualizadas));
              console.log('💾 Saldos guardados en AsyncStorage');

              Alert.alert(
                "✅ Saldos Recalculados",
                `Efectivo: $${billeterasActualizadas.find(b => b.nombre === "Efectivo")?.saldo.toFixed(2)}\n` +
                `Tarjetas: $${billeterasActualizadas.find(b => b.nombre === "Tarjetas/Plataforma")?.saldo.toFixed(2)}\n` +
                `Virtuales: $${billeterasActualizadas.find(b => b.nombre === "Billeteras Virtuales")?.saldo.toFixed(2)}`
              );
            } catch (error) {
              console.error('❌ Error al recalcular:', error);
              Alert.alert("Error", `No se pudieron recalcular los saldos: ${error}`);
            }
          }
        }
      ]
    );
  };

  // ✅ DEBUG: Ver diagnóstico de saldos
  const handleVerDiagnostico = () => {
    const { generarReporteDiagnostico } = require('./src/utils/diagnosticoSaldos');
    const reporte = generarReporteDiagnostico(
      billeteras,
      registrosDiarios,
      cargasCombustible,
      transactions
    );
    Alert.alert("🔍 Diagnóstico de Saldos", reporte, [
      {
        text: "Copiar", onPress: () => {
          // En una app real usarías Clipboard.setString(reporte)
          console.log(reporte);
        }
      },
      { text: "Cerrar", style: "cancel" }
    ]);
  };

  // (Funciones de Guardado/Borrado de datos - modularizadas)
  const handleSaveRegistroDiario = async (data: Omit<RegistroDiario, "id">) => {
    const { newRegistrosDiarios, newBilleteras } = processSaveRegistroDiario(data, registrosDiarios, billeteras);
    setRegistrosDiarios(newRegistrosDiarios);
    setBilleteras(newBilleteras);
    Alert.alert("✅ Éxito", "Registro guardado");
  };

  const handleSaveCargaCombustible = async (data: Omit<CargaCombustible, "id">) => {
    const { newCargasCombustible, newBilleteras } = processSaveCargaCombustible(data, cargasCombustible, billeteras);
    setCargasCombustible(newCargasCombustible);
    setBilleteras(newBilleteras);
    Alert.alert("✅ Éxito", "Carga guardada");
  };

  const handleDeleteCargaCombustible = (id: string) => {
    const { newCargasCombustible, newBilleteras, deleted } = processDeleteCargaCombustible(id, cargasCombustible, billeteras);
    if (deleted) {
      setCargasCombustible(newCargasCombustible);
      setBilleteras(newBilleteras);
      Alert.alert("Eliminado", "Carga eliminada");
    }
  };

  const handleDeleteRegistroDiario = (id: string) => {
    const { newRegistrosDiarios, newBilleteras, deleted } = processDeleteRegistroDiario(id, registrosDiarios, billeteras);
    if (deleted) {
      setRegistrosDiarios(newRegistrosDiarios);
      setBilleteras(newBilleteras);
      Alert.alert("Eliminado", "Registro eliminado");
    }
  };

  const handleDeleteTransaction = (id: string) => {
    const { newTransactions, newBilleteras, deleted } = processDeleteTransaction(id, transactions, billeteras);
    if (deleted) {
      setTransactions(newTransactions);
      setBilleteras(newBilleteras);
      Alert.alert("Eliminado", "Transacción eliminada");
    }
  };

  const handleSaveTransaction = async (data: Omit<Transaction, "id">) => {
    const { newTransactions, newBilleteras } = processSaveTransaction(data, transactions, billeteras);
    setTransactions(newTransactions);
    setBilleteras(newBilleteras);
    Alert.alert("✅ Éxito", "Transacción guardada");
  };


  const handleSaveJornada = (jornada: Jornada) => {
    const nuevaJornada = { ...jornada, id: Date.now().toString() };
    setJornadas(prev => [nuevaJornada, ...prev]);
    Alert.alert("🏁 Jornada Finalizada", "Se ha guardado el resumen en tu historial.");
  };
  const handleDeleteJornada = (id: string) => {
    Alert.alert("Borrar Jornada", "¿Estás seguro de eliminar este registro histórico?", [
      { text: "Cancelar", style: 'cancel' },
      { text: "Borrar", style: 'destructive', onPress: () => setJornadas(prev => prev.filter(j => j.id !== id)) }
    ]);
  };



  // --- HANDLERS MANTENIMIENTO ---
  const handleAddMantenimiento = (nuevo: Mantenimiento) => {
    const { newMantenimientos, newBilleteras } = processAddMantenimiento(nuevo, mantenimientos, billeteras);
    setMantenimientos(newMantenimientos);
    setBilleteras(newBilleteras);
    Alert.alert("✅ Éxito", "Mantenimiento registrado y saldo descontado.");
  };

  const handleDeleteMantenimiento = (id: string) => {
    Alert.alert("Eliminar Mantenimiento", "¿Estás seguro? Se devolverá el dinero a la billetera.", [
      { text: "Cancelar", style: 'cancel' },
      {
        text: "Eliminar",
        style: 'destructive',
        onPress: () => {
          const { newMantenimientos, newBilleteras, deleted } = processDeleteMantenimiento(id, mantenimientos, billeteras);
          if (deleted) {
            setMantenimientos(newMantenimientos);
            setBilleteras(newBilleteras);
          }
        }
      }
    ]);
  };

  const handleUpdateVehicleProfile = (profile: VehicleProfile) => {
    setVehicleProfile(profile);
    // Tambien actualizar en Settings para persistencia conjunta si se desea, 
    // pero por ahora lo manejamos con state separado y guardado en saveData
  };

  // ✅ NUEVO: Ajuste manual de saldo
  const handleAdjustBalance = async (walletId: string, newBalance: number) => {
    const result = processAdjustBalance(walletId, newBalance, transactions, billeteras);
    if (!result) return;
    
    setTransactions(result.newTransactions);
    setBilleteras(result.newBilleteras);
    
    // Deferido, ya que isLoaded llama saveData globalmente
    // o se puede forzar el autoguardado si es necesario
    // await saveData(); // Mantenemos await saveData (quitamos porque causaba dependencia doble, pero podemos dejarlo si existe un effect, en este caso tu effect lo hace automatico)
  };

  // --- RENDERIZADO ---
  const renderScreen = () => {
    switch (currentScreen) {
      case "dashboard":
        return <DashboardScreen
          registrosDiarios={registrosDiarios}
          cargasCombustible={cargasCombustible}
          billeteras={billeteras}
          transactions={transactions}
          jornadas={jornadas}
          hideBalances={hideBalances}
          isPro={isPro}
          weeklyGoal={weeklyGoal}
          handleOpenModal={handleOpenModal}
          handleOpenRegistroDiarioModal={handleOpenRegistroDiarioModal}
          handleOpenCargaCombustibleModal={handleOpenCargaCombustibleModal}
          handleExportData={handleExportData}
          onOpenSettings={onOpenSettings}
        />;
      case "billeteras":
        return <BilleterasScreen
          billeteras={billeteras}
          handleOpenModal={handleOpenModal}
          registros={registrosDiarios}
          gastos={cargasCombustible}
          transactions={transactions}
          onAdjustBalance={handleAdjustBalance}
        />;
      case "combustible":
        return (
          <ErrorBoundary>
            <CombustibleScreen
              cargasCombustible={cargasCombustible}
              handleOpenCargaCombustibleModal={handleOpenCargaCombustibleModal}
              handleDeleteCargaCombustible={handleDeleteCargaCombustible}
              // Props Agregadas para Gestión de Jornada
              jornadas={jornadas}
              onSaveJornada={handleSaveJornada}
              registrosDiarios={registrosDiarios}
              transactions={transactions}
              // Props Nuevas
              mantenimientos={mantenimientos}
              onAddMantenimiento={handleAddMantenimiento}
              onDeleteMantenimiento={handleDeleteMantenimiento}
              vehicleProfile={vehicleProfile}
              onUpdateVehicleProfile={handleUpdateVehicleProfile}
              billeteras={billeteras}
            />
          </ErrorBoundary>
        );
      case "historial":
        return <HistorialScreen
          registrosDiarios={registrosDiarios}
          cargasCombustible={cargasCombustible}
          transactions={transactions}
          jornadas={jornadas}
          handleDeleteRegistroDiario={handleDeleteRegistroDiario}
          handleDeleteCargaCombustible={handleDeleteCargaCombustible}
          handleDeleteTransaction={handleDeleteTransaction}
          handleDeleteJornada={handleDeleteJornada}
        />;
      default: return null;
    }
  };

  const TabButton = ({ title, icon, screen }: { title: string, icon: any, screen: ScreenType }) => {
    const isActive = currentScreen === screen;
    let IconComponent: React.ReactNode;
    if (screen === 'dashboard') IconComponent = <MaterialCommunityIcons name="view-dashboard" size={24} color={isActive ? THEME.textLight : THEME.textGray} />;
    else if (screen === 'billeteras') IconComponent = <FontAwesome5 name="wallet" size={20} color={isActive ? THEME.textLight : THEME.textGray} />;
    else if (screen === 'combustible') IconComponent = <FontAwesome5 name="car" size={20} color={isActive ? THEME.textLight : THEME.textGray} />;
    else IconComponent = <FontAwesome5 name="clipboard-list" size={20} color={isActive ? THEME.textLight : THEME.textGray} />;

    return (
      <TouchableOpacity
        style={[styles.tabButton, isActive && styles.tabActive]}
        onPress={() => setCurrentScreen(screen)}
      >
        {IconComponent}
        <Text style={[styles.tabText, isActive ? styles.tabTextActive : styles.tabTextInactive]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={THEME.headerBg} barStyle="light-content" />
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

        <View style={styles.header}>
          <TouchableOpacity onPress={onOpenSettings} style={styles.headerBtn}>
            <Ionicons name="settings-sharp" size={24} color="#607d8b" />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <View style={styles.logoPlaceholder}><Text style={{ fontSize: 10 }}>🚗</Text></View>
            <Text style={styles.headerTitle}>Control Driver</Text>
          </View>
          <TouchableOpacity onPress={() => setHideBalances(!hideBalances)} style={styles.headerBtn}>
            <Ionicons name={hideBalances ? "eye-off" : "eye"} size={24} color="#607d8b" />
          </TouchableOpacity>
        </View>

        <View style={styles.navBar}>
          <TabButton title="Dashboard" icon="dashboard" screen="dashboard" />
          <TabButton title="Billeteras" icon="wallet" screen="billeteras" />
          <TabButton title="Vehículo" icon="car" screen="combustible" />
          <TabButton title="Historial" icon="history" screen="historial" />
        </View>

        <View style={styles.content}>
          {renderScreen()}
        </View>

      </SafeAreaView>

      <RegistroDiarioModal
        modalVisible={registroDiarioModalVisible}
        handleCloseModal={handleCloseRegistroDiarioModal}
        handleSaveRegistroDiario={handleSaveRegistroDiario}
      />
      <CargaCombustibleModal
        modalVisible={cargaCombustibleModalVisible}
        billeteras={billeteras}
        handleCloseModal={handleCloseCargaCombustibleModal}
        handleSaveCargaCombustible={handleSaveCargaCombustible}
      />

      {/* BLOQUEO POR TRIAL VENCIDO */}
      {trialExpired && !isPro && (
        <View style={[StyleSheet.absoluteFill, { backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center', zIndex: 9999, padding: 25 }]}>
          <MaterialCommunityIcons name="shield-lock" size={100} color={COLORS.primary} />
          
          <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold', marginTop: 25, textAlign: 'center' }}>¿Quieres ahorrar de verdad?</Text>
          <Text style={{ color: '#aaa', textAlign: 'center', marginVertical: 20, fontSize: 16, lineHeight: 22, paddingHorizontal: 10 }}>
            Tu periodo de prueba ha finalizado. Por muy poca plata, Control Driver se convierte en tu aliado para ganar control.{"\n\n"}
            Ideal tanto para conductores de apps como para <Text style={{fontWeight: 'bold', color: COLORS.primary}}>gestionar tu auto particular</Text>. No dejes tus gastos al azar.
          </Text>

          {/* BOTÓN DE PAGO (Link a MercadoPago) */}
          <TouchableOpacity 
            style={{ backgroundColor: COLORS.primary, padding: 22, borderRadius: 15, width: '100%', alignItems: 'center', marginBottom: 15, elevation: 8 }}
            onPress={() => {
              const mpLink = "https://link.mercadopago.com.ar/tu_link_real"; // Reemplazar por el real
              Alert.alert(
                "🛒 Inversión Inteligente", 
                "Por solo $12 USD obtienes acceso PRO de por vida. Ganarás más dinero sabiendo exactamente cuánto gastas.\n\nSe abrirá MercadoPago.", 
                [
                  { text: "Lo pensaré", style: "cancel" },
                  { text: "¡Lo quiero ya!", onPress: () => Share.share({ message: "Quiero mi licencia de Control Driver: " + mpLink }) }
                ]
              );
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>ACTIVAR CONTRO TOTAL ($12 USD)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderWidth: 1, borderColor: '#333', padding: 18, borderRadius: 15, width: '100%', alignItems: 'center' }}
            onPress={() => setSettingsModalVisible(true)}
          >
            <Text style={{ color: '#aaa', fontWeight: 'bold', fontSize: 16 }}>🔑 Ya tengo un código</Text>
          </TouchableOpacity>

          <Text style={{ color: '#555', fontSize: 12, marginTop: 40 }}>Control Driver Professional by La Nube</Text>
        </View>
      )}
      <TransactionModal
        modalVisible={transactionModalVisible}
        modalType={transactionModalType}
        selectedWalletId={selectedWalletId}
        billeteras={billeteras}
        handleCloseModal={handleCloseTransactionModal}
        handleSaveTransaction={handleSaveTransaction}
      />

      <SettingsModal
        visible={settingsModalVisible}
        onClose={() => setSettingsModalVisible(false)}
        settings={{
          biometricEnabled,
          isPro,
          hideBalances,
          darkMode: false,
          weeklyGoal,
          vehicleProfile: {
            brand: '',
            model: '',
            year: '',
            engineDisplacement: '',
            fuelType: 'nafta',
            transmission: 'manual',
            acEnabled: false
          }
        }}
        onUpdateSettings={handleUpdateSettings}
        onCloudBackup={async () => {
          try {
            const user = await signInWithGoogle();
            if (user) {
              const backupData = JSON.stringify({
                billeteras, registrosDiarios, cargasCombustible, transactions, jornadas,
                settings: { isPro, hideBalances, weeklyGoal, biometricEnabled, vehicleProfile }
              });

              // Mostrar loading o UI feedback aquí sería ideal, pero usamos Alert por simplicidad
              const success = await uploadBackupToDrive(backupData);
              if (success) {
                Alert.alert("✅ Respaldo Exitoso", "Tus datos se guardaron en tu Google Drive correctamente.");
              }
            }
          } catch (error) {
            Alert.alert("Error", "No se pudo completar el respaldo en la nube.");
          }
        }}
        onManualBackup={handleManualBackup}
        onRestoreBackup={handleRestoreBackup}
        onCloudRestore={async () => {
          try {
            const user = await signInWithGoogle();
            if (user) {
              const jsonContent = await restoreBackupFromDrive();
              if (jsonContent) {
                const success = await handleRestoreBackup(jsonContent);
                // handleRestoreBackup ya muestra alerta de éxito
              } else {
                Alert.alert("Aviso", "No se encontraron copias de seguridad o se canceló la operación.");
              }
            }
          } catch (err) {
            Alert.alert("Error", "Fallo al restaurar desde Drive.");
          }
        }}
        onFactoryReset={handleFactoryReset}
        onRecalcularSaldos={handleRecalcularSaldos}
        onVerDiagnostico={handleVerDiagnostico}
      />

    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.headerBg,
  },
  header: {
    height: 50,
    backgroundColor: THEME.headerBg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  headerBtn: { padding: 5 },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoPlaceholder: { width: 24, height: 24, backgroundColor: '#eee', borderRadius: 4, marginRight: 8, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#bdc3c7' },
  navBar: { flexDirection: 'row', backgroundColor: THEME.tabBg, paddingTop: 5 },
  tabButton: { flex: 1, alignItems: 'center', paddingVertical: 10, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  tabActive: { backgroundColor: '#263644', borderBottomWidth: 2, borderBottomColor: THEME.accent },
  tabText: { fontSize: 11, marginTop: 4 },
  tabTextActive: { color: THEME.textLight, fontWeight: 'bold' },
  tabTextInactive: { color: THEME.textGray },
  content: { flex: 1, backgroundColor: THEME.background },
});

export default App;