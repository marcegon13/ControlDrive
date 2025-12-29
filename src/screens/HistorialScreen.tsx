// src/screens/HistorialScreen.tsx
import React, { useMemo } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { RegistroDiario, CargaCombustible, Transaction } from "../types";
import { formatearFechaHora } from "../utils";
import { COLORS } from "../theme/colors";
import { CurrencyText } from "../components/ui/CurrencyText";
import { APP_LOGOS } from "../constants";

interface HistorialScreenProps {
  registrosDiarios: RegistroDiario[];
  cargasCombustible: CargaCombustible[];
  transactions: Transaction[];
  hideBalances: boolean;
  handleDeleteRegistroDiario: (id: string) => void;
  handleDeleteCargaCombustible: (id: string) => void;
  handleDeleteTransaction: (id: string) => void;
}

export const HistorialScreen: React.FC<HistorialScreenProps> = ({
  registrosDiarios,
  cargasCombustible,
  transactions,
  hideBalances,
  handleDeleteRegistroDiario,
  handleDeleteCargaCombustible,
  handleDeleteTransaction,
}) => {
  const allItems = useMemo(() => {
    const registros = registrosDiarios.map((r: RegistroDiario) => ({
      ...r,
      type: "registro" as const,
      fecha: new Date(r.fecha),
    }));

    const cargas = cargasCombustible.map((c: CargaCombustible) => ({
      ...c,
      type: "carga" as const,
      fecha: new Date(c.fecha),
    }));

    const trans = transactions.map((t: Transaction) => ({
      ...t,
      type: "transaction" as const,
      fecha: new Date(t.fecha),
    }));

    return [...registros, ...cargas, ...trans].sort(
      (a, b) => b.fecha.getTime() - a.fecha.getTime()
    );
  }, [registrosDiarios, cargasCombustible, transactions]);

  const renderItem = ({ item }: { item: any }) => {
    const handleDelete = () => {
      if (item.type === "registro") {
        handleDeleteRegistroDiario(item.id);
      } else if (item.type === "carga") {
        handleDeleteCargaCombustible(item.id);
      } else if (item.type === "transaction") {
        handleDeleteTransaction(item.id);
      }
    };

    if (item.type === "registro") {
      return (
        <View style={[styles.listItem, { borderLeftColor: COLORS.primary }]}>
          <View style={styles.rowBetween}>
            <View style={styles.titleContainer}>
              {APP_LOGOS[item.app] ? (
                <Image source={APP_LOGOS[item.app]} style={styles.brandLogo} resizeMode="contain" />
              ) : (
                <Text style={styles.brandEmoji}>🚗</Text>
              )}
              <Text style={styles.listTitle}>{item.app}</Text>
            </View>
            <View style={styles.rowButtons}>
              <CurrencyText
                amount={item.total}
                hideValue={hideBalances}
                prefix="+"
                style={[styles.listAmount, { color: COLORS.primary }]}
              />
              <TouchableOpacity onPress={handleDelete}>
                <Text style={styles.deleteButton}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailsRow}>
            <CurrencyText
              amount={item.efectivo}
              hideValue={hideBalances}
              prefix="💵 "
              style={styles.detailText}
            />
            <CurrencyText
              amount={item.tarjetas}
              hideValue={hideBalances}
              prefix="💳 "
              style={styles.detailText}
            />
            <CurrencyText
              amount={item.billeterasVirtuales}
              hideValue={hideBalances}
              prefix="📲 "
              style={styles.detailText}
            />
          </View>
          <Text style={styles.listDate}>{formatearFechaHora(item.fecha)}</Text>
        </View>
      );
    }

    if (item.type === "carga") {
      return (
        <View style={[styles.listItem, { borderLeftColor: COLORS.danger }]}>
          <View style={styles.rowBetween}>
            <Text style={styles.listTitle}>⛽ {item.estacion}</Text>
            <View style={styles.rowButtons}>
              <CurrencyText
                amount={item.total}
                hideValue={hideBalances}
                prefix="-"
                style={[styles.listAmount, { color: COLORS.danger }]}
              />
              <TouchableOpacity onPress={handleDelete}>
                <Text style={styles.deleteButton}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailText}>{item.litros}L</Text>
            <CurrencyText
              amount={item.precioPorLitro}
              hideValue={hideBalances}
              prefix=""
              style={styles.detailText}
            />
          </View>
          <Text style={styles.listDate}>{formatearFechaHora(item.fecha)}</Text>
        </View>
      );
    }

    if (item.type === "transaction") {
      const isIngreso = item.tipo === "ingreso";
      const isTransferencia = item.tipo === "transferencia";

      return (
        <View
          style={[
            styles.listItem,
            {
              borderLeftColor: isIngreso
                ? COLORS.primary
                : isTransferencia
                ? COLORS.secondary
                : COLORS.danger,
            },
          ]}
        >
          <View style={styles.rowBetween}>
            <Text style={styles.listTitle}>
              {isIngreso
                ? "➕ Ingreso"
                : isTransferencia
                ? "🔄 Transferencia"
                : "➖ Gasto"}
            </Text>
            <View style={styles.rowButtons}>
              <CurrencyText
                amount={item.monto}
                hideValue={hideBalances}
                prefix={isIngreso ? "+" : isTransferencia ? "↔" : "-"}
                style={[
                  styles.listAmount,
                  {
                    color: isIngreso
                      ? COLORS.primary
                      : isTransferencia
                      ? COLORS.secondary
                      : COLORS.danger,
                  },
                ]}
              />
              <TouchableOpacity onPress={handleDelete}>
                <Text style={styles.deleteButton}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
          {item.descripcion ? (
            <Text style={styles.listSubtitle}>{item.descripcion}</Text>
          ) : null}
          <Text style={styles.listDate}>{formatearFechaHora(item.fecha)}</Text>
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>📊 Historial Completo</Text>
      <FlatList
        data={allItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.historialList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: COLORS.dark,
    textAlign: "center",
  },
  listItem: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  rowButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.dark,
  },
  listSubtitle: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 4,
  },
  listAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listDate: {
    fontSize: 11,
    color: "#95a5a6",
    marginTop: 4,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  brandLogo: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  brandEmoji: {
    fontSize: 16,
    marginRight: 8,
  },
  deleteButton: {
    fontSize: 18,
    color: COLORS.danger,
    marginLeft: 10,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  detailText: {
    fontSize: 12,
    color: COLORS.gray,
  },
  historialList: {
    paddingBottom: 16,
  },
});
