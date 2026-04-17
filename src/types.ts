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

// Definimos el tipo fuera para reutilización y agregamos 'ajuste'
export type TransactionType = "ingreso" | "gasto" | "transferencia" | "ajuste";

export interface Transaction {
    id: string;
    tipo: TransactionType;
    monto: number;
    descripcion: string;
    billeteraId: string;
    destinoId?: string;
    fecha: Date;
}

export interface EstadisticasPeriodo {
    ingresos: number;
    gastos: number;
    neto: number;
    registros: number;
}

export type ScreenType = "dashboard" | "billeteras" | "combustible" | "historial";

export interface Jornada {
    id: string;
    fecha: Date;
    fechaFin?: Date;
    totalKm: number;
    kmInicio?: number;
    kmFin?: number;
    finalizada?: boolean;
    horasTrabajadas?: number;
    recaudacionHora?: number;
    summary?: {
        duracionHoras: number;
        totalKm: number;
        ingresos: number;
        gastos: number;
        gananciaNeta: number;
        rentabilidadPorKm: number;
    };
}

export interface VehicleProfile {
    brand: string;
    model: string;
    year: string;
    engineDisplacement: string;
    fuelType: string;
    transmission: string;
    acEnabled: boolean;
}

export interface ProSettings {
    isPro: boolean;
    hideBalances: boolean;
    weeklyGoal: number;
    biometricEnabled: boolean;
    darkMode: boolean;
    vehicleProfile: VehicleProfile;
}

export interface Mantenimiento {
    id: string;
    descripcion: string;
    km: number;
    monto: number;
    billeteraId: string;
    fecha: Date;
}

export interface JornadaSummary {
    duracionHoras: number;
    totalKm: number;
    ingresos: number;
    gastos: number;
    gananciaNeta: number;
    rentabilidadPorKm: number;
    kmApps?: number;
    kmMuertos?: number;
}
