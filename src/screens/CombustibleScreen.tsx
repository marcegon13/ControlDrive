// src/screens/CombustibleScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { CargaCombustible } from "../types";
import { formatearFechaHora } from "../utils";
import { COLORS } from "../theme/colors";
import { CurrencyText } from "../components/ui/CurrencyText";

interface CombustibleScreenProps {
  cargasCombustible: CargaCombustible[];
  hideBalances: boolean;
  handleOpenCargaCombustibleModal: () => void;
  handleDeleteCargaCombustible: (id: string) => void;
}

export const CombustibleScreen: React.FC<CombustibleScreenProps> = ({
  cargasCombustible,
  hideBalances,
  handleOpenCargaCombustibleModal,
  handleDeleteCargaCombustible,
}) => {
  const totalGastado = cargasCombustible.reduce(
    (sum: number, c: CargaCombustible) => sum + c.total,
    0
  );
  const totalLitros = cargasCombustible.reduce(
    (sum: number, c: CargaCombustible) => sum + c.litros,
    0
  );
  const precioPromedio = totalLitros > 0 ? totalGastado / totalLitros : 0;

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>⛽ Combustible</Text>

      <TouchableOpacity
        style={styles.mainActionButton}
        onPress={handleOpenCargaCombustibleModal}
      >
        <Text style={styles.mainActionText}>➕ Registrar Carga</Text>
      </TouchableOpacity>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <CurrencyText
            amount={totalGastado}
            hideValue={hideBalances}
            style={styles.statCardValue}
          />
          <Text style={styles.statCardLabel}>Total Gastado</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statCardValue}>{totalLitros.toFixed(1)}L</Text>
          <Text style={styles.statCardLabel}>Total Litros</Text>
        </View>
        <View style={styles.statCard}>
          <CurrencyText
            amount={precioPromedio}
            hideValue={hideBalances}
            style={styles.statCardValue}
          />
          <Text style={styles.statCardLabel}>Precio Promedio</Text>
        </View>
      </View>

      <FlatList
        data={cargasCombustible.sort(
          (a: CargaCombustible, b: CargaCombustible) =>
            new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: CargaCombustible }) => (
          <View style={[styles.listItem, { borderLeftColor: COLORS.danger }]}>
            <View style={styles.rowBetween}>
              <Text style={styles.listTitle}>{item.estacion}</Text>
              <TouchableOpacity
                onPress={() => handleDeleteCargaCombustible(item.id)}
              >
                <Text style={styles.deleteButton}>🗑️</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowBetween}>
              <CurrencyText
                amount={item.total}
                hideValue={hideBalances}
                style={styles.listSubtitle}
              />
              <Text style={styles.listDetail}>{item.litros}L</Text>
            </View>
            <View style={styles.rowBetween}>
              <CurrencyText
                amount={item.precioPorLitro}
                hideValue={hideBalances}
                prefix=""
                style={styles.listDetail}
              />
              <Text style={styles.listDate}>
                {formatearFechaHora(new Date(item.fecha))}
              </Text>
            </View>
          </View>
        )}
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
  mainActionButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  mainActionText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statCardValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.dark,
    marginBottom: 4,
  },
  statCardLabel: {
    fontSize: 12,
    color: COLORS.gray,
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
  listDetail: {
    fontSize: 12,
    color: COLORS.gray,
  },
  listDate: {
    fontSize: 11,
    color: "#95a5a6",
    marginTop: 4,
  },
  deleteButton: {
    fontSize: 18,
    color: COLORS.danger,
    marginLeft: 10,
  },
});
