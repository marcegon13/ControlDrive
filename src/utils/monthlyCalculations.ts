/**
 * 📊 UTILIDADES DE CÁLCULO MENSUAL
 * 
 * Funciones para calcular totales, balances y comparaciones por mes
 * Sin modificar el código existente
 */

import { RegistroDiario, CargaCombustible, Transaction, Billetera } from '../types';

/**
 * Verifica si una fecha pertenece a un mes específico
 * @param fecha - Date a verificar
 * @param monthKey - Mes en formato "YYYY-MM" (ej: "2026-01")
 */
export const isSameMonth = (fecha: Date, monthKey: string): boolean => {
    const date = fecha instanceof Date ? fecha : new Date(fecha);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}` === monthKey;
};

/**
 * Interfaz para los totales mensuales
 */
export interface MonthlyTotals {
    ingresosDidi: number;
    ingresosUber: number;
    ingresosOtros: number;
    totalIngresos: number;
    gastosCombustible: number;
    gastosOtros: number;
    totalGastos: number;
    gananciaNeta: number;

    // Desglose por billetera
    porBilletera: {
        efectivo: { ingresos: number; gastos: number; neto: number };
        tarjetas: { ingresos: number; gastos: number; neto: number };
        virtual: { ingresos: number; gastos: number; neto: number };
    };
}

/**
 * Calcula los totales de un mes específico
 */
export const calculateMonthlyTotals = (
    registros: RegistroDiario[],
    cargas: CargaCombustible[],
    transactions: Transaction[],
    monthKey: string
): MonthlyTotals => {

    // Filtrar datos del mes
    const registrosDelMes = registros.filter(r => isSameMonth(r.fecha, monthKey));
    const cargasDelMes = cargas.filter(c => isSameMonth(c.fecha, monthKey));
    const transactionsDelMes = transactions.filter(t => isSameMonth(t.fecha, monthKey));

    // Calcular ingresos
    const ingresosDidi = registrosDelMes
        .filter(r => r.app === 'Didi')
        .reduce((sum, r) => sum + r.total, 0);

    const ingresosUber = registrosDelMes
        .filter(r => r.app === 'Uber')
        .reduce((sum, r) => sum + r.total, 0);

    const ingresosOtros = transactionsDelMes
        .filter(t => t.tipo === 'ingreso' && t.descripcion !== '⚖️ Ajuste Manual de Saldo') // ✅ Ignorar ajustes viejos mal tipados
        .reduce((sum, t) => sum + t.monto, 0);

    const totalIngresos = ingresosDidi + ingresosUber + ingresosOtros;

    // Calcular gastos
    const gastosCombustible = cargasDelMes.reduce((sum, c) => sum + c.total, 0);

    const gastosOtros = transactionsDelMes
        .filter(t => t.tipo === 'gasto' && t.descripcion !== '⚖️ Ajuste Manual de Saldo') // ✅ Ignorar ajustes viejos mal tipados
        .reduce((sum, t) => sum + t.monto, 0);

    const totalGastos = gastosCombustible + gastosOtros;

    // Desglose por billetera
    const efectivoIngresos = registrosDelMes.reduce((sum, r) => sum + r.efectivo, 0);
    const tarjetasIngresos = registrosDelMes.reduce((sum, r) => sum + r.tarjetas, 0);
    const virtualIngresos = registrosDelMes.reduce((sum, r) => sum + r.billeterasVirtuales, 0);

    // Gastos por billetera (combustible + transacciones)
    const efectivoGastos = cargasDelMes
        .filter(c => c.billeteraId === '1')
        .reduce((sum, c) => sum + c.total, 0) +
        transactionsDelMes
            .filter(t => t.tipo === 'gasto' && t.billeteraId === '1' && t.descripcion !== '⚖️ Ajuste Manual de Saldo')
            .reduce((sum, t) => sum + t.monto, 0);

    const tarjetasGastos = cargasDelMes
        .filter(c => c.billeteraId === '2')
        .reduce((sum, c) => sum + c.total, 0) +
        transactionsDelMes
            .filter(t => t.tipo === 'gasto' && t.billeteraId === '2' && t.descripcion !== '⚖️ Ajuste Manual de Saldo')
            .reduce((sum, t) => sum + t.monto, 0);

    const virtualGastos = cargasDelMes
        .filter(c => c.billeteraId === '3')
        .reduce((sum, c) => sum + c.total, 0) +
        transactionsDelMes
            .filter(t => t.tipo === 'gasto' && t.billeteraId === '3' && t.descripcion !== '⚖️ Ajuste Manual de Saldo')
            .reduce((sum, t) => sum + t.monto, 0);

    return {
        ingresosDidi,
        ingresosUber,
        ingresosOtros,
        totalIngresos,
        gastosCombustible,
        gastosOtros,
        totalGastos,
        gananciaNeta: totalIngresos - totalGastos,
        porBilletera: {
            efectivo: {
                ingresos: efectivoIngresos,
                gastos: efectivoGastos,
                neto: efectivoIngresos - efectivoGastos
            },
            tarjetas: {
                ingresos: tarjetasIngresos,
                gastos: tarjetasGastos,
                neto: tarjetasIngresos - tarjetasGastos
            },
            virtual: {
                ingresos: virtualIngresos,
                gastos: virtualGastos,
                neto: virtualIngresos - virtualGastos
            }
        }
    };
};

/**
 * Compara dos meses y devuelve las diferencias
 */
export const compareMonths = (
    mes1: MonthlyTotals,
    mes2: MonthlyTotals
): {
    ingresosVariacion: number;
    gastosVariacion: number;
    netaVariacion: number;
    ingresosPercent: number;
    gastosPercent: number;
    netaPercent: number;
} => {

    const ingresosVariacion = mes1.totalIngresos - mes2.totalIngresos;
    const gastosVariacion = mes1.totalGastos - mes2.totalGastos;
    const netaVariacion = mes1.gananciaNeta - mes2.gananciaNeta;

    return {
        ingresosVariacion,
        gastosVariacion,
        netaVariacion,
        ingresosPercent: mes2.totalIngresos > 0 ? (ingresosVariacion / mes2.totalIngresos) * 100 : 0,
        gastosPercent: mes2.totalGastos > 0 ? (gastosVariacion / mes2.totalGastos) * 100 : 0,
        netaPercent: mes2.gananciaNeta > 0 ? (netaVariacion / mes2.gananciaNeta) * 100 : 0,
    };
};

/**
 * Obtiene el mes anterior en formato "YYYY-MM"
 */
export const getPreviousMonth = (monthKey: string): string => {
    const [year, month] = monthKey.split('-').map(Number);
    const date = new Date(year, month - 1, 1);
    date.setMonth(date.getMonth() - 1);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
};

/**
 * Formatea un número como moneda
 */
export const formatCurrency = (amount: number): string => {
    return `$${amount.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};
