import { Billetera, RegistroDiario, CargaCombustible, Transaction } from "../types";

/**
 * Genera un reporte de diagnóstico de los saldos
 * Para entender por qué Efectivo está en $0
 */
export const generarReporteDiagnostico = (
    billeteras: Billetera[],
    registrosDiarios: RegistroDiario[],
    cargasCombustible: CargaCombustible[],
    transactions: Transaction[]
): string => {
    let reporte = "📊 DIAGNÓSTICO DE SALDOS\n";
    reporte += "========================\n\n";

    // 1. Saldos guardados actualmente
    reporte += "💰 SALDOS ACTUALES (Guardados en AsyncStorage):\n";
    billeteras.forEach(b => {
        reporte += `  ${b.nombre}: $${b.saldo.toFixed(2)}\n`;
    });
    reporte += "\n";

    // 2. Análisis de registros diarios
    reporte += "📝 ANÁLISIS DE REGISTROS DIARIOS:\n";
    reporte += `  Total de registros: ${registrosDiarios.length}\n`;

    let totalEfectivo = 0;
    let totalTarjetas = 0;
    let totalVirtuales = 0;

    registrosDiarios.forEach(r => {
        totalEfectivo += r.efectivo || 0;
        totalTarjetas += r.tarjetas || 0;
        totalVirtuales += r.billeterasVirtuales || 0;
    });

    reporte += `  Suma Efectivo: $${totalEfectivo.toFixed(2)}\n`;
    reporte += `  Suma Tarjetas: $${totalTarjetas.toFixed(2)}\n`;
    reporte += `  Suma Virtuales: $${totalVirtuales.toFixed(2)}\n`;

    // Mostrar últimos 3 registros
    reporte += "\n  Últimos 3 registros:\n";
    registrosDiarios.slice(-3).forEach((r, i) => {
        reporte += `    ${i + 1}. Fecha: ${r.fecha}\n`;
        reporte += `       Efectivo: $${(r.efectivo || 0).toFixed(2)}\n`;
        reporte += `       Tarjetas: $${(r.tarjetas || 0).toFixed(2)}\n`;
        reporte += `       Virtuales: $${(r.billeterasVirtuales || 0).toFixed(2)}\n`;
    });
    reporte += "\n";

    // 3. Análisis de cargas de combustible
    reporte += "⛽ ANÁLISIS DE CARGAS DE COMBUSTIBLE:\n";
    reporte += `  Total de cargas: ${cargasCombustible.length}\n`;

    let totalCargasEfectivo = 0;
    let totalCargasTarjetas = 0;
    let totalCargasVirtuales = 0;

    cargasCombustible.forEach(c => {
        if (c.billeteraId === "1") totalCargasEfectivo += c.total;
        if (c.billeteraId === "2") totalCargasTarjetas += c.total;
        if (c.billeteraId === "3") totalCargasVirtuales += c.total;
    });

    reporte += `  Gastado de Efectivo: $${totalCargasEfectivo.toFixed(2)}\n`;
    reporte += `  Gastado de Tarjetas: $${totalCargasTarjetas.toFixed(2)}\n`;
    reporte += `  Gastado de Virtuales: $${totalCargasVirtuales.toFixed(2)}\n\n`;

    // 4. Análisis de transacciones
    reporte += "💸 ANÁLISIS DE TRANSACCIONES:\n";
    reporte += `  Total de transacciones: ${transactions.length}\n`;

    const ingresosEfectivo = transactions.filter(t => t.tipo === "ingreso" && t.billeteraId === "1").reduce((sum, t) => sum + t.monto, 0);
    const gastosEfectivo = transactions.filter(t => t.tipo === "gasto" && t.billeteraId === "1").reduce((sum, t) => sum + t.monto, 0);

    reporte += `  Ingresos a Efectivo: $${ingresosEfectivo.toFixed(2)}\n`;
    reporte += `  Gastos de Efectivo: $${gastosEfectivo.toFixed(2)}\n\n`;

    // 5. Cálculo esperado
    reporte += "🔢 SALDO ESPERADO DE EFECTIVO:\n";
    const saldoEsperado = totalEfectivo - totalCargasEfectivo + ingresosEfectivo - gastosEfectivo;
    reporte += `  ${totalEfectivo.toFixed(2)} (registros)\n`;
    reporte += `  - ${totalCargasEfectivo.toFixed(2)} (cargas)\n`;
    reporte += `  + ${ingresosEfectivo.toFixed(2)} (ingresos)\n`;
    reporte += `  - ${gastosEfectivo.toFixed(2)} (gastos)\n`;
    reporte += `  = $${saldoEsperado.toFixed(2)} ✅\n\n`;

    // 6. Comparación
    const billeteraEfectivo = billeteras.find(b => b.nombre === "Efectivo");
    const saldoGuardado = billeteraEfectivo?.saldo || 0;

    reporte += "⚠️ COMPARACIÓN:\n";
    reporte += `  Saldo guardado: $${saldoGuardado.toFixed(2)}\n`;
    reporte += `  Saldo esperado: $${saldoEsperado.toFixed(2)}\n`;
    reporte += `  Diferencia: $${(saldoGuardado - saldoEsperado).toFixed(2)}\n`;

    if (Math.abs(saldoGuardado - saldoEsperado) > 0.01) {
        reporte += "\n❌ HAY UNA DIFERENCIA! Los saldos no coinciden.\n";
        reporte += "   Solución: Toca 'Recalcular Saldos' en Configuración.\n";
    } else {
        reporte += "\n✅ Los saldos coinciden correctamente.\n";
    }

    return reporte;
};
