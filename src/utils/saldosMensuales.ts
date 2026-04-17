import { RegistroDiario, CargaCombustible, Transaction, Billetera } from "../types";

/**
 * Calcula el saldo de cada billetera SOLO para el mes actual
 * basándose en las transacciones del mes
 */
export const calcularSaldosMesActual = (
    registrosDiarios: RegistroDiario[],
    cargasCombustible: CargaCombustible[],
    transactions: Transaction[]
): Record<string, number> => {
    const ahora = new Date();
    const inicioMes = new Date(ahora.getFullYear(), ahora.getMonth(), 1);
    const finMes = new Date(ahora.getFullYear(), ahora.getMonth() + 1, 0);
    finMes.setHours(23, 59, 59, 999);

    const normalize = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

    const enMesActual = (fecha: Date) => {
        const norm = normalize(fecha);
        return norm >= inicioMes && norm <= finMes;
    };

    // Filtrar datos del mes actual
    const registrosMes = registrosDiarios.filter(r => enMesActual(new Date(r.fecha)));
    const cargasMes = cargasCombustible.filter(c => enMesActual(new Date(c.fecha)));
    const transactionsMes = transactions.filter(t => enMesActual(new Date(t.fecha)));

    // Calcular saldos
    const saldos: Record<string, number> = {
        "Efectivo": 0,
        "Tarjetas/Plataforma": 0,
        "Billeteras Virtuales": 0
    };

    // Sumar registros diarios
    registrosMes.forEach(r => {
        saldos["Efectivo"] += r.efectivo;
        saldos["Tarjetas/Plataforma"] += r.tarjetas;
        saldos["Billeteras Virtuales"] += r.billeterasVirtuales;
    });

    // Restar cargas de combustible
    cargasMes.forEach(c => {
        const billetera = getBilleteraNombreById(c.billeteraId);
        if (billetera && saldos[billetera] !== undefined) {
            saldos[billetera] -= c.total;
        }
    });

    // Aplicar transacciones
    transactionsMes.forEach(t => {
        const billeteraOrigen = getBilleteraNombreById(t.billeteraId);

        if (t.tipo === "ingreso" && billeteraOrigen && saldos[billeteraOrigen] !== undefined) {
            saldos[billeteraOrigen] += t.monto;
        } else if (t.tipo === "gasto" && billeteraOrigen && saldos[billeteraOrigen] !== undefined) {
            saldos[billeteraOrigen] -= t.monto;
        } else if (t.tipo === "transferencia" && billeteraOrigen && t.destinoId) {
            const billeteraDestino = getBilleteraNombreById(t.destinoId);
            if (saldos[billeteraOrigen] !== undefined) {
                saldos[billeteraOrigen] -= t.monto;
            }
            if (billeteraDestino && saldos[billeteraDestino] !== undefined) {
                saldos[billeteraDestino] += t.monto;
            }
        }
    });

    return saldos;
};

// Helper para obtener nombre de billetera por ID
function getBilleteraNombreById(id: string): string | null {
    const map: Record<string, string> = {
        "1": "Efectivo",
        "2": "Tarjetas/Plataforma",
        "3": "Billeteras Virtuales"
    };
    return map[id] || null;
}
