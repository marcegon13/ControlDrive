// src/types/index.ts

// Perfil de Vehiculo para Settings
export interface VehicleProfile {
  brand: string;
  model: string;
  year: string;
  engineDisplacement: string; // "1.4", "1.6", "2.0"
  fuelType: "nafta" | "gnc" | "diesel" | "hibrido";
  transmission: "manual" | "automatico";
  acEnabled: boolean; // For "Summer Mode"
}

// Resumen de la Jornada (Ingresos, Gastos, Rentabilidad)
export interface JornadaSummary {
  duracionHoras: number;
  totalKm: number;
  ingresos: number;
  gastos: number;
  gananciaNeta: number;
  rentabilidadPorKm: number;
  kmApps: number;
  kmMuertos: number;
}

// Configuración Pro
export interface ProSettings {
  isPro: boolean;
  biometricEnabled: boolean;
  hideBalances: boolean;
  darkMode: boolean;
  weeklyGoal: number;
  vehicleProfile: VehicleProfile;
}

// Entidades Principales
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
  // Campos opcionales para futura expansión
  kmApps?: number;
  viajes?: number;
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

// JORNADA: Aquí agregamos explícitamente fechaFin y summary como opcionales
export interface Jornada {
  id: string;
  fecha: Date;          // Inicio
  kmInicio: number;

  // Opcionales porque al iniciar no existen, se llenan al finalizar
  kmFin?: number;
  totalKm?: number;
  finalizada: boolean;

  fechaFin?: Date;      // Fin
  summary?: JornadaSummary;
}

export interface Mantenimiento {
  id: string;
  descripcion: string;
  monto: number;
  km: number;
  fecha: Date;
  billeteraId: string;
}

// Dashboard Helpers
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