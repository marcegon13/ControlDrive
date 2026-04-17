import { RegistroDiario, CargaCombustible, Transaction, Jornada } from "./types";

export const formatearFechaHora = (date: Date): string => {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
        return "Fecha inválida";
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
    transactions: Transaction[],
    jornadas: Jornada[] = []
) => {
    const ahora = new Date();
    const hoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
    const inicioSemana = new Date(hoy);
    inicioSemana.setDate(hoy.getDate() - hoy.getDay());
    const inicioMes = new Date(ahora.getFullYear(), ahora.getMonth(), 1);

    // ✅ AGREGADO: Límites superiores para evitar mezcla de meses/años
    const finSemana = new Date(hoy);
    finSemana.setDate(hoy.getDate() + (6 - hoy.getDay()));
    finSemana.setHours(23, 59, 59, 999); // Fin del día

    const finMes = new Date(ahora.getFullYear(), ahora.getMonth() + 1, 0);
    finMes.setHours(23, 59, 59, 999); // Fin del día

    const normalize = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

    // ✅ CORREGIDO: Agregado límite superior maxDate
    const filterByDate = (items: any[], minDate: Date, maxDate: Date) => {
        return items.filter(item => {
            const itemDate = normalize(new Date(item.fecha));
            return itemDate >= minDate && itemDate <= maxDate;
        });
    };

    const filterByDay = (items: any[], target: Date) => {
        const targetTime = target.getTime();
        return items.filter(item => normalize(new Date(item.fecha)).getTime() === targetTime);
    };

    const registrosHoy = filterByDay(registrosDiarios, hoy);
    const registrosSemana = filterByDate(registrosDiarios, inicioSemana, finSemana);
    const registrosMes = filterByDate(registrosDiarios, inicioMes, finMes);

    const cargasHoy = filterByDay(cargasCombustible, hoy);
    const cargasSemana = filterByDate(cargasCombustible, inicioSemana, finSemana);
    const cargasMes = filterByDate(cargasCombustible, inicioMes, finMes);

    const transactionsHoy = filterByDay(transactions, hoy);
    const transactionsSemana = filterByDate(transactions, inicioSemana, finSemana);
    const transactionsMes = filterByDate(transactions, inicioMes, finMes);

    const jornadasHoy = filterByDay(jornadas, hoy);
    const jornadasSemana = filterByDate(jornadas, inicioSemana, finSemana);
    const jornadasMes = filterByDate(jornadas, inicioMes, finMes);

    const calcStats = (regs: RegistroDiario[], cargas: CargaCombustible[], trans: Transaction[], jors: Jornada[]) => {
        const ingresosRegs = regs.reduce((sum, r) => sum + r.total, 0);
        const ingresosTrans = trans.filter(t => t.tipo === "ingreso").reduce((sum, t) => sum + t.monto, 0);
        const gastosCargas = cargas.reduce((sum, c) => sum + c.total, 0);
        const gastosTrans = trans.filter(t => t.tipo === "gasto").reduce((sum, t) => sum + t.monto, 0);

        const totalIngresos = ingresosRegs + ingresosTrans;
        const totalGastos = gastosCargas + gastosTrans;

        // Calcular KM total desde jornadas
        const kmTotal = jors.reduce((sum, j) => sum + (j.totalKm || 0), 0);

        return {
            ingresos: totalIngresos,
            gastos: totalGastos,
            neto: totalIngresos - totalGastos,
            registros: regs.length + trans.length,
            km: kmTotal,
        };
    };

    return {
        hoy: calcStats(registrosHoy, cargasHoy, transactionsHoy, jornadasHoy),
        semana: calcStats(registrosSemana, cargasSemana, transactionsSemana, jornadasSemana),
        mes: calcStats(registrosMes, cargasMes, transactionsMes, jornadasMes),
    };
};