// src/constants/index.ts
import { Billetera } from "../types";

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
    SETTINGS: "@proSettings",
    JORNADAS: "@jornadas",
    MANTENIMIENTO: "@mantenimiento",
};

export const INITIAL_PRO_SETTINGS = {
    isPro: false,
    biometricEnabled: false,
    hideBalances: false,
    darkMode: false,
};

export const APPS_DISPONIBLES = ["Didi", "Uber", "Cabify", "Beat", "Particular", "Varias Apps"];
export const ESTACIONES_DISPONIBLES = ["YPF", "SHELL", "AXION", "PUMA", "Otra"];

export const APP_LOGOS: Record<string, any> = {
    "Didi": require("../../assets/didi.png"),
    "Uber": require("../../assets/uber.png"),
    "Mercado Pago": require("../../assets/mercadopago.png"),
    "Billeteras Virtuales": require("../../assets/mercadopago.png"),
    "Tarjetas/Plataforma": require("../../assets/uber.png"), // Por defecto Uber/Didi si es plataforma
};
