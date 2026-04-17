import { Billetera, RegistroDiario, CargaCombustible, Transaction, Mantenimiento } from "../types";

export const processSaveRegistroDiario = (
  data: Omit<RegistroDiario, "id">,
  registrosDiarios: RegistroDiario[],
  billeteras: Billetera[]
) => {
  const nuevoRegistro: RegistroDiario = { ...data, id: Date.now().toString() };
  const newRegistrosDiarios = [...registrosDiarios, nuevoRegistro];
  
  const newBilleteras = billeteras.map((b) => {
    if (b.nombre === "Efectivo") return { ...b, saldo: b.saldo + data.efectivo };
    if (b.nombre === "Tarjetas/Plataforma") return { ...b, saldo: b.saldo + data.tarjetas };
    if (b.nombre === "Billeteras Virtuales") return { ...b, saldo: b.saldo + data.billeterasVirtuales };
    return b;
  });

  return { newRegistrosDiarios, newBilleteras };
};

export const processSaveCargaCombustible = (
  data: Omit<CargaCombustible, "id">,
  cargasCombustible: CargaCombustible[],
  billeteras: Billetera[]
) => {
  const nuevaCarga: CargaCombustible = { ...data, id: Date.now().toString() };
  const newCargasCombustible = [...cargasCombustible, nuevaCarga];

  const newBilleteras = billeteras.map((b) =>
    b.id === data.billeteraId ? { ...b, saldo: b.saldo - data.total } : b
  );

  return { newCargasCombustible, newBilleteras };
};

export const processDeleteCargaCombustible = (
  id: string,
  cargasCombustible: CargaCombustible[],
  billeteras: Billetera[]
) => {
  const carga = cargasCombustible.find((c) => c.id === id);
  if (!carga) return { newCargasCombustible: cargasCombustible, newBilleteras: billeteras, deleted: false };

  const newBilleteras = billeteras.map((b) =>
    b.id === carga.billeteraId ? { ...b, saldo: b.saldo + carga.total } : b
  );
  const newCargasCombustible = cargasCombustible.filter((c) => c.id !== id);

  return { newCargasCombustible, newBilleteras, deleted: true };
};

export const processDeleteRegistroDiario = (
  id: string,
  registrosDiarios: RegistroDiario[],
  billeteras: Billetera[]
) => {
  const registro = registrosDiarios.find((r) => r.id === id);
  if (!registro) return { newRegistrosDiarios: registrosDiarios, newBilleteras: billeteras, deleted: false };

  const newBilleteras = billeteras.map((b) => {
    if (b.nombre === "Efectivo") return { ...b, saldo: b.saldo - registro.efectivo };
    if (b.nombre === "Tarjetas/Plataforma") return { ...b, saldo: b.saldo - registro.tarjetas };
    if (b.nombre === "Billeteras Virtuales") return { ...b, saldo: b.saldo - registro.billeterasVirtuales };
    return b;
  });
  const newRegistrosDiarios = registrosDiarios.filter((r) => r.id !== id);

  return { newRegistrosDiarios, newBilleteras, deleted: true };
};

export const processDeleteTransaction = (
  id: string,
  transactions: Transaction[],
  billeteras: Billetera[]
) => {
  const t = transactions.find((tx) => tx.id === id);
  if (!t) return { newTransactions: transactions, newBilleteras: billeteras, deleted: false };

  const newBilleteras = billeteras.map((b) => {
    if (t.tipo === "ingreso" && b.id === t.billeteraId) return { ...b, saldo: b.saldo - t.monto };
    if (t.tipo === "gasto" && b.id === t.billeteraId) return { ...b, saldo: b.saldo + t.monto };
    if (t.tipo === "transferencia") {
      if (b.id === t.billeteraId) return { ...b, saldo: b.saldo + t.monto };
      if (b.id === t.destinoId) return { ...b, saldo: b.saldo - t.monto };
    }
    return b;
  });
  const newTransactions = transactions.filter((tx) => tx.id !== id);

  return { newTransactions, newBilleteras, deleted: true };
};

export const processSaveTransaction = (
  data: Omit<Transaction, "id">,
  transactions: Transaction[],
  billeteras: Billetera[]
) => {
  const nueva: Transaction = { ...data, id: Date.now().toString() };
  const newTransactions = [...transactions, nueva];

  const newBilleteras = billeteras.map((b) => {
    if (data.tipo === "ingreso" && b.id === data.billeteraId) return { ...b, saldo: b.saldo + data.monto };
    if (data.tipo === "gasto" && b.id === data.billeteraId) return { ...b, saldo: b.saldo - data.monto };
    if (data.tipo === "transferencia") {
      if (b.id === data.billeteraId) return { ...b, saldo: b.saldo - data.monto };
      if (b.id === data.destinoId) return { ...b, saldo: b.saldo + data.monto };
    }
    return b;
  });

  return { newTransactions, newBilleteras };
};

export const processAddMantenimiento = (
  nuevo: Mantenimiento,
  mantenimientos: Mantenimiento[],
  billeteras: Billetera[]
) => {
  const newBilleteras = billeteras.map((b) => {
    if (b.id === nuevo.billeteraId) {
      return { ...b, saldo: b.saldo - nuevo.monto };
    }
    return b;
  });
  const newMantenimientos = [nuevo, ...mantenimientos];

  return { newMantenimientos, newBilleteras };
};

export const processDeleteMantenimiento = (
  id: string,
  mantenimientos: Mantenimiento[],
  billeteras: Billetera[]
) => {
  const item = mantenimientos.find((m) => m.id === id);
  if (!item) return { newMantenimientos: mantenimientos, newBilleteras: billeteras, deleted: false };

  const newBilleteras = billeteras.map((b) => {
    if (b.id === item.billeteraId) {
      return { ...b, saldo: b.saldo + item.monto };
    }
    return b;
  });
  const newMantenimientos = mantenimientos.filter((m) => m.id !== id);

  return { newMantenimientos, newBilleteras, deleted: true };
};

export const processAdjustBalance = (
  walletId: string,
  newBalance: number,
  transactions: Transaction[],
  billeteras: Billetera[]
) => {
  const wallet = billeteras.find((b) => b.id === walletId);
  if (!wallet) return null;

  const diff = newBalance - wallet.saldo;
  if (Math.abs(diff) < 1) return null;

  const newTransaction: Transaction = {
    id: Date.now().toString(),
    fecha: new Date(),
    tipo: 'ajuste',
    monto: diff,
    descripcion: "⚖️ Ajuste Manual de Saldo",
    billeteraId: walletId,
  };

  const newTransactions = [newTransaction, ...transactions];
  const newBilleteras = billeteras.map((b) =>
    b.id === walletId ? { ...b, saldo: newBalance } : b
  );

  return { newTransactions, newBilleteras };
};
