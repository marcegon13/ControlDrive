/**
 * 📊 COMPONENTE: RESUMEN MENSUAL
 * 
 * Muestra los totales del mes seleccionado con comparación al mes anterior
 */

import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RegistroDiario, CargaCombustible, Transaction } from '../types';
import { calculateMonthlyTotals, compareMonths, getPreviousMonth, formatCurrency } from '../utils/monthlyCalculations';

interface MonthlyResumenProps {
    month: string; // "2026-01"
    registros: RegistroDiario[];
    gastos: CargaCombustible[];
    transactions: Transaction[];
}

export const MonthlyResumen: React.FC<MonthlyResumenProps> = ({
    month,
    registros,
    gastos,
    transactions
}) => {

    // Calcular totales del mes actual
    const totales = useMemo(() =>
        calculateMonthlyTotals(registros, gastos, transactions, month),
        [registros, gastos, transactions, month]
    );

    // Calcular totales del mes anterior
    const prevMonth = getPreviousMonth(month);
    const totalesPrevios = useMemo(() =>
        calculateMonthlyTotals(registros, gastos, transactions, prevMonth),
        [registros, gastos, transactions, prevMonth]
    );

    // Comparación
    const comparacion = useMemo(() =>
        compareMonths(totales, totalesPrevios),
        [totales, totalesPrevios]
    );

    const renderVariacion = (valor: number, percent: number) => {
        if (valor === 0) return null;
        const emoji = valor > 0 ? '📈' : '📉';
        const color = valor > 0 ? '#2ecc71' : '#e74c3c';
        const signo = valor > 0 ? '+' : '';

        return (
            <Text style={[styles.variacion, { color }]}>
                {emoji} {signo}{percent.toFixed(1)}%
            </Text>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>📊 Resumen del Mes</Text>

            {/* Ingresos */}
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>💰 Ingresos</Text>
                    {renderVariacion(comparacion.ingresosVariacion, comparacion.ingresosPercent)}
                </View>

                <Text style={styles.mainAmount}>{formatCurrency(totales.totalIngresos)}</Text>

                <View style={styles.breakdown}>
                    <Text style={styles.breakdownItem}>🚗 Didi: {formatCurrency(totales.ingresosDidi)}</Text>
                    <Text style={styles.breakdownItem}>🚙 Uber: {formatCurrency(totales.ingresosUber)}</Text>
                    {totales.ingresosOtros > 0 && (
                        <Text style={styles.breakdownItem}>➕ Otros: {formatCurrency(totales.ingresosOtros)}</Text>
                    )}
                </View>
            </View>

            {/* Gastos */}
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>💸 Gastos</Text>
                    {renderVariacion(comparacion.gastosVariacion, comparacion.gastosPercent)}
                </View>

                <Text style={[styles.mainAmount, { color: '#e74c3c' }]}>
                    {formatCurrency(totales.totalGastos)}
                </Text>

                <View style={styles.breakdown}>
                    <Text style={styles.breakdownItem}>⛽ Combustible: {formatCurrency(totales.gastosCombustible)}</Text>
                    {totales.gastosOtros > 0 && (
                        <Text style={styles.breakdownItem}>➖ Otros: {formatCurrency(totales.gastosOtros)}</Text>
                    )}
                </View>
            </View>

            {/* Ganancia Neta */}
            <View style={[styles.card, styles.netCard]}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>📈 Ganancia Neta</Text>
                    {renderVariacion(comparacion.netaVariacion, comparacion.netaPercent)}
                </View>

                <Text style={[
                    styles.mainAmount,
                    styles.netAmount,
                    { color: totales.gananciaNeta >= 0 ? '#2ecc71' : '#e74c3c' }
                ]}>
                    {formatCurrency(totales.gananciaNeta)}
                </Text>
            </View>

            {/* Desglose por Billetera */}
            <View style={styles.billeterasCard}>
                <Text style={styles.cardTitle}>💳 Por Billetera</Text>

                <View style={styles.billeteraRow}>
                    <Text style={styles.billeteraName}>💵 Efectivo</Text>
                    <Text style={[styles.billeteraNeto, { color: totales.porBilletera.efectivo.neto >= 0 ? '#2ecc71' : '#e74c3c' }]}>
                        {formatCurrency(totales.porBilletera.efectivo.neto)}
                    </Text>
                </View>

                <View style={styles.billeteraRow}>
                    <Text style={styles.billeteraName}>💳 Tarjetas</Text>
                    <Text style={[styles.billeteraNeto, { color: totales.porBilletera.tarjetas.neto >= 0 ? '#2ecc71' : '#e74c3c' }]}>
                        {formatCurrency(totales.porBilletera.tarjetas.neto)}
                    </Text>
                </View>

                <View style={styles.billeteraRow}>
                    <Text style={styles.billeteraName}>📲 Virtual</Text>
                    <Text style={[styles.billeteraNeto, { color: totales.porBilletera.virtual.neto >= 0 ? '#2ecc71' : '#e74c3c' }]}>
                        {formatCurrency(totales.porBilletera.virtual.neto)}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 16,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#34495e',
    },
    variacion: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    mainAmount: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2ecc71',
        marginBottom: 8,
    },
    breakdown: {
        borderTopWidth: 1,
        borderTopColor: '#ecf0f1',
        paddingTop: 8,
        marginTop: 8,
    },
    breakdownItem: {
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 4,
    },
    netCard: {
        backgroundColor: '#ecf0f1',
        borderWidth: 2,
        borderColor: '#2ecc71',
    },
    netAmount: {
        fontSize: 32,
    },
    billeterasCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        marginTop: 4,
    },
    billeteraRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ecf0f1',
    },
    billeteraName: {
        fontSize: 15,
        color: '#34495e',
    },
    billeteraNeto: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
