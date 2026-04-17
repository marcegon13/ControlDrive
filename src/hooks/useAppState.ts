// src/hooks/useAppState.ts
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    Billetera, RegistroDiario, CargaCombustible, Transaction,
    TransactionType, ScreenType, ProSettings, Jornada, Mantenimiento, JornadaSummary
} from "../types";
import { STORAGE_KEYS, INITIAL_BILLETERAS, INITIAL_PRO_SETTINGS } from "../constants";
import { LocationManager } from "../services/locationManager";
import { DriveManager } from "../services/driveManager";

export const useAppState = () => {
    const [billeteras, setBilleteras] = useState<Billetera[]>(INITIAL_BILLETERAS);
    const [registrosDiarios, setRegistrosDiarios] = useState<RegistroDiario[]>([]);
    const [cargasCombustible, setCargasCombustible] = useState<CargaCombustible[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [jornadas, setJornadas] = useState<Jornada[]>([]);
    const [mantenimientos, setMantenimientos] = useState<Mantenimiento[]>([]);
    const [proSettings, setProSettings] = useState<ProSettings>(INITIAL_PRO_SETTINGS);
    const [currentScreen, setCurrentScreen] = useState<ScreenType>("dashboard");
    const [isLoading, setIsLoading] = useState(true);

    // Estados para modales
    const [registroDiarioModalVisible, setRegistroDiarioModalVisible] = useState(false);
    const [cargaCombustibleModalVisible, setCargaCombustibleModalVisible] = useState(false);
    const [transactionModalVisible, setTransactionModalVisible] = useState(false);
    const [resumenJornadaModalVisible, setResumenJornadaModalVisible] = useState(false);
    const [mantenimientoModalVisible, setMantenimientoModalVisible] = useState(false);
    const [jornadaSummary, setJornadaSummary] = useState<JornadaSummary | null>(null);

    const [transactionModalType, setTransactionModalType] = useState<TransactionType | null>(null);
    const [selectedWalletId, setSelectedWalletId] = useState<string | null>(null);

    // ... loadData and saveData (omitted for brevity) ...

    const loadData = async () => {
        try {
            const [
                savedBilleteras, savedRegistros, savedCargas,
                savedTransactions, savedSettings, savedJornadas, savedMantenimiento
            ] = await Promise.all([
                AsyncStorage.getItem(STORAGE_KEYS.BILLETERAS),
                AsyncStorage.getItem(STORAGE_KEYS.REGISTROS_DIARIOS),
                AsyncStorage.getItem(STORAGE_KEYS.CARGAS),
                AsyncStorage.getItem(STORAGE_KEYS.TRANSACTIONS),
                AsyncStorage.getItem(STORAGE_KEYS.SETTINGS),
                AsyncStorage.getItem(STORAGE_KEYS.JORNADAS),
                AsyncStorage.getItem(STORAGE_KEYS.MANTENIMIENTO),
            ]);

            if (savedBilleteras) setBilleteras(JSON.parse(savedBilleteras));
            if (savedSettings) setProSettings(JSON.parse(savedSettings));

            if (savedRegistros)
                setRegistrosDiarios(JSON.parse(savedRegistros).map((r: any) => ({ ...r, fecha: new Date(r.fecha) })));

            if (savedCargas)
                setCargasCombustible(JSON.parse(savedCargas).map((c: any) => ({ ...c, fecha: new Date(c.fecha) })));

            if (savedTransactions)
                setTransactions(JSON.parse(savedTransactions).map((t: any) => ({ ...t, fecha: new Date(t.fecha) })));

            if (savedJornadas)
                setJornadas(JSON.parse(savedJornadas).map((j: any) => ({ ...j, fecha: new Date(j.fecha) })));

            if (savedMantenimiento)
                setMantenimientos(JSON.parse(savedMantenimiento).map((m: any) => ({ ...m, fecha: new Date(m.fecha) })));

        } catch (error) {
            console.error("Error loading data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const saveData = async () => {
        try {
            await Promise.all([
                AsyncStorage.setItem(STORAGE_KEYS.BILLETERAS, JSON.stringify(billeteras)),
                AsyncStorage.setItem(STORAGE_KEYS.REGISTROS_DIARIOS, JSON.stringify(registrosDiarios)),
                AsyncStorage.setItem(STORAGE_KEYS.CARGAS, JSON.stringify(cargasCombustible)),
                AsyncStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions)),
                AsyncStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(proSettings)),
                AsyncStorage.setItem(STORAGE_KEYS.JORNADAS, JSON.stringify(jornadas)),
                AsyncStorage.setItem(STORAGE_KEYS.MANTENIMIENTO, JSON.stringify(mantenimientos)),
            ]);
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };


    // Cargar datos al montar el componente
    useEffect(() => {
        loadData();
    }, []);

    // Guardar datos automáticamente cuando cambia el estado
    useEffect(() => {
        if (!isLoading) {
            saveData();
        }
    }, [billeteras, registrosDiarios, cargasCombustible, transactions, jornadas, mantenimientos, proSettings]);

    const updateProSettings = (newSettings: Partial<ProSettings>) => {
        setProSettings(prev => ({ ...prev, ...newSettings }));
    };

    // --- MANEJO DE JORNADAS (KILOMETRAJE CON GPS) ---
    const handleStartJornada = async (kmInicio: number) => {
        const hasPermission = await LocationManager.requestPermissions();
        if (hasPermission) {
            await LocationManager.startTracking();
        } else {
            Alert.alert("Aviso", "Sin permisos de ubicación, el rastreo automático no funcionará.");
        }

        const nuevaJornada: Jornada = {
            id: Date.now().toString(),
            fecha: new Date(),
            kmInicio,
            finalizada: false,
        };
        setJornadas(prev => [...prev, nuevaJornada]);
        Alert.alert("🚀 Jornada Iniciada", `Kilometraje inicial: ${kmInicio} km`);
    };

    const calculateJornadaStats = (jornada: Jornada, endTime: Date = new Date()): JornadaSummary => {
        const startTime = new Date(jornada.fecha);
        // If the jornada is finished, we should probably use a stored end time or assume the next jornada start? 
        // For now, if it's finished but we don't have an explicit end date stored in Jornada, 
        // we might be estimating.
        // Actually, for viewing past jornadas, we need to know when it ended.
        // The current Jornada interface doesn't store explicit 'fechaFin'. 
        // Limitation: We will assume it ends when the next jornada starts OR 
        // if it's the last one, use current time?
        // Wait, for 'handleEnd', we have 'endTime'. 
        // For historical calculation, we might need to improve 'Jornada' type to store 'fechaFin'.

        // Let's rely on what we have. If we are just calculating for the "End Shift" event, we have endTime.
        // If we are viewing history, we might run into overlap issues. 
        // BETTER APPROACH FOR HISTORY: 
        // Store the snapshot in the Jornada object. 
        // It's safer to snapshot the summary when closing the shift, 
        // because "dynamic recalculation" is hard without a fixed 'fechaFin'.

        // BUT, the user wants to see it *now* for existing data.
        // Existing data doesn't have the snapshot.

        // Alternative: For viewing history, we can approximate 'endTime'.
        // If it is 'finalizada', check the date of the NEXT jornada or just assume a reasonable shift length?
        // Or better: Update 'Jornada' type to include 'summary' and 'fechaFin'.

        // Since I cannot migrate existing data easily without risk, I will implement a hybrid:
        // 1. Refactor 'handleEndJornada' to SAVE the summary and endTime in the Jornada object.
        // 2. For old jornadas (without summary), I will show a "Data not available" or try to calculate.

        // Let's stick to the extraction first.
        return {
            duracionHoras: 0,
            totalKm: 0,
            ingresos: 0,
            gastos: 0,
            gananciaNeta: 0,
            rentabilidadPorKm: 0,
            kmApps: 0,
            kmMuertos: 0
        }
    };

    const handleEndJornada = async (id: string, kmFin: number) => {
        try {
            await LocationManager.stopTracking();
        } catch (e) {
            console.log("Error stopping GPS:", e);
        }

        const endTime = new Date();

        const jornada = jornadas.find(j => j.id === id);
        if (!jornada) return;

        const startTime = new Date(jornada.fecha);
        const totalKm = kmFin - jornada.kmInicio;

        if (totalKm < 0) {
            Alert.alert("❌ Error", "El kilometraje final no puede ser menor al inicial.");
            return;
        }

        const duracionMs = endTime.getTime() - startTime.getTime();
        const duracionHoras = parseFloat((duracionMs / (1000 * 60 * 60)).toFixed(2));

        // Buffer de 1 hora antes y después para capturar gastos e ingresos cercanos
        const searchStartTime = new Date(startTime.getTime() - 60 * 60 * 1000);
        const searchEndTime = new Date(endTime.getTime() + 60 * 60 * 1000);

        // Filtrar Ingresos (usando buffer)
        const ingresosRegistros = registrosDiarios
            .filter(r => r.fecha >= searchStartTime && r.fecha <= searchEndTime)
            .reduce((sum, r) => sum + r.total, 0);

        const ingresosTransacciones = transactions
            .filter(t => t.tipo === "ingreso" && t.fecha >= searchStartTime && t.fecha <= searchEndTime)
            .reduce((sum, t) => sum + t.monto, 0);

        const totalIngresos = ingresosRegistros + ingresosTransacciones;

        const gastosCombustible = cargasCombustible
            .filter(c => c.fecha >= searchStartTime && c.fecha <= searchEndTime)
            .reduce((sum, c) => sum + c.total, 0);

        const gastosTransacciones = transactions
            .filter(t => t.tipo === "gasto" && t.fecha >= searchStartTime && t.fecha <= searchEndTime)
            .reduce((sum, t) => sum + t.monto, 0);

        // Sumar KM de Apps (reportados manualmente)
        const kmApps = registrosDiarios
            .filter(r => r.fecha >= searchStartTime && r.fecha <= searchEndTime)
            .reduce((sum, r) => sum + (r.kmApps || 0), 0);

        const kmMuertos = parseFloat((totalKm - kmApps).toFixed(2));

        const totalGastos = gastosCombustible + gastosTransacciones;
        const gananciaNeta = totalIngresos - totalGastos;
        const rentabilidadPorKm = totalKm > 0 ? gananciaNeta / totalKm : 0;

        const summary: JornadaSummary = {
            duracionHoras,
            totalKm,
            ingresos: totalIngresos,
            gastos: totalGastos,
            gananciaNeta,
            rentabilidadPorKm,
            kmApps,
            kmMuertos
        };

        // SAVE SNAPSHOT in Jornada!
        setJornadas(prev => prev.map(j => {
            if (j.id === id) {
                return {
                    ...j,
                    kmFin,
                    totalKm: parseFloat(totalKm.toFixed(2)),
                    finalizada: true,
                    // Persist for history viewing
                    summary,
                    fechaFin: endTime
                };
            }
            return j;
        }));

        setJornadaSummary(summary);
        setResumenJornadaModalVisible(true);
    };

    const handleCancelJornada = async (id: string) => {
        // Stop GPS if running
        await LocationManager.stopTracking();

        // Remove the jornada from state
        setJornadas(prev => prev.filter(j => j.id !== id));

        Alert.alert("Jornada Cancelada", "El conteo de GPS se ha detenido y el registro se eliminó.");
    };

    const handleViewJornada = (jornada: Jornada) => {
        if ((jornada as any).summary) {
            setJornadaSummary((jornada as any).summary);
            setResumenJornadaModalVisible(true);
        } else {
            // Fallback for old data or if logic changes
            // Construct a basic summary or Recalculate if possible?
            // Without 'fechaFin', exact recalc is hard. 
            // We'll show a basic alert or partial info.
            if (jornada.finalizada) {
                Alert.alert("Detalle no disponible", "Los datos detallados de esta jornada histórica no se guardaron (versión anterior).");
            } else {
                Alert.alert("En curso", "Esta jornada aún no ha finalizado.");
            }
        }
    };

    // --- MANEJO DE MANTENIMIENTO ---
    const handleSaveMantenimiento = (data: Omit<Mantenimiento, "id">) => {
        const nuevoMantenimiento: Mantenimiento = {
            ...data,
            id: Date.now().toString(),
        };
        setMantenimientos(prev => [...prev, nuevoMantenimiento]);

        // Descontar de la billetera
        setBilleteras(prev => prev.map(b =>
            b.id === data.billeteraId ? { ...b, saldo: b.saldo - data.monto } : b
        ));

        Alert.alert("✅ Éxito", "Registro de mantenimiento guardado.");
        setMantenimientoModalVisible(false);
    };

    const handleDeleteMantenimiento = (id: string) => {
        const mant = mantenimientos.find(m => m.id === id);
        if (!mant) return;

        Alert.alert("Eliminar Registro", "¿Deseas eliminar este mantenimiento?", [
            { text: "Cancelar", style: "cancel" },
            {
                text: "Eliminar y revertir",
                style: "destructive",
                onPress: () => {
                    setBilleteras(prev => prev.map(b =>
                        b.id === mant.billeteraId ? { ...b, saldo: b.saldo + mant.monto } : b
                    ));
                    setMantenimientos(prev => prev.filter(m => m.id !== id));
                }
            }
        ]);
    };

    const handleSaveRegistroDiario = async (data: Omit<RegistroDiario, "id">) => {
        try {
            const nuevoRegistro: RegistroDiario = { ...data, id: Date.now().toString() };
            setRegistrosDiarios((prev) => [...prev, nuevoRegistro]);

            setBilleteras((prev) =>
                prev.map((b) => {
                    if (b.nombre === "Efectivo") return { ...b, saldo: b.saldo + data.efectivo };
                    if (b.nombre === "Tarjetas/Plataforma") return { ...b, saldo: b.saldo + data.tarjetas };
                    if (b.nombre === "Billeteras Virtuales") return { ...b, saldo: b.saldo + data.billeterasVirtuales };
                    return b;
                })
            );
            Alert.alert("✅ Éxito", "Registro guardado correctamente");
            setRegistroDiarioModalVisible(false);
        } catch (error) {
            Alert.alert("❌ Error", "No se pudo guardar el registro");
        }
    };

    const handleSaveCargaCombustible = async (data: Omit<CargaCombustible, "id">) => {
        try {
            const nuevaCarga: CargaCombustible = { ...data, id: Date.now().toString() };
            setCargasCombustible((prev) => [...prev, nuevaCarga]);

            setBilleteras((prev) =>
                prev.map((b) => (b.id === data.billeteraId ? { ...b, saldo: b.saldo - data.total } : b))
            );
            Alert.alert("✅ Éxito", "Carga de combustible guardada");
            setCargaCombustibleModalVisible(false);
        } catch (error) {
            Alert.alert("❌ Error", "No se pudo guardar la carga");
        }
    };

    const handleDeleteCargaCombustible = (id: string) => {
        const carga = cargasCombustible.find((c) => c.id === id);
        if (!carga) return;

        Alert.alert("Eliminar Carga", `¿Eliminar carga de ${carga.estacion} por $${carga.total}?`, [
            { text: "Cancelar", style: "cancel" },
            {
                text: "Eliminar",
                style: "destructive",
                onPress: () => {
                    setBilleteras((prev) =>
                        prev.map((b) => (b.id === carga.billeteraId ? { ...b, saldo: b.saldo + carga.total } : b))
                    );
                    setCargasCombustible((prev) => prev.filter((c) => c.id !== id));
                },
            },
        ]);
    };

    const handleDeleteRegistroDiario = (id: string) => {
        const registro = registrosDiarios.find((r) => r.id === id);
        if (!registro) return;

        Alert.alert("Eliminar Registro", `¿Eliminar registro de ${registro.app} por $${registro.total}?`, [
            { text: "Cancelar", style: "cancel" },
            { text: "Solo eliminar", onPress: () => setRegistrosDiarios((prev) => prev.filter((r) => r.id !== id)) },
            {
                text: "Eliminar y revertir saldos",
                style: "destructive",
                onPress: () => {
                    setBilleteras((prev) =>
                        prev.map((b) => {
                            if (b.nombre === "Efectivo") return { ...b, saldo: b.saldo - registro.efectivo };
                            if (b.nombre === "Tarjetas/Plataforma") return { ...b, saldo: b.saldo - registro.tarjetas };
                            if (b.nombre === "Billeteras Virtuales") return { ...b, saldo: b.saldo - registro.billeterasVirtuales };
                            return b;
                        })
                    );
                    setRegistrosDiarios((prev) => prev.filter((r) => r.id !== id));
                },
            },
        ]);
    };

    const handleDeleteTransaction = (id: string) => {
        const transaction = transactions.find((t) => t.id === id);
        if (!transaction) return;

        Alert.alert("Eliminar Transacción", `¿Eliminar ${transaction.tipo} de $${transaction.monto}?`, [
            { text: "Cancelar", style: "cancel" },
            { text: "Solo eliminar", onPress: () => setTransactions((prev) => prev.filter((t) => t.id !== id)) },
            {
                text: "Eliminar y revertir saldos",
                style: "destructive",
                onPress: () => {
                    setBilleteras((prev) =>
                        prev.map((b) => {
                            if (transaction.tipo === "ingreso" && b.id === transaction.billeteraId) return { ...b, saldo: b.saldo - transaction.monto };
                            if (transaction.tipo === "gasto" && b.id === transaction.billeteraId) return { ...b, saldo: b.saldo + transaction.monto };
                            if (transaction.tipo === "transferencia") {
                                if (b.id === transaction.billeteraId) return { ...b, saldo: b.saldo + transaction.monto };
                                if (b.id === transaction.destinoId) return { ...b, saldo: b.saldo - transaction.monto };
                            }
                            return b;
                        })
                    );
                    setTransactions((prev) => prev.filter((t) => t.id !== id));
                },
            },
        ]);
    };

    const handleSaveTransaction = async (data: any) => {
        const nuevaTransaction: Transaction = { ...data, id: Date.now().toString() };
        setTransactions((prev) => [...prev, nuevaTransaction]);

        setBilleteras((prev) =>
            prev.map((b) => {
                if (data.tipo === "ingreso" && b.id === data.billeteraId) return { ...b, saldo: b.saldo + data.monto };
                if (data.tipo === "gasto" && b.id === data.billeteraId) return { ...b, saldo: b.saldo - data.monto };
                if (data.tipo === "transferencia") {
                    if (b.id === data.billeteraId) return { ...b, saldo: b.saldo - data.monto };
                    if (b.id === data.destinoId) return { ...b, saldo: b.saldo + data.monto };
                }
                return b;
            })
        );
        Alert.alert("✅ Éxito", "Transacción guardada");
    };

    return {
        state: {
            billeteras,
            registrosDiarios,
            cargasCombustible,
            transactions,
            jornadas,
            mantenimientos,
            proSettings,
            currentScreen,
            isLoading,
            registroDiarioModalVisible,
            cargaCombustibleModalVisible,
            transactionModalVisible,
            resumenJornadaModalVisible,
            mantenimientoModalVisible,
            jornadaSummary,
            transactionModalType,
            selectedWalletId,
        },
        actions: {
            setCurrentScreen,
            setRegistroDiarioModalVisible,
            setCargaCombustibleModalVisible,
            setTransactionModalVisible,
            setResumenJornadaModalVisible,
            setMantenimientoModalVisible,
            setTransactionModalType,
            setSelectedWalletId,
            updateProSettings,
            handleStartJornada,
            handleEndJornada,
            handleCancelJornada,
            handleViewJornada,
            handleSaveMantenimiento,
            handleDeleteMantenimiento,
            handleSaveRegistroDiario,
            handleSaveCargaCombustible,
            handleDeleteCargaCombustible,
            handleDeleteRegistroDiario,
            handleDeleteTransaction,
            handleSaveTransaction,
            handleOpenModal: (type: TransactionType, walletId: string | null) => {
                setTransactionModalType(type);
                setSelectedWalletId(walletId);
                setTransactionModalVisible(true);
            },
            handleCloseTransactionModal: () => {
                setTransactionModalVisible(false);
                setTransactionModalType(null);
                setSelectedWalletId(null);
            },
            handleExportData: () => {
                const { exportToCSV } = require("../utils/export");
                exportToCSV(registrosDiarios, cargasCombustible, transactions);
            },
            handleCloudBackup: async () => {
                const accessToken = await DriveManager.signIn();
                if (!accessToken) return;

                const backupData = {
                    billeteras,
                    registrosDiarios,
                    cargasCombustible,
                    transactions,
                    jornadas,
                    mantenimientos,
                    proSettings,
                    version: "1.0.0",
                    timestamp: new Date().toISOString(),
                };

                await DriveManager.uploadBackup(accessToken, JSON.stringify(backupData));
            },
            handleManualBackup: async () => {
                try {
                    const backupData = {
                        billeteras,
                        registrosDiarios,
                        cargasCombustible,
                        transactions,
                        jornadas,
                        mantenimientos,
                        proSettings,
                        version: "1.0.0",
                        timestamp: new Date().toISOString(),
                    };

                    const jsonString = JSON.stringify(backupData, null, 2);

                    await import('react-native').then(({ Share }) => {
                        Share.share({
                            message: jsonString,
                            title: 'Respaldo Control Driver'
                        });
                    });
                } catch (error) {
                    Alert.alert("Error", "No se pudo generar el respaldo manual.");
                }
            },
            handleFactoryReset: async () => {
                Alert.alert(
                    "⚠️ DANGER ZONE",
                    "¿Estás seguro de BORRAR TODOS los datos de la App? Esta acción es irreversible y dejará la app como recién instalada.",
                    [
                        { text: "Cancelar", style: "cancel" },
                        {
                            text: "SÍ, BORRAR TODO",
                            style: "destructive",
                            onPress: async () => {
                                try {
                                    await AsyncStorage.clear();
                                    setBilleteras(INITIAL_BILLETERAS);
                                    setRegistrosDiarios([]);
                                    setCargasCombustible([]);
                                    setTransactions([]);
                                    setJornadas([]);
                                    setMantenimientos([]);
                                    setProSettings(INITIAL_PRO_SETTINGS);
                                    Alert.alert("Reinicio Completo", "La app se ha reiniciado de fábrica.");
                                } catch (e) {
                                    Alert.alert("Error", "No se pudo limpiar el almacenamiento.");
                                }
                            }
                        }
                    ]
                );
            },
            handleRestoreBackup: async (jsonString: string) => {
                try {
                    const data = JSON.parse(jsonString);

                    // Validar estructura básica
                    if (!data.billeteras || !Array.isArray(data.billeteras)) {
                        throw new Error("Formato inválido: Falta 'billeteras'");
                    }

                    // Restaurar Estado
                    if (data.billeteras) setBilleteras(data.billeteras);
                    if (data.registrosDiarios) setRegistrosDiarios(data.registrosDiarios.map((r: any) => ({ ...r, fecha: new Date(r.fecha) })));
                    if (data.cargasCombustible) setCargasCombustible(data.cargasCombustible.map((c: any) => ({ ...c, fecha: new Date(c.fecha) })));
                    if (data.transactions) setTransactions(data.transactions.map((t: any) => ({ ...t, fecha: new Date(t.fecha) })));
                    if (data.jornadas) setJornadas(data.jornadas.map((j: any) => ({ ...j, fecha: new Date(j.fecha) })));
                    if (data.mantenimientos) setMantenimientos(data.mantenimientos.map((m: any) => ({ ...m, fecha: new Date(m.fecha) })));
                    if (data.proSettings) setProSettings(data.proSettings);

                    // Guardar inmediatamante
                    await Promise.all([
                        AsyncStorage.setItem(STORAGE_KEYS.BILLETERAS, JSON.stringify(data.billeteras)),
                        AsyncStorage.setItem(STORAGE_KEYS.REGISTROS_DIARIOS, JSON.stringify(data.registrosDiarios)),
                        AsyncStorage.setItem(STORAGE_KEYS.CARGAS, JSON.stringify(data.cargasCombustible)),
                        AsyncStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(data.transactions)),
                        AsyncStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(data.proSettings)),
                        AsyncStorage.setItem(STORAGE_KEYS.JORNADAS, JSON.stringify(data.jornadas || [])),
                        AsyncStorage.setItem(STORAGE_KEYS.MANTENIMIENTO, JSON.stringify(data.mantenimientos || [])),
                    ]);

                    Alert.alert("✅ Restauración Exitosa", "Tus datos han sido recuperados. La app se actualizará ahora.");
                    return true;
                } catch (error) {
                    console.error("Restoration error:", error);
                    Alert.alert("❌ Error", "El código JSON no es válido o está corrupto.");
                    return false;
                }
            }
        },
    };
};
