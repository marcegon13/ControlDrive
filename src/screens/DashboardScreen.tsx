// src/screens/DashboardScreen.tsx
import React, { useMemo } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Vibration } from "react-native";
import { RegistroDiario, CargaCombustible, Billetera, Transaction, TransactionType, Jornada } from "../types";
import { calcularEstadisticasPorPeriodo } from "../utils";
import { COLORS } from "../theme/colors";
import { CurrencyText } from "../components/ui/CurrencyText";
import { AdBanner } from "../components/ads/AdBanner";

interface DashboardProps {
  registrosDiarios: RegistroDiario[];
  cargasCombustible: CargaCombustible[];
  billeteras: Billetera[];
  transactions: Transaction[];
  jornadas: Jornada[];
  hideBalances: boolean;
  isPro: boolean;
  weeklyGoal: number;
  handleOpenModal: (type: TransactionType, walletId: string | null) => void;
  handleOpenRegistroDiarioModal: () => void;
  handleOpenCargaCombustibleModal: () => void;
  handleExportData: () => void;
  onOpenSettings: () => void;
}

export const DashboardScreen: React.FC<DashboardProps> = ({
  registrosDiarios,
  cargasCombustible,
  billeteras,
  transactions,
  jornadas,
  hideBalances,
  isPro,
  weeklyGoal,
  handleOpenModal,
  handleOpenRegistroDiarioModal,
  handleOpenCargaCombustibleModal,
  handleExportData,
  onOpenSettings,
}) => {

  const stats = useMemo(
    () =>
      calcularEstadisticasPorPeriodo(
        registrosDiarios,
        cargasCombustible,
        transactions,
        jornadas
      ),
    [registrosDiarios, cargasCombustible, transactions, jornadas]
  );

  // ✅ USAR SALDOS TOTALES GUARDADOS
  const billeterasMesActual = billeteras;

  const rendimientoHoy =
    stats.hoy.ingresos > 0 ? (stats.hoy.neto / stats.hoy.ingresos) * 100 : 0;
  const rendimientoSemana =
    stats.semana.ingresos > 0
      ? (stats.semana.neto / stats.semana.ingresos) * 100
      : 0;
  const rendimientoMes =
    stats.mes.ingresos > 0 ? (stats.mes.neto / stats.mes.ingresos) * 100 : 0;

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.dateHeader}>
            {new Date().toLocaleDateString("es-AR", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </Text>
          <TouchableOpacity onPress={onOpenSettings} style={styles.settingsButton}>
            <Text style={{ fontSize: 24 }}>⚙️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Resumen General</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <CurrencyText
                amount={stats.mes.ingresos}
                hideValue={hideBalances}
                style={[styles.statValue, { color: "green" }]}
              />
              <Text style={styles.statLabel}>Ingresos Mes</Text>
            </View>
            <View style={styles.statItem}>
              <CurrencyText
                amount={stats.mes.gastos}
                hideValue={hideBalances}
                style={[styles.statValue, { color: "red" }]}
              />
              <Text style={styles.statLabel}>Gastos Mes</Text>
            </View>
            <View style={styles.statItem}>
              <CurrencyText
                amount={Math.abs(stats.mes.neto)}
                hideValue={hideBalances}
                style={[
                  styles.statValue,
                  { color: stats.mes.neto >= 0 ? "green" : "red" },
                ]}
              />
              <Text style={styles.statLabel}>Neto Mes</Text>
            </View>
            <View style={styles.statItem}>
              <Text
                style={[
                  styles.statValue,
                  { color: rendimientoMes >= 0 ? "green" : "red" },
                ]}
              >
                {rendimientoMes.toFixed(1)}%
              </Text>
              <Text style={styles.statLabel}>Rendimiento</Text>
            </View>
            <View style={styles.statItem}>
              <CurrencyText
                amount={stats.mes.km > 0 ? stats.mes.neto / stats.mes.km : 0}
                hideValue={hideBalances}
                style={[
                  styles.statValue,
                  { color: stats.mes.neto >= 0 ? "green" : "red" },
                ]}
              />
              <Text style={styles.statLabel}>Rentabilidad/KM</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Acumulado por Período</Text>
          <View style={styles.periodStats}>
            <View style={styles.periodStatItem}>
              <Text style={styles.periodStatLabel}>Hoy</Text>
              <CurrencyText
                amount={stats.hoy.ingresos}
                hideValue={hideBalances}
                style={[styles.periodStatValue, { color: "green" }]}
                numberOfLines={1}
                adjustsFontSizeToFit
              />
              <CurrencyText
                amount={Math.abs(stats.hoy.neto)}
                hideValue={hideBalances}
                style={[
                  styles.periodStatNeto,
                  { color: stats.hoy.neto >= 0 ? "green" : "red" },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit
              />
              <Text
                style={[
                  styles.periodStatRendimiento,
                  { color: rendimientoHoy >= 0 ? "green" : "red" },
                ]}
              >
                {rendimientoHoy.toFixed(1)}%
              </Text>
            </View>
            <View style={styles.periodStatItem}>
              <Text style={styles.periodStatLabel}>Semana</Text>
              <CurrencyText
                amount={stats.semana.ingresos}
                hideValue={hideBalances}
                style={[styles.periodStatValue, { color: "green" }]}
                numberOfLines={1}
                adjustsFontSizeToFit
              />
              <CurrencyText
                amount={Math.abs(stats.semana.neto)}
                hideValue={hideBalances}
                style={[
                  styles.periodStatNeto,
                  { color: stats.semana.neto >= 0 ? "green" : "red" },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit
              />
              <Text
                style={[
                  styles.periodStatRendimiento,
                  { color: rendimientoSemana >= 0 ? "green" : "red" },
                ]}
              >
                {rendimientoSemana.toFixed(1)}%
              </Text>
            </View>
            <View style={styles.periodStatItem}>
              <Text style={styles.periodStatLabel}>Mes</Text>
              <CurrencyText
                amount={stats.mes.ingresos}
                hideValue={hideBalances}
                style={[styles.periodStatValue, { color: "green" }]}
                numberOfLines={1}
                adjustsFontSizeToFit
              />
              <CurrencyText
                amount={Math.abs(stats.mes.neto)}
                hideValue={hideBalances}
                style={[
                  styles.periodStatNeto,
                  { color: stats.mes.neto >= 0 ? "green" : "red" },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit
              />
              <Text
                style={[
                  styles.periodStatRendimiento,
                  { color: rendimientoMes >= 0 ? "green" : "red" },
                ]}
              >
                {rendimientoMes.toFixed(1)}%
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.cardTitle}>🎯 Meta Semanal</Text>
            <TouchableOpacity onPress={onOpenSettings} style={{ padding: 4 }}>
              <Text style={{ fontSize: 16 }}>✏️</Text>
            </TouchableOpacity>
          </View>

          {weeklyGoal > 0 ? (
            <View style={{ marginBottom: 10 }}>
              <View style={styles.rowBetween}>
                <Text style={{ color: COLORS.gray }}>Progreso Ingresos</Text>
                <Text style={{ fontWeight: 'bold', color: COLORS.primary }}>
                  {((stats.semana.ingresos / weeklyGoal) * 100).toFixed(1)}%
                </Text>
              </View>
              <View style={{ height: 10, backgroundColor: '#eee', borderRadius: 5, marginTop: 5, overflow: 'hidden' }}>
                <View
                  style={{
                    height: '100%',
                    backgroundColor: COLORS.success,
                    width: `${Math.min((stats.semana.ingresos / weeklyGoal) * 100, 100)}%`
                  }}
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <CurrencyText amount={stats.semana.ingresos} hideValue={hideBalances} style={{ fontSize: 12, color: COLORS.gray }} />
                <CurrencyText amount={weeklyGoal} hideValue={hideBalances} style={{ fontSize: 12, color: COLORS.gray }} />
              </View>
            </View>
          ) : (
            <TouchableOpacity onPress={onOpenSettings} style={{ padding: 15, alignItems: 'center', backgroundColor: '#f9f9f9', borderRadius: 8 }}>
              <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>Definir objetivo de ingresos ➔</Text>
              <Text style={{ fontSize: 10, color: COLORS.gray, marginTop: 4 }}>Toca aquí para establecer tu meta</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Acciones Rápidas</Text>
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: "#2ecc71" }]}
              onPress={() => { Vibration.vibrate(10); handleOpenModal("ingreso", null); }}
            >
              <Text style={styles.actionIcon}>➕</Text>
              <Text style={styles.actionText}>Ingreso</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: "#e74c3c" }]}
              onPress={() => { Vibration.vibrate(10); handleOpenModal("gasto", null); }}
            >
              <Text style={styles.actionIcon}>➖</Text>
              <Text style={styles.actionText}>Gasto</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: "#34495e" }]}
              onPress={() => { Vibration.vibrate(10); handleOpenRegistroDiarioModal(); }}
            >
              <Text style={styles.actionIcon}>🚗</Text>
              <Text style={styles.actionText}>Viajes App</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: "#e67e22" }]}
              onPress={() => { Vibration.vibrate(10); handleOpenCargaCombustibleModal(); }}
            >
              <Text style={styles.actionIcon}>⛽</Text>
              <Text style={styles.actionText}>Combustible</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Billeteras</Text>
          <View style={styles.walletsGrid}>
            {billeterasMesActual.map((billetera: Billetera) => (
              <TouchableOpacity
                key={billetera.id}
                style={[styles.walletItem, { borderLeftColor: billetera.color }]}
                onPress={() => handleOpenModal("ingreso", billetera.id)}
              >
                <Text style={styles.walletIcon}>{billetera.icono}</Text>
                <Text style={styles.walletName}>{billetera.nombre}</Text>
                <CurrencyText
                  amount={billetera.saldo}
                  hideValue={hideBalances}
                  style={styles.walletBalance}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Reportes</Text>
          <TouchableOpacity
            style={styles.exportButton}
            onPress={handleExportData}
          >
            <Text style={styles.exportButtonText}>📥 Exportar Reporte Mensual (Excel/CSV)</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Banner de Publicidad (Zócalo Fijo) - Solo si NO es Pro */}
      {!isPro && (
        <View style={{ backgroundColor: '#f0f0f0' }}>
          <AdBanner isPro={isPro} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    paddingBottom: 80, // Espacio extra
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.dark,
    marginBottom: 5,
    textTransform: "capitalize",
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10
  },
  settingsButton: {
    padding: 8,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2, // Sombra en Android
    shadowColor: "#000", // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.dark,
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statItem: {
    width: "30%", // 3 columnas aprox
    marginBottom: 12,
    alignItems: "center",
  },
  statValue: {
    fontSize: 16, // Reducido un poco para que entre
    fontWeight: "700",
    color: COLORS.dark,
    marginBottom: 4,
    textAlign: "center",
  },
  statLabel: {
    fontSize: 11,
    color: COLORS.gray,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.dark,
    marginBottom: 16,
    marginTop: 8,
  },
  periodStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  periodStatItem: {
    width: "32%",
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
  },
  periodStatLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.gray,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  periodStatValue: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.dark,
    marginBottom: 2,
  },
  periodStatNeto: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },
  periodStatRendimiento: {
    fontSize: 11,
    fontWeight: "600",
  },
  actionButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap", // Permitir wrap si es necesario
  },
  actionButton: {
    width: "23%", // 4 botones en fila
    aspectRatio: 1, // Cuadrados
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 4,
    color: "white",
  },
  actionText: {
    color: "white",
    fontSize: 10, // Texto pequeño
    fontWeight: "600",
    textAlign: "center",
  },
  walletsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  walletItem: {
    width: "48%", // 2 columnas
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 4, // Borde de color a la izquierda
    // borderLeftColor se setea dinámicamente
  },
  walletIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  walletName: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.dark,
    marginBottom: 4,
  },
  walletBalance: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  exportButton: {
    backgroundColor: "#fff3cd", // Amarillo clarito
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffecb5"
  },
  exportButtonText: {
    color: "#856404",
    fontWeight: "600",
    fontSize: 14,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
});
