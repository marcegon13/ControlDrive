/**
 * 💳 COMPONENTE: MODAL DETALLE DE BILLETERA
 * 
 * Muestra el desglose de ingresos y gastos de una billetera seleccionada
 * filtrado por el mes actual.
 */

import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Billetera, RegistroDiario, CargaCombustible, Transaction } from '../../types';
import { isSameMonth, formatCurrency } from '../../utils/monthlyCalculations';
import { formatearFechaHora } from '../../utils';
import { COLORS } from '../../theme/colors';

interface BilleteraDetalleModalProps {
    visible: boolean;
    onClose: () => void;
    billetera: Billetera | null;
    currentMonth: string; // "2026-01"
    registros: RegistroDiario[];
    gastos: CargaCombustible[];
    transactions: Transaction[];
}

export const BilleteraDetalleModal: React.FC<BilleteraDetalleModalProps> = ({
    visible,
    onClose,
    billetera,
    currentMonth,
    registros,
    gastos,
    transactions
}) => {
    if (!billetera) return null;

    // Filtrar movimientos del mes para esta billetera
    const movimientos = React.useMemo(() => {
        const list = [];

        // 1. Ingresos por Registro Diario (Apps)
        registros.forEach(r => {
            if (!isSameMonth(r.fecha, currentMonth)) return;

            let monto = 0;
            if (billetera.id === '1') monto = r.efectivo;
            else if (billetera.id === '2') monto = r.tarjetas;
            else if (billetera.id === '3') monto = r.billeterasVirtuales;

            if (monto > 0) {
                list.push({
                    id: r.id,
                    tipo: 'ingreso',
                    concepto: `Ingreso ${r.app}`,
                    monto,
                    fecha: r.fecha,
                    icono: '🚗'
                });
            }
        });

        // 2. Gastos de Combustible
        gastos.forEach(g => {
            if (!isSameMonth(g.fecha, currentMonth)) return;
            if (g.billeteraId === billetera.id) {
                list.push({
                    id: g.id,
                    tipo: 'gasto',
                    concepto: `Carga ${g.estacion}`,
                    monto: g.total,
                    fecha: g.fecha,
                    icono: '⛽'
                });
            }
        });

        // 3. Transacciones Manuales (Ingresos y Gastos)
        transactions.forEach(t => {
            if (!isSameMonth(t.fecha, currentMonth)) return;
            if (t.billeteraId === billetera.id) {
                list.push({
                    id: t.id,
                    tipo: t.tipo,
                    concepto: t.descripcion || 'Transacción',
                    monto: t.monto,
                    fecha: t.fecha,
                    icono: t.tipo === 'ingreso' ? '💰' : '💸'
                });
            }
        });

        // Ordenar por fecha descendente
        return list.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

    }, [billetera, currentMonth, registros, gastos, transactions]);

    // Calcular totales del modal
    const totalIngresos = movimientos.filter(m => m.tipo === 'ingreso').reduce((sum, m) => sum + m.monto, 0);
    const totalGastos = movimientos.filter(m => m.tipo === 'gasto').reduce((sum, m) => sum + m.monto, 0);
    const neto = totalIngresos - totalGastos;

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <SafeAreaView style={styles.modalOverlay}>
                <View style={styles.modalContent}>

                    {/* Header */}
                    <View style={[styles.header, { backgroundColor: billetera.color || COLORS.primary }]}>
                        <Text style={styles.headerTitle}>{billetera.icono} {billetera.nombre}</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>✖</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Resumen del Mes */}
                    <View style={styles.summaryContainer}>
                        <Text style={styles.monthLabel}>Movimientos de {currentMonth}</Text>
                        <View style={styles.statsRow}>
                            <View style={styles.statItem}>
                                <Text style={styles.statLabel}>Ingresos</Text>
                                <Text style={[styles.statValue, { color: COLORS.success }]}>+{formatCurrency(totalIngresos)}</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Text style={styles.statLabel}>Gastos</Text>
                                <Text style={[styles.statValue, { color: COLORS.danger }]}>-{formatCurrency(totalGastos)}</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Text style={styles.statLabel}>Neto</Text>
                                <Text style={[styles.statValue, { color: neto >= 0 ? COLORS.success : COLORS.danger }]}>
                                    {neto >= 0 ? '+' : ''}{formatCurrency(neto)}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Lista de Movimientos */}
                    <FlatList
                        data={movimientos}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.listContent}
                        ListEmptyComponent={
                            <Text style={styles.emptyText}>No hay movimientos en este mes.</Text>
                        }
                        renderItem={({ item }) => (
                            <View style={[styles.listItem, { borderLeftColor: item.tipo === 'ingreso' ? COLORS.success : COLORS.danger }]}>
                                <View style={styles.rowBetween}>
                                    <Text style={styles.itemTitle}>{item.icono} {item.concepto}</Text>
                                    <Text style={[styles.itemAmount, { color: item.tipo === 'ingreso' ? COLORS.success : COLORS.danger }]}>
                                        {item.tipo === 'ingreso' ? '+' : '-'}{formatCurrency(item.monto)}
                                    </Text>
                                </View>
                                <Text style={styles.itemDate}>{formatearFechaHora(item.fecha)}</Text>
                            </View>
                        )}
                    />

                </View>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    closeButton: {
        padding: 5,
    },
    closeButtonText: {
        fontSize: 24,
        color: 'white',
    },
    summaryContainer: {
        backgroundColor: 'white',
        padding: 15,
        margin: 15,
        borderRadius: 12,
        elevation: 2,
    },
    monthLabel: {
        textAlign: 'center',
        color: COLORS.gray,
        marginBottom: 10,
        fontWeight: '600',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 12,
        color: '#7f8c8d',
    },
    statValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    listContent: {
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 40,
        color: COLORS.gray,
        fontSize: 16,
    },
    listItem: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 8,
        borderLeftWidth: 4,
        elevation: 1,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    itemTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#34495e',
    },
    itemAmount: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    itemDate: {
        fontSize: 11,
        color: '#95a5a6',
    },
});
