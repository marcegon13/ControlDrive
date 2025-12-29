// src/types/index.ts

export interface ProSettings {
  isPro: boolean;
  biometricEnabled: boolean;
  hideBalances: boolean;
  darkMode: boolean;
}

export interface Billetera {
  id: string;
  nombre: string;
  saldo: number;
  color: string;
  icono: string;
}

export interface RegistroDiario {
  id: string;
  app: string;
  efectivo: number;
  tarjetas: number;
  billeterasVirtuales: number;
  total: number;
  fecha: Date;
}

export interface CargaCombustible {
  id: string;
  estacion: string;
  total: number;
  litros: number;
  precioPorLitro: number;
  billeteraId: string;
  fecha: Date;
}

export interface Transaction {
  id: string;
  tipo: "ingreso" | "gasto" | "transferencia";
  monto: number;
  descripcion: string;
  billeteraId: string;
  destinoId?: string;
  fecha: Date;
}

export interface Jornada {
  id: string;
  fecha: Date;
  kmInicio: number;
  kmFin?: number;
  totalKm?: number;
  finalizada: boolean;
}

export interface Mantenimiento {
  id: string;
  descripcion: string; // Cambio de aceite, frenos, etc.
  monto: number;
  km: number; // A qué KM se hizo
  fecha: Date;
  billeteraId: string;
}

export interface PeriodSummary {
  ingresos: number;
  gastos: number;
  neto: number;
}

export interface WalletBalance {
  id: string;
  nombre: string;
  balance: number;
  color: string;
  icon: string;
}

export interface DashboardData {
  stats: {
    hoy: PeriodSummary;
    semana: PeriodSummary;
    mes: PeriodSummary;
  };
  wallets: WalletBalance[];
}

export type TransactionType = "ingreso" | "gasto" | "transferencia";
export type ScreenType = "dashboard" | "billeteras" | "combustible" | "historial" | "vehiculo";