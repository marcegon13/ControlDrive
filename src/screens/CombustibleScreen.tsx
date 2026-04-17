import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView, TextInput, Alert, Modal, ActivityIndicator, Vibration } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from 'expo-location';
import { CargaCombustible, Jornada, RegistroDiario, Transaction, Mantenimiento, VehicleProfile, Billetera } from "../types";
import { formatearMoneda, formatearFechaHora } from "../utils";
import { calculateTripCost } from "../utils/calculator";
import { globalStyles } from "../styles";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from "../theme/colors";
import { LocationManager } from "../services/locationManager"; // ✅ AGREGADO

// Definición de Props extendida
interface CombustibleScreenProps {
  cargasCombustible: CargaCombustible[];
  handleOpenCargaCombustibleModal: () => void;
  handleDeleteCargaCombustible: (id: string) => void;
  jornadas: Jornada[];
  onSaveJornada: (jornada: Jornada) => void;
  registrosDiarios: RegistroDiario[];
  transactions: Transaction[];
  // Maintenance & Profile
  mantenimientos: Mantenimiento[];
  onAddMantenimiento: (m: Mantenimiento) => void;
  onDeleteMantenimiento: (id: string) => void;
  vehicleProfile: any; // Usar VehicleProfile si está exportado, sino any por ahora
  onUpdateVehicleProfile: (profile: any) => void;
  billeteras: Billetera[];
}

type TabType = 'km' | 'nafta' | 'service' | 'auto' | 'calc';

// Estado de la jornada activa para persistencia
interface ActiveShiftState {
  startTime: string; // ISO string
  startKm: number;
  accumulatedDistance: number; // Metros
}

