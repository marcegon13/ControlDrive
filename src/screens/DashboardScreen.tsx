// src/screens/DashboardScreen.tsx
import React, { useMemo, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert, Modal, TextInput, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from 'expo-updates';
import { RegistroDiario, CargaCombustible, Billetera, Transaction, TransactionType } from "../types";
import { calcularEstadisticasPorPeriodo } from "../utils";
import { COLORS } from "../theme/colors";
import { CurrencyText } from "../components/ui/CurrencyText";
import { APP_LOGOS } from "../constants";
import { Image } from "react-native";

interface DashboardProps {
  registrosDiarios: RegistroDiario[];
  cargasCombustible: CargaCombustible[];
  billeteras: Billetera[];
  transactions: Transaction[];
  hideBalances: boolean;
  handleOpenModal: (type: TransactionType, walletId: string | null) => void;
  handleOpenRegistroDiarioModal: () => void;
  handleOpenCargaCombustibleModal: () => void;
  handleExportData: () => void;
}

export const DashboardScreen: React.FC<DashboardProps> = ({
  registrosDiarios,
  cargasCombustible,
  billeteras,
  transactions,
  hideBalances,
  handleOpenModal,
  handleOpenRegistroDiarioModal,
  handleOpenCargaCombustibleModal,
  handleExportData,
}) => {
  const stats = useMemo(
    () =>
      calcularEstadisticasPorPeriodo(
        registrosDiarios,
        cargasCombustible,
        transactions
      ),
    [registrosDiarios, cargasCombustible, transactions]
  );

  const rendimientoHoy =
    stats.hoy.ingresos > 0 ? (stats.hoy.neto / stats.hoy.ingresos) * 100 : 0;
  const rendimientoSemana =
    stats.semana.ingresos > 0
      ? (stats.semana.neto / stats.semana.ingresos) * 100
      : 0;
  const rendimientoMes =
    stats.mes.ingresos > 0 ? (stats.mes.neto / stats.mes.ingresos) * 100 : 0;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.dateHeader}>
        {new Date().toLocaleDateString("es-AR", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </Text>

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
              amount={stats.mes.neto}
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
              prefix="+"
            />
            <CurrencyText
              amount={stats.hoy.neto}
              hideValue={hideBalances}
              style={[
                styles.periodStatNeto,
                { color: stats.hoy.neto >= 0 ? "green" : "red" },
              ]}
              prefix="Neto: "
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
              prefix="+"
            />
            <CurrencyText
              amount={stats.semana.neto}
              hideValue={hideBalances}
              style={[
                styles.periodStatNeto,
                { color: stats.semana.neto >= 0 ? "green" : "red" },
              ]}
              prefix="Neto: "
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
              prefix="+"
            />
            <CurrencyText
              amount={stats.mes.neto}
              hideValue={hideBalances}
              style={[
                styles.periodStatNeto,
                { color: stats.mes.neto >= 0 ? "green" : "red" },
              ]}
              prefix="Neto: "
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
        <Text style={styles.cardTitle}>Acciones Rápidas</Text>
        <View style={styles.actionButtonsRow}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: "#2ecc71" }]}
            onPress={() => handleOpenModal("ingreso", null)}
          >
            <Text style={styles.actionIcon}>➕</Text>
            <Text style={styles.actionText}>Ingreso</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: "#e74c3c" }]}
            onPress={() => handleOpenModal("gasto", null)}
          >
            <Text style={styles.actionIcon}>➖</Text>
            <Text style={styles.actionText}>Gasto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: "#34495e" }]}
            onPress={handleOpenRegistroDiarioModal}
          >
            <Text style={styles.actionIcon}>🚗</Text>
            <Text style={styles.actionText}>Viajes App</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: "#e67e22" }]}
            onPress={handleOpenCargaCombustibleModal}
          >
            <Text style={styles.actionIcon}>⛽</Text>
            <Text style={styles.actionText}>Combustible</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Billeteras</Text>
        <View style={styles.walletsGrid}>
          {billeteras.map((billetera: Billetera) => (
            <TouchableOpacity
              key={billetera.id}
              style={[styles.walletItem, { borderLeftColor: billetera.color }]}
              onPress={() => handleOpenModal("ingreso", billetera.id)}
            >
              {APP_LOGOS[billetera.nombre] ? (
                <Image source={APP_LOGOS[billetera.nombre]} style={styles.walletLogo} resizeMode="contain" />
              ) : (
                <Text style={styles.walletIcon}>{billetera.icono}</Text>
              )}
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
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.gray,
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: COLORS.dark,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statItem: {
    width: "48%",
    alignItems: "center",
    marginBottom: 12,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.gray,
    textAlign: "center",
  },
  periodStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  periodStatItem: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  periodStatLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.gray,
    marginBottom: 4,
  },
  periodStatValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  periodStatNeto: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 2,
  },
  periodStatRendimiento: {
    fontSize: 11,
    fontWeight: "500",
  },
  actionButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  actionIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  actionText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  walletsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  walletItem: {
    width: "48%",
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  walletIcon: {
    fontSize: 24,
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
  walletLogo: {
    width: 25,
    height: 25,
    marginBottom: 4,
  },
  exportButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  exportButtonText: {
    color: COLORS.secondary,
    fontWeight: "bold",
    fontSize: 14,
  },
});
