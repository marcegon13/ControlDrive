import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal, ScrollView } from "react-native";
import { RegistroDiario, CargaCombustible, Transaction, Jornada } from "../types";
import { formatearMoneda, formatearFechaHora } from "../utils";
import { globalStyles } from "../styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from "../theme/colors";
import { MonthlyResumen } from "../components/MonthlyResumen";

interface HistorialScreenProps {
  registrosDiarios: RegistroDiario[];
  cargasCombustible: CargaCombustible[];
  transactions: Transaction[];
  jornadas: Jornada[];
  handleDeleteRegistroDiario: (id: string) => void;
  handleDeleteCargaCombustible: (id: string) => void;
  handleDeleteTransaction: (id: string) => void;
  handleDeleteJornada: (id: string) => void;
}

const HistorialScreen: React.FC<HistorialScreenProps> = ({
  registrosDiarios,
  cargasCombustible,
  transactions,
  jornadas,
  handleDeleteRegistroDiario,
  handleDeleteCargaCombustible,
  handleDeleteTransaction,
  handleDeleteJornada,
}) => {
  const [selectedJornada, setSelectedJornada] = useState<Jornada | null>(null);

  // ✅ NUEVO: Estado para mes seleccionado
  const [selectedMonth, setSelectedMonth] = useState<string>(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });

  // ✅ NUEVO: Obtener lista de meses disponibles
  const availableMonths = useMemo(() => {
    const months = new Set<string>();

    [...registrosDiarios, ...cargasCombustible, ...transactions, ...jornadas].forEach(item => {
      // Asegurar que fecha sea un Date (puede venir como string del JSON)
      const date = item.fecha instanceof Date ? item.fecha : new Date(item.fecha);
      if (!isNaN(date.getTime())) { // Validar que la fecha es válida
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        months.add(monthKey);
      }
    });

    return Array.from(months).sort().reverse(); // Más reciente primero
  }, [registrosDiarios, cargasCombustible, transactions, jornadas]);

  const allItems = useMemo(() => {
    const registros = registrosDiarios.map((r) => ({ ...r, type: "registro" as const, fecha: new Date(r.fecha) }));
    const cargas = cargasCombustible.map((c) => ({ ...c, type: "carga" as const, fecha: new Date(c.fecha) }));
    const trans = transactions.map((t) => ({ ...t, type: "transaction" as const, fecha: new Date(t.fecha) }));
    const jornadasItems = jornadas.map((j) => ({ ...j, type: "jornada" as const, fecha: new Date(j.fecha) }));

    const allItems = [...registros, ...cargas, ...trans, ...jornadasItems];

    // ✅ NUEVO: Filtrar por mes seleccionado
    const filtered = allItems.filter(item => {
      const itemMonth = `${item.fecha.getFullYear()}-${String(item.fecha.getMonth() + 1).padStart(2, '0')}`;
      return itemMonth === selectedMonth;
    });

    return filtered.sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
  }, [registrosDiarios, cargasCombustible, transactions, jornadas, selectedMonth]);

  // Formatear mes de "2026-01" a "Ene 2026"
  const getMonthName = (monthKey: string) => {
    if (!monthKey) return "Mes desconocido";

    const parts = monthKey.split('-');
    if (parts.length !== 2) return "Mes desconocido";

    const year = parts[0];
    const monthNum = parseInt(parts[1], 10);

    if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) return "Mes desconocido";

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const monthName = meses[monthNum - 1];

    return `${monthName} ${year}`;
  };

  const renderItem = ({ item }: { item: any }) => {
    // --- RENDER JORNADA ---
    if (item.type === "jornada") {
      const jornadaItem = item as any; // Casting a ANY para bypass de errores fantasmas de TS
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setSelectedJornada(item)}
          style={[styles.listItem, { borderLeftColor: "#9b59b6", borderLeftWidth: 6 }]}
        >
          <View style={styles.rowBetween}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, marginRight: 5 }}>🏁</Text>
              <Text style={styles.listTitle}>Resumen de Jornada</Text>
            </View>
            <TouchableOpacity onPress={() => handleDeleteJornada(jornadaItem.id)}>
              <Text style={styles.deleteButton}>🗑️</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.listSubtitle}>
              {jornadaItem.totalKm} km en {jornadaItem.summary?.duracionHoras?.toFixed(1) || 0} hs
            </Text>
            <Text style={[styles.listAmount, { color: (jornadaItem.summary?.gananciaNeta || 0) >= 0 ? COLORS.success : COLORS.danger }]}>
              {formatearMoneda(jornadaItem.summary?.gananciaNeta || 0)}
            </Text>
          </View>
          <Text style={styles.listDate}>{formatearFechaHora(jornadaItem.fecha)}</Text>
        </TouchableOpacity>
      );
    }

    // --- RENDER OTROS (Lógica previa) ---
    const handleDelete = () => {
      if (item.type === "registro") handleDeleteRegistroDiario(item.id);
      else if (item.type === "carga") handleDeleteCargaCombustible(item.id);
      else if (item.type === "transaction") handleDeleteTransaction(item.id);
    };

    if (item.type === "registro") {
      return (
        <View style={[styles.listItem, { borderLeftColor: "#2ecc71" }]}>
          <View style={styles.rowBetween}>
            <Text style={styles.listTitle}>🚗 {item.app}</Text>
            <View style={styles.rowButtons}>
              <Text style={[styles.listAmount, { color: "#2ecc71" }]}>+{formatearMoneda(item.total)}</Text>
              <TouchableOpacity onPress={handleDelete}><Text style={styles.deleteButton}>🗑️</Text></TouchableOpacity>
            </View>
          </View>
          <Text style={styles.listDate}>{formatearFechaHora(item.fecha)}</Text>
        </View>
      );
    }

    if (item.type === "carga") {
      return (
        <View style={[styles.listItem, { borderLeftColor: "#e74c3c" }]}>
          <View style={styles.rowBetween}>
            <Text style={styles.listTitle}>⛽ {item.estacion}</Text>
            <View style={styles.rowButtons}>
              <Text style={[styles.listAmount, { color: "#e74c3c" }]}>-{formatearMoneda(item.total)}</Text>
              <TouchableOpacity onPress={handleDelete}><Text style={styles.deleteButton}>🗑️</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailsRow}><Text style={styles.detailText}>{item.litros}L</Text><Text style={styles.detailText}>{formatearMoneda(item.precioPorLitro)}/L</Text></View>
          <Text style={styles.listDate}>{formatearFechaHora(item.fecha)}</Text>
        </View>
      );
    }

    if (item.type === "transaction") {
      const isIngreso = item.tipo === "ingreso";
      const isTransferencia = item.tipo === "transferencia";
      return (
        <View style={[styles.listItem, { borderLeftColor: isIngreso ? "#2ecc71" : isTransferencia ? "#3498db" : "#e74c3c" }]}>
          <View style={styles.rowBetween}>
            <Text style={styles.listTitle}>{isIngreso ? "➕ Ingreso" : isTransferencia ? "🔄 Transferencia" : "➖ Gasto"}</Text>
            <View style={styles.rowButtons}>
              <Text style={[styles.listAmount, { color: isIngreso ? "#2ecc71" : isTransferencia ? "#3498db" : "#e74c3c" }]}>
                {isIngreso ? "+" : isTransferencia ? "↔" : "-"}{formatearMoneda(item.monto)}
              </Text>
              <TouchableOpacity onPress={handleDelete}><Text style={styles.deleteButton}>🗑️</Text></TouchableOpacity>
            </View>
          </View>
          {item.descripcion ? <Text style={styles.listSubtitle}>{item.descripcion}</Text> : null}
          <Text style={styles.listDate}>{formatearFechaHora(item.fecha)}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.screenTitle}>📊 Historial por Mes</Text>

      <FlatList
        data={allItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.historialList}
        ListHeaderComponent={
          <>
            {/* Pestañas de meses */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.monthTabsContainer}
              contentContainerStyle={{ paddingHorizontal: 10 }}
            >
              {availableMonths.map(month => (
                <TouchableOpacity
                  key={month}
                  onPress={() => setSelectedMonth(month)}
                  style={[
                    styles.monthTab,
                    selectedMonth === month && styles.monthTabActive
                  ]}
                >
                  <Text style={[
                    styles.monthTabText,
                    selectedMonth === month && styles.monthTabTextActive
                  ]}>
                    {getMonthName(month)}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Resumen mensual */}
            <MonthlyResumen
              month={selectedMonth}
              registros={registrosDiarios}
              gastos={cargasCombustible}
              transactions={transactions}
            />
          </>
        }
        ListEmptyComponent={() => (
          <View style={{ padding: 40, alignItems: 'center' }}>
            <Text style={{ fontSize: 48 }}>📅</Text>
            <Text style={{ fontSize: 16, color: COLORS.gray, marginTop: 10, textAlign: 'center' }}>
              No hay registros para {getMonthName(selectedMonth)}
            </Text>
          </View>
        )}
      />

      {/* MODAL DETALLE DE JORNADA PASADA */}
      <Modal visible={!!selectedJornada} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.summaryModal}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2c3e50' }}>🏁 Detalle Jornada</Text>
              <TouchableOpacity onPress={() => setSelectedJornada(null)}>
                <MaterialCommunityIcons name="close-circle" size={30} color={COLORS.gray} />
              </TouchableOpacity>
            </View>

            {selectedJornada && (() => {
              const sj = selectedJornada as any;
              return (
                <View style={{ width: '100%' }}>
                  <Text style={{ textAlign: 'center', color: COLORS.gray, marginBottom: 15 }}>
                    {formatearFechaHora(new Date(sj.fecha))}
                  </Text>

                  <View style={styles.detailBox}>
                    <View style={styles.summaryRow}>
                      <Text style={styles.label}>KM Inicial</Text>
                      <Text style={styles.value}>{sj.kmInicio}</Text>
                    </View>
                    <View style={styles.summaryRow}>
                      <Text style={styles.label}>KM Final</Text>
                      <Text style={styles.value}>{sj.kmFin}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.summaryRow}>
                      <Text style={styles.label}>Recorrido</Text>
                      <Text style={styles.value}>{sj.totalKm} km</Text>
                    </View>
                    <View style={styles.summaryRow}>
                      <Text style={styles.label}>Duración</Text>
                      <Text style={styles.value}>{sj.summary?.duracionHoras?.toFixed(1) || 0} hs</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.summaryRow}>
                      <Text style={styles.label}>Ingresos</Text>
                      <Text style={[styles.value, { color: COLORS.success }]}>{formatearMoneda(sj.summary?.ingresos || 0)}</Text>
                    </View>
                    <View style={styles.summaryRow}>
                      <Text style={styles.label}>Gastos</Text>
                      <Text style={[styles.value, { color: COLORS.danger }]}>{formatearMoneda(sj.summary?.gastos || 0)}</Text>
                    </View>
                    <View style={[styles.summaryRow, { marginTop: 10 }]}>
                      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Ganancia Neta</Text>
                      <Text style={{ fontWeight: 'bold', fontSize: 18, color: (sj.summary?.gananciaNeta || 0) >= 0 ? COLORS.success : COLORS.danger }}>
                        {formatearMoneda(sj.summary?.gananciaNeta || 0)}
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.deleteBigBtn}
                    onPress={() => {
                      handleDeleteJornada(sj.id);
                      setSelectedJornada(null);
                    }}
                  >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>🗑️ Borrar del Historial</Text>
                  </TouchableOpacity>
                </View>
              );
            })()}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // ✅ NUEVO: Estilos de pestañas de mes
  monthTabsContainer: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 15,
    marginBottom: 10,
  },
  monthTab: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  monthTabActive: {
    backgroundColor: '#2ecc71',
    borderColor: '#2ecc71',
  },
  monthTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    includeFontPadding: false,
  },
  monthTabTextActive: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    includeFontPadding: false,
  },

  listItem: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 4,
    shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2,
  },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 4 },
  listTitle: { fontSize: 16, fontWeight: "600", color: "#2c3e50" },
  listSubtitle: { fontSize: 14, color: "#7f8c8d" },
  listAmount: { fontSize: 16, fontWeight: "bold" },
  deleteButton: { fontSize: 18, color: "#e74c3c", marginLeft: 10 },
  detailsRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 4 },
  detailText: { fontSize: 12, color: "#7f8c8d" },
  listDate: { fontSize: 11, color: "#95a5a6", marginTop: 4 },
  rowButtons: { flexDirection: "row", alignItems: "center" },
  historialList: { paddingBottom: 16 },

  // Styles Modal Detalle
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 20 },
  summaryModal: { backgroundColor: 'white', borderRadius: 20, padding: 25, alignItems: 'center' },
  detailBox: { backgroundColor: '#f8f9fa', borderRadius: 12, padding: 15, width: '100%', marginBottom: 20 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  label: { color: '#555' },
  value: { fontWeight: 'bold', color: '#333' },
  divider: { height: 1, backgroundColor: '#ddd', marginVertical: 8 },
  deleteBigBtn: { backgroundColor: '#e74c3c', padding: 12, borderRadius: 8, alignItems: 'center', width: '100%' }
});

export default HistorialScreen;