const CombustibleScreen: React.FC<CombustibleScreenProps> = ({
  cargasCombustible,
  handleOpenCargaCombustibleModal,
  handleDeleteCargaCombustible,
  jornadas,
  onSaveJornada,
  registrosDiarios,
  transactions,
  mantenimientos,
  onAddMantenimiento,
  onDeleteMantenimiento,
  vehicleProfile,
  onUpdateVehicleProfile,
  billeteras
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('km');
  const [selectedJornada, setSelectedJornada] = useState<Jornada | null>(null); // Estado para ver detalle histórico

  // --- ESTADOS JORNADA ---
  const [isShiftActive, setIsShiftActive] = useState(false);
  const [startKmInput, setStartKmInput] = useState("");
  const [endKmInput, setEndKmInput] = useState("");

  const [shiftStartTime, setShiftStartTime] = useState<Date | null>(null);
  const [startKm, setStartKm] = useState<number>(0);
  const [gpsDistance, setGpsDistance] = useState<number>(0); // En KM (ya no en metros)

  // ✅ ELIMINADO: locationSubscription y lastLocation (ahora usa LocationManager)

  // --- ESTADOS RESUMEN ---
  const [summaryModalVisible, setSummaryModalVisible] = useState(false);
  const [summaryData, setSummaryData] = useState<any>(null);

  // --- ESTADOS SERVICE ---
  const [serviceModalVisible, setServiceModalVisible] = useState(false);
  const [serviceDesc, setServiceDesc] = useState("");
  const [serviceCost, setServiceCost] = useState("");
  const [serviceKmInput, setServiceKmInput] = useState("");
  const [serviceWalletId, setServiceWalletId] = useState("");

  // --- ESTADOS VEHICULO ---
  const [vehicleModalVisible, setVehicleModalVisible] = useState(false);
  const [editVehicleProfile, setEditVehicleProfile] = useState<VehicleProfile>({
    brand: '', model: '', year: '', engineDisplacement: '', fuelType: 'nafta', transmission: 'manual', acEnabled: false
  });

  // Cargar estado de jornada guardada al iniciar + Sincronizar GPS
  useEffect(() => {
    loadActiveShift();

    // ✅ AGREGADO: Sincronizar GPS cada 2 segundos desde AsyncStorage
    const gpsInterval = setInterval(async () => {
      if (isShiftActive) {
        const currentKm = await LocationManager.getCurrentDistance();
        setGpsDistance(currentKm);
      }
    }, 2000);

    return () => {
      clearInterval(gpsInterval);
      // NO stopTracking aquí - debe seguir en background
    };
  }, [isShiftActive]);

  const loadActiveShift = async () => {
    try {
      const stored = await AsyncStorage.getItem("CURRENT_SHIFT_STATE");
      if (stored) {
        const state: ActiveShiftState = JSON.parse(stored);
        setIsShiftActive(true);
        setShiftStartTime(new Date(state.startTime));
        setStartKm(state.startKm);

        // ✅ CORREGIDO: Cargar distancia desde LocationManager
        const currentKm = await LocationManager.getCurrentDistance();
        setGpsDistance(currentKm);

        // Re-activar Tracking GPS si estaba activo
        await startTracking();
      } else {
        // Si no hay activa, pre-llenar KM inicial con el último KM final conocido
        if (jornadas.length > 0) {
          const lastJornada = jornadas[0];
          if (lastJornada.kmFin) setStartKmInput(lastJornada.kmFin.toString());
        }
      }
    } catch (e) {
      console.error("Error cargando jornada activa", e);
    }
  };

  const saveActiveShiftState = async (state: ActiveShiftState | null) => {
    if (state) {
      await AsyncStorage.setItem("CURRENT_SHIFT_STATE", JSON.stringify(state));
    } else {
      await AsyncStorage.removeItem("CURRENT_SHIFT_STATE");
    }
  };

  // ✅ REEMPLAZADO: Ahora usa LocationManager en lugar de implementación local
  const requestPermissions = async () => {
    const granted = await LocationManager.requestPermissions();
    if (!granted) {
      Alert.alert("Permiso Denegado", "Se necesita ubicación para rastrear los kilómetros.");
    }
    return granted;
  };

  const startTracking = async () => {
    const hasPerm = await requestPermissions();
    if (!hasPerm) return;

    await LocationManager.startTracking(false); // No resetear, mantener distancia acumulada
  };

  const stopTracking = async () => {
    const finalKm = await LocationManager.stopTracking();
    return finalKm;
  };

  // --- HANDLERS JORNADA ---
  const handleStartShift = async () => {
    if (!startKmInput) { Alert.alert("Falta KM", "Ingresa el kilometraje del tablero."); return; }
    const km = parseInt(startKmInput);
    if (isNaN(km)) { Alert.alert("Error", "Kilometraje inválido"); return; }

    const now = new Date();
    setIsShiftActive(true);
    setShiftStartTime(now);
    setStartKm(km);
    setGpsDistance(0);

    const newState: ActiveShiftState = {
      startTime: now.toISOString(),
      startKm: km,
      accumulatedDistance: 0
    };
    await saveActiveShiftState(newState);

    // ✅ CORREGIDO: Iniciar tracking con reset
    await LocationManager.startTracking(true); // Resetear distancia
    Vibration.vibrate();
  };

  const handleStopShiftPrep = () => {
    // ✅ CORREGIDO: gpsDistance ya está en KM, no dividir por 1000
    const estimatedEndKm = startKm + Math.round(gpsDistance);
    setEndKmInput(estimatedEndKm.toString());
    // No paramos tracking todavía, solo abrimos el dialogo/modal (que aquí simulamos cambiando estado UI)
    // En la UI mostraremos el input de fin.
  };

  const handleFinishShift = async () => {
    if (!endKmInput) { Alert.alert("Falta KM", "Ingresa el kilometraje final."); return; }
    const endKm = parseInt(endKmInput);
    if (isNaN(endKm) || endKm < startKm) { Alert.alert("Error", "Kilometraje final inválido (menor al inicial?)."); return; }

    const endTime = new Date();
    await stopTracking();

    // CALCULAR RESUMEN
    const durationMs = endTime.getTime() - (shiftStartTime?.getTime() || endTime.getTime());
    const durationHrs = durationMs / (1000 * 60 * 60);

    const totalKm = endKm - startKm;

    // Filtrar transacciones en este periodo
    // Filtrar transacciones en este periodo
    const currentStats = calculateShiftStats(shiftStartTime || new Date(), endTime);

    // --- INTEGRACION INTELIGENTE PRO ---
    // Calcular costo teórico basado en Perfil del Auto (Motor, A/C, Combustible)
    let fuelPrice = 1100; // Precio de referencia default
    if (cargasCombustible.length > 0) {
      // Usar último precio registrado
      fuelPrice = cargasCombustible[cargasCombustible.length - 1].precioPorLitro;
    }

    // Calculamos consumo estimado
    const estimate = calculateTripCost(totalKm, fuelPrice, vehicleProfile, false);

    // Si NO hubo carga de nafta real, usamos la estimada para que el usuario vea su ganancia REALista
    let gastoAplicado = currentStats.gastos;
    let esGastoEstimado = false;

    if (currentStats.gastos === 0 && totalKm > 0) {
      gastoAplicado = estimate.estimatedCost;
      esGastoEstimado = true;
    } else {
      // Si hubo carga, sumamos gastos extra (peajes, etc) a la carga
      // gastoAplicado ya incluye la carga real
    }

    const netoFinal = currentStats.ingresos - (esGastoEstimado ? gastoAplicado + currentStats.gastos : gastoAplicado);
    // Nota: si es estimado, currentStats.gastos es 0 (solo peajes/ventas), asi que la formula es ingresos - estimado - otros_gastos.
    // Simplificado:
    const netoCalculado = currentStats.ingresos - (esGastoEstimado ? estimate.estimatedCost + currentStats.gastos : currentStats.gastos);

    const resumen = {
      duracion: durationHrs,
      recorrido: totalKm,
      ingresos: currentStats.ingresos,
      gastos: currentStats.gastos, // Muestra gasto de caja real
      gastoTeorico: estimate.estimatedCost, // Dato extra para el usuario
      esEstimado: esGastoEstimado,
      neto: netoCalculado,
      rentabilidadKm: totalKm > 0 ? netoCalculado / totalKm : 0
    };

    setSummaryData(resumen);
    setSummaryModalVisible(true);

    // Limpiar estado activo PERO no guardamos jornada hasta que cierre el modal (confirmación visual)
    setIsShiftActive(false);
    saveActiveShiftState(null);
  };

  const calculateShiftStats = (start: Date, end: Date) => {
    // ✅ NUEVO: Incluir gastos del DÍA de inicio (no solo del periodo exacto)
    const startOfDay = new Date(start);
    startOfDay.setHours(0, 0, 0, 0);

    const filterByDate = (date: Date) => date >= start && date <= end;
    const filterByDay = (date: Date) => date >= startOfDay && date <= end;

    const ingresosReg = registrosDiarios.filter(r => filterByDate(new Date(r.fecha))).reduce((acc, r) => acc + r.total, 0);
    const ingresosTx = transactions.filter(t => t.tipo === 'ingreso' && filterByDate(new Date(t.fecha))).reduce((acc, t) => acc + t.monto, 0);

    // ✅ CAMBIO CRÍTICO: Usar filterByDay para cargas (incluye TODO el día)
    const gastosCarga = cargasCombustible.filter(c => filterByDay(new Date(c.fecha))).reduce((acc, c) => acc + c.total, 0);
    const gastosTx = transactions.filter(t => t.tipo === 'gasto' && filterByDate(new Date(t.fecha))).reduce((acc, t) => acc + t.monto, 0);

    const totalIngresos = ingresosReg + ingresosTx;
    const totalGastos = gastosCarga + gastosTx;

    return { ingresos: totalIngresos, gastos: totalGastos, neto: totalIngresos - totalGastos };
  };

  const confirmSaveJornada = () => {
    setSummaryModalVisible(false);
    if (summaryData && shiftStartTime) {
      const nuevaJornada = {
        id: Date.now().toString(),
        fecha: shiftStartTime || new Date(),
        fechaFin: new Date(),
        kmInicio: startKm,
        kmFin: parseInt(endKmInput),
        totalKm: parseInt(endKmInput) - startKm,
        finalizada: true,
        summary: {
          duracionHoras: summaryData.duracion,
          totalKm: summaryData.recorrido,
          ingresos: summaryData.ingresos,
          gastos: summaryData.gastos,
          gananciaNeta: summaryData.neto,
          rentabilidadPorKm: summaryData.rentabilidadKm,
          kmApps: 0,
          kmMuertos: 0
        }
      } as unknown as Jornada;
      onSaveJornada(nuevaJornada);

      // Reset local inputs
      setStartKmInput(endKmInput); // El final de hoy es el inicio de mañana
      setEndKmInput("");
      setGpsDistance(0);
      setShiftStartTime(null);
    }
  };

  const cancelShift = () => {
    Alert.alert("Cancelar Jornada", "¿Estás seguro? Se perderán los datos de GPS de esta sesión.", [
      { text: "No", style: 'cancel' },
      {
        text: "Sí, Cancelar", style: 'destructive', onPress: async () => {
          await stopTracking(); // ✅ CORREGIDO: await
          setIsShiftActive(false);
          saveActiveShiftState(null);
          setGpsDistance(0);
          setShiftStartTime(null);
        }
      }
    ]);
  };


  // --- HANDLERS SERVICE & VEHICLE ---
  const handleSaveService = () => {
    if (!serviceDesc || !serviceCost || !serviceKmInput) { Alert.alert("Error", "Completa descripción, costo y KM."); return; }

    // Elegir billetera (si no eligió, usa la primera con saldo o efectivo)
    const walletId = serviceWalletId || (billeteras.find(b => b.saldo >= parseFloat(serviceCost))?.id || billeteras[0].id);

    const nuevo: Mantenimiento = {
      id: Date.now().toString(),
      descripcion: serviceDesc,
      km: parseInt(serviceKmInput),
      monto: parseFloat(serviceCost),
      billeteraId: walletId,
      fecha: new Date()
    };
    onAddMantenimiento(nuevo);
    setServiceModalVisible(false);
    setServiceDesc(""); setServiceCost(""); setServiceKmInput("");
  };

  const handleOpenVehicleEdit = () => {
    const defaultProfile: any = { brand: '', model: '', year: '', engineDisplacement: '', fuelType: 'nafta', transmission: 'manual', acEnabled: false };
    setEditVehicleProfile({ ...defaultProfile, ...(vehicleProfile || {}) });
    setVehicleModalVisible(true);
  };

  const handleSaveVehicle = () => {
    onUpdateVehicleProfile(editVehicleProfile);
    setVehicleModalVisible(false);
  };

  // --- RENDERERS ---

  const renderKM = () => (
    <View style={styles.tabContent}>
      {!isShiftActive ? (
        // ESTADO 1: SIN JORNADA ACTIVA
        <View style={styles.cardCenter}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <MaterialCommunityIcons name="racing-helmet" size={30} color="#2c3e50" style={{ marginRight: 10 }} />
            <Text style={styles.cardTitle}>Sin Jornada Activa</Text>
          </View>
          <Text style={{ textAlign: 'center', marginBottom: 20, color: COLORS.gray }}>
            Registra tu kilometraje del tablero para empezar a trabajar.
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>KM Inicial</Text>
            <TextInput
              style={styles.inputBig}
              value={startKmInput}
              onChangeText={setStartKmInput}
              keyboardType="numeric"
              placeholder="Ej. 120000"
            />
          </View>

          <TouchableOpacity style={styles.startButton} onPress={handleStartShift}>
            <Text style={styles.startButtonText}>🚀 INICIAR JORNADA</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // ESTADO 2: JORNADA EN CURSO
        <View style={styles.cardCenter}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 15 }}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>🚀 Jornada en Curso</Text>
              <Text style={{ fontSize: 12, color: COLORS.gray }}>Iniciada: {shiftStartTime ? formatearFechaHora(shiftStartTime) : '-'}</Text>
            </View>
            <MaterialCommunityIcons name="satellite-variant" size={24} color={gpsDistance > 0 ? COLORS.success : COLORS.gray} />
          </View>

          <View style={styles.statsGrid}>
            <View style={styles.statItemCompact}>
              <Text style={styles.statLabel}>KM Inicial</Text>
              <Text style={styles.statValue}>{startKm}</Text>
            </View>
            <View style={styles.statItemCompact}>
              <Text style={styles.statLabel}>GPS Activo</Text>
              <Text style={[styles.statValue, { color: COLORS.primary }]}>{gpsDistance.toFixed(2)} km</Text>
            </View>
          </View>

          {!endKmInput ? (
            // MOSTRAR BOTON PARA FINALIZAR
            <View style={{ marginTop: 30, width: '100%' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10, color: COLORS.gray }}>¿Terminaste por hoy?</Text>
              <TouchableOpacity style={styles.finishButton} onPress={handleStopShiftPrep}>
                <Text style={styles.finishButtonText}>🏁 FINALIZAR</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={cancelShift} style={{ marginTop: 20 }}>
                <Text style={{ textAlign: 'center', color: COLORS.danger, textDecorationLine: 'underline' }}>❌ Cancelar/Abortar Jornada</Text>
              </TouchableOpacity>
            </View>
          ) : (
            // CONFIRMACION KM FINAL
            <View style={{ marginTop: 20, width: '100%' }}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>KM Final (Tablero)</Text>
                <TextInput
                  style={styles.inputBig}
                  value={endKmInput}
                  onChangeText={setEndKmInput}
                  keyboardType="numeric"
                />
              </View>

              <TouchableOpacity style={styles.gpsSuggestion} onPress={() => setEndKmInput((startKm + Math.round(gpsDistance)).toString())}>
                <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>✨ Usar sugerencia GPS: {startKm + Math.round(gpsDistance)} km</Text>
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity style={[styles.finishButton, { backgroundColor: COLORS.gray, flex: 1, marginRight: 5 }]} onPress={() => setEndKmInput("")}>
                  <Text style={styles.finishButtonText}>Atrás</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.finishButton, { flex: 2, marginLeft: 5 }]} onPress={handleFinishShift}>
                  <Text style={styles.finishButtonText}>CONFIRMAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      )}

      {/* HISTORIAL JORNADA RECIENTE */}
      {jornadas.length > 0 && (
        <View style={{ marginTop: 20, padding: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10, color: COLORS.gray }}>Última Jornada</Text>
          <TouchableOpacity onPress={() => setSelectedJornada(jornadas[0])}>
            <View style={styles.miniCard}>
              <Text style={{ fontSize: 12, color: COLORS.gray }}>{formatearFechaHora(new Date(jornadas[0].fecha))}</Text>
              <Text style={{ fontWeight: 'bold' }}>KM: {jornadas[0].kmInicio} → {jornadas[0].kmFin}</Text>
              <Text style={{ color: COLORS.success, fontWeight: 'bold', alignSelf: 'flex-end' }}>{jornadas[0].totalKm} km Recorridos</Text>
              <Text style={{ fontSize: 10, color: COLORS.primary, marginTop: 5, textAlign: 'right' }}>Toque para ver detalle 🔍</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );


  // --- ESTADOS NAFTA (MOVIDOS DEL RENDER) ---
  const availableMonths = React.useMemo(() => {
    const months = new Set<string>();
    cargasCombustible.forEach(c => {
      const date = new Date(c.fecha);
      if (!isNaN(date.getTime())) {
        months.add(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`);
      }
    });

    if (months.size === 0) {
      const now = new Date();
      months.add(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`);
    }
    return Array.from(months).sort().reverse();
  }, [cargasCombustible]);

  const [selectedMonth, setSelectedMonth] = useState<string>(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });

  useEffect(() => {
    if (availableMonths.length > 0 && !availableMonths.includes(selectedMonth)) {
      setSelectedMonth(availableMonths[0]);
    }
  }, [availableMonths]); // eslint-disable-line react-hooks/exhaustive-deps


  // --- SUB-SCREEN: NAFTA (Puro JSX ahora) ---
  const renderNafta = () => {
    // Nombre del mes (Helper)
    const getMonthName = (monthKey: string) => {
      if (!monthKey) return "Mes";
      const parts = monthKey.split('-');
      if (parts.length !== 2) return monthKey;
      const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      return `${meses[parseInt(parts[1]) - 1]} ${parts[0]}`;
    };

    // Filtrar datos
    // PROTECCIÓN: cargasCombustible puede ser undefined al inicio
    const cargasFiltradas = (cargasCombustible || []).filter(c => {
      const date = new Date(c.fecha);
      const mes = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      return mes === selectedMonth;
    });

    const totalGastado = cargasFiltradas.reduce((sum, c) => sum + c.total, 0);
    const totalLitros = cargasFiltradas.reduce((sum, c) => sum + c.litros, 0);
    // const precioPromedio = totalLitros > 0 ? totalGastado / totalLitros : 0; // Unused

    return (
      <View style={styles.tabContent}>
        {/* Pestañas de Mes */}
        <View style={{ marginBottom: 15 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {availableMonths.map(month => (
              <TouchableOpacity
                key={month}
                onPress={() => setSelectedMonth(month)}
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  marginRight: 8,
                  borderRadius: 20,
                  backgroundColor: selectedMonth === month ? COLORS.primary : 'white',
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                }}
              >
                <Text style={{
                  fontWeight: 'bold',
                  color: selectedMonth === month ? 'white' : COLORS.primary
                }}>
                  {getMonthName(month)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.mainActionButton} onPress={handleOpenCargaCombustibleModal}>
          <Text style={styles.mainActionText}>➕ Registrar Carga</Text>
        </TouchableOpacity>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statCardValue}>{formatearMoneda(totalGastado)}</Text>
            <Text style={styles.statCardLabel}>Gastado ({getMonthName(selectedMonth)})</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statCardValue}>{totalLitros.toFixed(1)}L</Text>
            <Text style={styles.statCardLabel}>Litros</Text>
          </View>
        </View>

        <FlatList
          data={cargasFiltradas.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20, color: COLORS.gray }}>No hay cargas en este mes.</Text>}
          renderItem={({ item }) => (
            <View style={[styles.listItem, { borderLeftColor: "#e74c3c" }]}>
              <View style={styles.rowBetween}><Text style={styles.listTitle}>{item.estacion}</Text><TouchableOpacity onPress={() => handleDeleteCargaCombustible(item.id)}><Text style={styles.deleteButton}>🗑️</Text></TouchableOpacity></View>
              <View style={styles.rowBetween}><Text style={styles.listSubtitle}>{formatearMoneda(item.total)}</Text><Text style={styles.listDetail}>{item.litros}L ({formatearMoneda(item.precioPorLitro)}/L)</Text></View>
              <Text style={styles.listDate}>{formatearFechaHora(new Date(item.fecha))}</Text>
            </View>
          )}
        />
      </View>
    );
  };

  const renderService = () => (
    <View style={styles.tabContent}>
      <TouchableOpacity style={styles.mainActionButton} onPress={() => setServiceModalVisible(true)}>
        <Text style={styles.mainActionText}>🛠️ Registrar Service</Text>
      </TouchableOpacity>
      {mantenimientos.length === 0 ? (
        <View style={styles.emptyState}>
          <FontAwesome5 name="tools" size={40} color="#bdc3c7" />
          <Text style={styles.emptyText}>Sin registros</Text>
        </View>
      ) : (
        <FlatList
          data={mantenimientos.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={[styles.listItem, { borderLeftColor: "#f1c40f" }]}>
              <View style={styles.rowBetween}>
                <Text style={styles.listTitle}>{item.descripcion}</Text>
                <TouchableOpacity onPress={() => onDeleteMantenimiento(item.id)}>
                  <Text style={styles.deleteButton}>🗑️</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rowBetween}>
                <Text style={[styles.listSubtitle, { color: COLORS.danger }]}>{formatearMoneda(item.monto)}</Text>
                <Text style={styles.listDetail}>{item.km} km</Text>
              </View>
              <Text style={styles.listDate}>{formatearFechaHora(new Date(item.fecha))}</Text>
            </View>
          )}
        />
      )}
    </View>
  );

  const renderMiAuto = () => (
    <View style={styles.tabContent}>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
          <Text style={styles.cardTitle}>Perfil del Vehículo</Text>
          <MaterialCommunityIcons name="car-sports" size={30} color={COLORS.primary} />
        </View>

        <View style={styles.detailRow}><Text style={styles.label}>Marca:</Text><Text style={styles.value}>{vehicleProfile?.brand || '-'}</Text></View>
        <View style={styles.detailRow}><Text style={styles.label}>Modelo:</Text><Text style={styles.value}>{vehicleProfile?.model || '-'}</Text></View>
        <View style={styles.detailRow}><Text style={styles.label}>Año:</Text><Text style={styles.value}>{vehicleProfile?.year || '-'}</Text></View>
        <View style={styles.detailRow}><Text style={styles.label}>Motor:</Text><Text style={styles.value}>{vehicleProfile?.engineDisplacement || '-'}</Text></View>
        <View style={styles.detailRow}><Text style={styles.label}>Combustible:</Text><Text style={[styles.value, { textTransform: 'uppercase' }]}>{vehicleProfile?.fuelType || '-'}</Text></View>
        <View style={styles.detailRow}><Text style={styles.label}>Transmisión:</Text><Text style={[styles.value, { textTransform: 'capitalize' }]}>{vehicleProfile?.transmission || '-'}</Text></View>

        <TouchableOpacity style={[styles.mainActionButton, { marginTop: 20, backgroundColor: '#34495e' }]} onPress={handleOpenVehicleEdit}>
          <Text style={styles.mainActionText}>✏️ Editar Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderCalc = () => <View style={styles.tabContent}><View style={styles.card}><Text style={styles.cardTitle}>🧮 Calculadora</Text><TextInput style={styles.input} placeholder="Consumo" /><TouchableOpacity style={[styles.mainActionButton, { marginTop: 10 }]}><Text style={styles.mainActionText}>Calcular</Text></TouchableOpacity></View></View>;

  return (
    <View style={globalStyles.screenContainer}>
      {/* HEADER TABS SCROLLABLE */}
      <View style={styles.tabsHeader}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['km', 'nafta', 'service', 'auto', 'calc'].map((t) => (
            <TouchableOpacity key={t} onPress={() => setActiveTab(t as TabType)} style={[styles.tabItem, activeTab === t && styles.tabItemActive]}>
              <Text style={[styles.tabText, activeTab === t && styles.tabTextActive]}>
                {t === 'km' && '🚦 KM'}
                {t === 'nafta' && '⛽ Nafta'}
                {t === 'service' && '🛠️ Service'}
                {t === 'auto' && '🚗 Mi Auto'}
                {t === 'calc' && '🧮 Calc'}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={{ flex: 1, padding: 10 }}>
        {activeTab === 'km' && renderKM()}
        {activeTab === 'nafta' && renderNafta()}
        {activeTab === 'service' && renderService()}
        {activeTab === 'auto' && renderMiAuto()}
        {activeTab === 'calc' && renderCalc()}
      </View>

      {/* MODAL RESUMEN FINAL (Igual a la foto) */}
      <Modal visible={summaryModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.summaryModal}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
              <Text style={{ fontSize: 22 }}>🏁</Text>
              <Text style={styles.modalTitle}> Resumen de Jornada</Text>
            </View>
            <Text style={{ color: COLORS.gray, marginBottom: 20, textAlign: 'center' }}>¡Excelente trabajo! Aquí están tus números:</Text>

            <View style={styles.summaryBox}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>⏱️ Duración</Text>
                <Text style={styles.summaryValue}>{summaryData?.duracion.toFixed(1)} hs</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>🛣️ Recorrido</Text>
                <Text style={styles.summaryValue}>{summaryData?.recorrido} km</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>🟢 Ingresos</Text>
                <Text style={[styles.summaryValue, { color: COLORS.success }]}>{formatearMoneda(summaryData?.ingresos || 0)}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>🔴 Gastos (Caja)</Text>
                <Text style={[styles.summaryValue, { color: COLORS.danger }]}>{formatearMoneda(summaryData?.gastos || 0)}</Text>
              </View>

              {/* Mostrar Consumo Teórico si aplica */}
              <View style={[styles.summaryRow, { opacity: 0.8 }]}>
                <Text style={{ fontSize: 12, color: COLORS.gray }}>⛽ Consumo (Motor+A/C)</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: COLORS.gray }}>{formatearMoneda(summaryData?.gastoTeorico || 0)}</Text>
              </View>

              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <Text style={[styles.summaryLabel, { fontWeight: 'bold', fontSize: 16 }]}>
                  {summaryData?.esEstimado ? "💰 Ganancia (Est.)" : "💰 Ganancia Neta"}
                </Text>
                <Text style={[styles.summaryValue, { fontWeight: 'bold', fontSize: 18, color: (summaryData?.neto || 0) >= 0 ? COLORS.success : COLORS.danger }]}>{formatearMoneda(summaryData?.neto || 0)}</Text>
              </View>
              {summaryData?.esEstimado && (
                <Text style={{ fontSize: 10, color: COLORS.warning, textAlign: 'right', marginBottom: 5 }}>*Descontando consumo teórico</Text>
              )}

              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>📊 Rentabilidad/KM</Text>
                <Text style={styles.summaryValue}>{formatearMoneda(summaryData?.rentabilidadKm || 0)}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.closeModalBtn} onPress={confirmSaveJornada}>
              <Text style={styles.closeModalText}>Cerrar y Descansar 😴</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* MODAL DETALLE HISTORICO (Recuperado) */}
      <Modal visible={!!selectedJornada} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.summaryModal}>
            <Text style={styles.modalTitle}>📄 Detalle Jornada</Text>
            {selectedJornada && (
              <View style={{ width: '100%', marginTop: 10 }}>
                <Text style={{ color: COLORS.gray, marginBottom: 10 }}>{formatearFechaHora(new Date(selectedJornada.fecha))}</Text>

                <View style={styles.summaryRow}><Text style={styles.summaryLabel}>Duración</Text><Text style={styles.summaryValue}>{selectedJornada.summary?.duracionHoras.toFixed(1)} hs</Text></View>
                <View style={styles.summaryRow}><Text style={styles.summaryLabel}>Distancia</Text><Text style={styles.summaryValue}>{selectedJornada.totalKm} km</Text></View>
                <View style={styles.divider} />
                <View style={styles.summaryRow}><Text style={styles.summaryLabel}>Ingresos</Text><Text style={[styles.summaryValue, { color: COLORS.success }]}>{formatearMoneda(selectedJornada.summary?.ingresos || 0)}</Text></View>
                <View style={styles.summaryRow}><Text style={styles.summaryLabel}>Gastos</Text><Text style={[styles.summaryValue, { color: COLORS.danger }]}>{formatearMoneda(selectedJornada.summary?.gastos || 0)}</Text></View>
                <View style={styles.divider} />
                <View style={styles.summaryRow}><Text style={styles.summaryLabel}>Ganancia Neta</Text><Text style={[styles.summaryValue, { fontWeight: 'bold', fontSize: 18 }]}>{formatearMoneda(selectedJornada.summary?.gananciaNeta || 0)}</Text></View>
              </View>
            )}
            <TouchableOpacity
              style={[styles.finishButton, { marginTop: 20, width: '100%' }]}
              onPress={() => setSelectedJornada(null)}
            >
              <Text style={styles.finishButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* MODAL SERVICE */}
      <Modal visible={serviceModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={[styles.summaryModal, { width: '90%' }]}>
            <Text style={styles.modalTitle}>Nuevo Mantenimiento</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Descripción (Ej. Aceite y Filtro)</Text>
              <TextInput style={styles.inputBig} value={serviceDesc} onChangeText={setServiceDesc} placeholder="Detalle..." />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Costo</Text>
              <TextInput style={styles.inputBig} value={serviceCost} onChangeText={setServiceCost} keyboardType="numeric" placeholder="$ 0" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Kilometraje Actual</Text>
              <TextInput style={styles.inputBig} value={serviceKmInput} onChangeText={setServiceKmInput} keyboardType="numeric" placeholder="123000" />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity style={[styles.finishButton, { backgroundColor: COLORS.gray, flex: 1, marginRight: 5 }]} onPress={() => setServiceModalVisible(false)}>
                <Text style={styles.finishButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.finishButton, { flex: 2, marginLeft: 5, backgroundColor: COLORS.primary }]} onPress={handleSaveService}>
                <Text style={styles.finishButtonText}>GUARDAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* MODAL VEHICULO */}
      <Modal visible={vehicleModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={[styles.summaryModal, { width: '90%' }]}>
            <Text style={styles.modalTitle}>Editar Vehículo</Text>
            <ScrollView style={{ width: '100%', maxHeight: 400 }}>
              <Text style={styles.inputLabel}>Marca (Ej. Fiat)</Text>
              <TextInput style={styles.inputBig} value={editVehicleProfile.brand} onChangeText={t => setEditVehicleProfile({ ...editVehicleProfile, brand: t })} />

              <Text style={styles.inputLabel}>Modelo (Ej. Cronos)</Text>
              <TextInput style={styles.inputBig} value={editVehicleProfile.model} onChangeText={t => setEditVehicleProfile({ ...editVehicleProfile, model: t })} />

              <Text style={styles.inputLabel}>Año</Text>
              <TextInput style={styles.inputBig} value={editVehicleProfile.year} onChangeText={t => setEditVehicleProfile({ ...editVehicleProfile, year: t })} keyboardType="numeric" />

              <Text style={styles.inputLabel}>Motor (Ej. 1.6)</Text>
              <TextInput style={styles.inputBig} value={editVehicleProfile.engineDisplacement} onChangeText={t => setEditVehicleProfile({ ...editVehicleProfile, engineDisplacement: t })} />

              <Text style={styles.inputLabel}>Tipo Combustible</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
                {['nafta', 'gnc', 'diesel'].map(type => (
                  <TouchableOpacity
                    key={type}
                    onPress={() => setEditVehicleProfile({ ...editVehicleProfile, fuelType: type as any })}
                    style={[
                      styles.tabItem,
                      editVehicleProfile.fuelType === type && styles.tabItemActive
                    ]}
                  >
                    <Text style={{ textTransform: 'uppercase', fontSize: 10, fontWeight: editVehicleProfile.fuelType === type ? 'bold' : 'normal' }}>
                      {type}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <View style={{ flexDirection: 'row', marginTop: 10, width: '100%', marginBottom: 20 }}>
              <TouchableOpacity style={[styles.finishButton, { backgroundColor: COLORS.gray, flex: 1, marginRight: 5 }]} onPress={() => setVehicleModalVisible(false)}>
                <Text style={styles.finishButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.finishButton, { flex: 2, marginLeft: 5, backgroundColor: '#34495e' }]} onPress={handleSaveVehicle}>
                <Text style={styles.finishButtonText}>GUARDAR PERFIL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  tabsHeader: { flexDirection: 'row', backgroundColor: '#fff', elevation: 2, paddingVertical: 10 },
  tabItem: { paddingHorizontal: 15, paddingVertical: 8, marginHorizontal: 5, borderRadius: 20, borderWidth: 1, borderColor: 'transparent' },
  tabItemActive: { backgroundColor: '#f1f8e9', borderColor: '#2ecc71', borderBottomWidth: 3 },
  tabText: { color: '#7f8c8d', fontWeight: '600' },
  tabTextActive: { color: '#2c3e50', fontWeight: 'bold' },
  tabContent: { flex: 1 },

  // Cards & Layout
  cardCenter: { backgroundColor: 'white', borderRadius: 12, padding: 20, alignItems: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#2c3e50' },
  statsGrid: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 10 },
  statItemCompact: { alignItems: 'center', flex: 1 },
  statLabel: { fontSize: 12, color: COLORS.gray },
  statValue: { fontSize: 18, fontWeight: 'bold', color: '#2c3e50' },

  // Inputs & Buttons
  inputContainer: { width: '100%', marginBottom: 15 },
  inputLabel: { fontSize: 12, color: COLORS.gray, marginBottom: 5 },
  inputBig: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 15, fontSize: 18, textAlign: 'center', backgroundColor: '#f9f9f9', width: '100%' },
  startButton: { backgroundColor: '#2ecc71', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center', shadowColor: "#2ecc71", shadowOpacity: 0.3, shadowRadius: 5, elevation: 5 },
  startButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16, letterSpacing: 1 },
  finishButton: { backgroundColor: '#e74c3c', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center' },
  finishButtonText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  gpsSuggestion: { padding: 10, backgroundColor: '#e3f2fd', borderRadius: 5, marginBottom: 15 },

  // Modal Resumen
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 20 },
  summaryModal: { backgroundColor: 'white', borderRadius: 20, padding: 25, alignItems: 'center' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#2c3e50' },
  summaryBox: { backgroundColor: '#f8f9fa', borderRadius: 12, padding: 15, width: '100%', marginBottom: 20 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  summaryLabel: { color: '#555' },
  summaryValue: { fontWeight: 'bold' },
  divider: { height: 1, backgroundColor: '#ddd', marginVertical: 8 },
  closeModalBtn: { backgroundColor: '#2ecc71', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 25, width: '100%', alignItems: 'center' },
  closeModalText: { color: 'white', fontWeight: 'bold', fontSize: 16 },

  // Otros
  miniCard: { backgroundColor: 'white', padding: 10, borderRadius: 8, borderWidth: 1, borderColor: '#eee' },
  mainActionButton: { backgroundColor: "#2ecc71", padding: 12, borderRadius: 8, alignItems: "center", marginBottom: 16 },
  mainActionText: { color: "white", fontSize: 16, fontWeight: "bold" },
  statsRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  statCard: { flex: 1, backgroundColor: "white", padding: 10, borderRadius: 8, alignItems: "center", marginHorizontal: 4, elevation: 1 },
  statCardValue: { fontSize: 16, fontWeight: "bold", color: "#2c3e50" },
  statCardLabel: { fontSize: 12, color: "#7f8c8d" },
  listItem: { backgroundColor: "white", padding: 12, borderRadius: 8, marginBottom: 8, borderLeftWidth: 4, elevation: 1 },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", marginBottom: 4 },
  listTitle: { fontSize: 16, fontWeight: "600", color: "#2c3e50" },
  listSubtitle: { fontSize: 14, color: "#7f8c8d" },
  listDetail: { fontSize: 12, color: "#7f8c8d" },
  listDate: { fontSize: 11, color: "#95a5a6", marginTop: 2 },
  deleteButton: { fontSize: 16, color: "#e74c3c", marginLeft: 10 },
  infoBox: { alignItems: 'center', justifyContent: 'center', padding: 20, marginTop: 50 },
  infoTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10, color: '#2c3e50' },
  infoText: { textAlign: 'center', color: '#7f8c8d', marginTop: 5 },
  emptyState: { alignItems: 'center', justifyContent: 'center', padding: 30, opacity: 0.6 },
  emptyText: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  emptySubText: { textAlign: 'center', marginTop: 5 },
  card: { backgroundColor: 'white', padding: 15, borderRadius: 10, elevation: 2 },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#eee' },
  label: { fontWeight: '600', color: '#7f8c8d' },
  value: { fontWeight: 'bold', color: '#2c3e50' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginTop: 5, backgroundColor: '#f9f9f9' }
});

export default CombustibleScreen;
