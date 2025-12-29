// src/utils/index.ts
import { RegistroDiario, CargaCombustible, Transaction } from "../types";

export const formatearFechaHora = (date: Date): string => {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
        try {
            // Intentar parsear si viene como string (desde JSON)
            const d = new Date(date);
            if (isNaN(d.getTime())) return "Fecha inválida";
            date = d;
        } catch {
            return "Fecha inválida";
        }
    }
    try {
        return date.toLocaleString("es-AR", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
        }).replace(".", "");
    } catch (error) {
        return "Error fecha";
    }
};

export const formatearMoneda = (monto: number): string => {
    return `$${monto.toFixed(2)}`;
};

export const calcularEstadisticasPorPeriodo = (
    registrosDiarios: RegistroDiario[],
    cargasCombustible: CargaCombustible[],
    transactions: Transaction[]
) => {
    const ahora = new Date();
    const hoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
    const inicioSemana = new Date(hoy);
    inicioSemana.setDate(hoy.getDate() - hoy.getDay());
    const inicioMes = new Date(ahora.getFullYear(), ahora.getMonth(), 1);

    // Helper para normalizar fecha
    const normalize = (d: Date) => {
        const date = new Date(d);
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };

    const filterByDate = (items: any[], minDate: Date) => {
        return items.filter(item => normalize(item.fecha) >= minDate);
    };

    const filterByDay = (items: any[], target: Date) => {
        const targetTime = target.getTime();
        return items.filter(item => normalize(item.fecha).getTime() === targetTime);
    };

    const registrosHoy = filterByDay(registrosDiarios, hoy);
    const registrosSemana = filterByDate(registrosDiarios, inicioSemana);
    const registrosMes = filterByDate(registrosDiarios, inicioMes);

    const cargasHoy = filterByDay(cargasCombustible, hoy);
    const cargasSemana = filterByDate(cargasCombustible, inicioSemana);
    const cargasMes = filterByDate(cargasCombustible, inicioMes);

    const transactionsHoy = filterByDay(transactions, hoy);
    const transactionsSemana = filterByDate(transactions, inicioSemana);
    const transactionsMes = filterByDate(transactions, inicioMes);

    const calcStats = (regs: RegistroDiario[], cargas: CargaCombustible[], trans: Transaction[]) => {
        const ingresosRegs = regs.reduce((sum, r) => sum + r.total, 0);
        const ingresosTrans = trans.filter(t => t.tipo === "ingreso").reduce((sum, t) => sum + t.monto, 0);
        const gastosCargas = cargas.reduce((sum, c) => sum + c.total, 0);
        const gastosTrans = trans.filter(t => t.tipo === "gasto").reduce((sum, t) => sum + t.monto, 0);

        const totalIngresos = ingresosRegs + ingresosTrans;
        const totalGastos = gastosCargas + gastosTrans;

        return {
            ingresos: totalIngresos,
            gastos: totalGastos,
            neto: totalIngresos - totalGastos,
            registros: regs.length + trans.length
        };
    };

    return {
        hoy: calcStats(registrosHoy, cargasHoy, transactionsHoy),
        semana: calcStats(registrosSemana, cargasSemana, transactionsSemana),
        mes: calcStats(registrosMes, cargasMes, transactionsMes),
    };
};
