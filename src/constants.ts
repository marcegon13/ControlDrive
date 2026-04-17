import { Billetera } from "./types";

export const INITIAL_BILLETERAS: Billetera[] = [
    { id: "1", nombre: "Efectivo", saldo: 0, color: "#2ecc71", icono: "💵" },
    { id: "2", nombre: "Tarjetas/Plataforma", saldo: 0, color: "#3498db", icono: "💳" },
    { id: "3", nombre: "Billeteras Virtuales", saldo: 0, color: "#f1c40f", icono: "📲" },
];


export const STORAGE_KEYS = {
    BILLETERAS: "@billeteras",
    REGISTROS_DIARIOS: "@registrosDiarios",
    CARGAS: "@cargasCombustible",
    TRANSACTIONS: "@transactions",
    JORNADAS: "@jornadas",
    MANTENIMIENTOS: "@mantenimientos",
    SETTINGS: "@settings", // Clave para configuración
    VEHICLE_PROFILE: "@vehicleProfile", // Perfil del vehículo (marca, modelo, motor, etc.)
};

// ⚠️ MODO DE CONSTRUCCIÓN: 
// true = VERSIÓN ADMIN (Sin límites)
// false = VERSIÓN PÚBLICA (Trial activo)
export const BUILD_IS_ADMIN = true;

export const INITIAL_PRO_SETTINGS = {
    isPro: BUILD_IS_ADMIN,
    hideBalances: false,
    weeklyGoal: 0,
    biometricEnabled: false,
    darkMode: false,
    vehicleProfile: undefined // Se inicializará vacío
};

export const TRIAL_DAYS_LIMIT = 60; // Días de prueba para versión pública

export const APPS_DISPONIBLES = ["Didi", "Uber", "Cabify", "Beat", "Particular", "Varias Apps"];
export const ESTACIONES_DISPONIBLES = ["YPF", "SHELL", "AXION", "PUMA", "Otra"];
