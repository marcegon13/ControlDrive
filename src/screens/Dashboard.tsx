import React, { useMemo } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { RegistroDiario, CargaCombustible, Billetera, Transaction, TransactionType } from "../types";
import { calcularEstadisticasPorPeriodo, formatearMoneda } from "../utils";

interface DashboardProps {
    registrosDiarios: RegistroDiario[];
    cargasCombustible: CargaCombustible[];
    billeteras: Billetera[];
    transactions: Transaction[];
    handleOpenModal: (type: TransactionType, walletId: string | null) => void;
    handleOpenRegistroDiarioModal: () => void;
    handleOpenCargaCombustibleModal: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
    registrosDiarios,
    cargasCombustible,
    billeteras,
    transactions,
    handleOpenModal,
    handleOpenRegistroDiarioModal,
    handleOpenCargaCombustibleModal,
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
                        <Text style={[styles.statValue, { color: "green" }]}>
                            ${stats.mes.ingresos.toFixed(0)}
                        </Text>
                        <Text style={styles.statLabel}>Ingresos Mes</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={[styles.statValue, { color: "red" }]}>
                            ${stats.mes.gastos.toFixed(0)}
                        </Text>
                        <Text style={styles.statLabel}>Gastos Mes</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text
                            style={[
                                styles.statValue,
                                { color: stats.mes.neto >= 0 ? "green" : "red" },
                            ]}
                        >
                            ${stats.mes.neto.toFixed(0)}
                        </Text>
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
                        <Text style={[styles.periodStatValue, { color: "green" }]}>
                            +${stats.hoy.ingresos.toFixed(0)}
                        </Text>
                        <Text
                            style={[
                                styles.periodStatNeto,
                                { color: stats.hoy.neto >= 0 ? "green" : "red" },
                            ]}
                        >
                            Neto: ${stats.hoy.neto.toFixed(0)}
                        </Text>
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
                        <Text style={[styles.periodStatValue, { color: "green" }]}>
                            +${stats.semana.ingresos.toFixed(0)}
                        </Text>
                        <Text
                            style={[
                                styles.periodStatNeto,
                                { color: stats.semana.neto >= 0 ? "green" : "red" },
                            ]}
                        >
                            Neto: ${stats.semana.neto.toFixed(0)}
                        </Text>
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
                        <Text style={[styles.periodStatValue, { color: "green" }]}>
                            +${stats.mes.ingresos.toFixed(0)}
                        </Text>
                        <Text
                            style={[
                                styles.periodStatNeto,
                                { color: stats.mes.neto >= 0 ? "green" : "red" },
                            ]}
                        >
                            Neto: ${stats.mes.neto.toFixed(0)}
                        </Text>
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
                            <Text style={styles.walletIcon}>{billetera.icono}</Text>
                            <Text style={styles.walletName}>{billetera.nombre}</Text>
                            <Text style={styles.walletBalance}>
                                {formatearMoneda(billetera.saldo)}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
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
        color: "#7f8c8d",
        marginBottom: 16,
        textAlign: "center",
    },
    card: {
        backgroundColor: "white",
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
        color: "#2c3e50",
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
        color: "#7f8c8d",
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
        color: "#7f8c8d",
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
        color: "white",
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
        backgroundColor: "white",
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
        color: "#2c3e50",
        marginBottom: 4,
    },
    walletBalance: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2c3e50",
    },
});

export default Dashboard;
