import { Billetera, RegistroDiario, CargaCombustible, Transaction } from "../types";

/**
 * Recalcula los saldos de las billeteras desde CERO
 * basándose en TODO el historial de transacciones
 */
export const recalcularSaldosDesdeHistorial = (
    billeteras: Billetera[],
    registrosDiarios: RegistroDiario[],
    cargasCombustible: CargaCombustible[],
    transactions: Transaction[]
): Billetera[] => {
    // Crear mapa de saldos inicializados en 0
    const saldos: Record<string, number> = {};
    billeteras.forEach(b => {
        saldos[b.nombre] = 0;
    });

    // 1. Sumar TODOS los registros diarios (ingresos de apps)
    registrosDiarios.forEach(r => {
        saldos["Efectivo"] = (saldos["Efectivo"] || 0) + (r.efectivo || 0);
        saldos["Tarjetas/Plataforma"] = (saldos["Tarjetas/Plataforma"] || 0) + (r.tarjetas || 0);
        saldos["Billeteras Virtuales"] = (saldos["Billeteras Virtuales"] || 0) + (r.billeterasVirtuales || 0);
    });

    // 2. Restar TODAS las cargas de combustible
    cargasCombustible.forEach(c => {
        const billetera = getBilleteraNombreById(c.billeteraId);
        if (billetera && saldos[billetera] !== undefined) {
            saldos[billetera] -= c.total;
        }
    });

    // 3. Aplicar TODAS las transacciones
    transactions.forEach(t => {
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

    // 4. Actualizar las billeteras con los saldos recalculados
    return billeteras.map(b => ({
        ...b,
        saldo: saldos[b.nombre] || 0
    }));
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
