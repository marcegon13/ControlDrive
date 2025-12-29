// src/screens/BilleterasScreen.tsx
import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Billetera, TransactionType } from "../types";
import { COLORS } from "../theme/colors";
import { CurrencyText } from "../components/ui/CurrencyText";
import { APP_LOGOS } from "../constants";

interface BilleterasScreenProps {
  billeteras: Billetera[];
  hideBalances: boolean;
  handleOpenModal: (type: TransactionType, walletId: string | null) => void;
}

export const BilleterasScreen: React.FC<BilleterasScreenProps> = ({ 
  billeteras, 
  hideBalances, 
  handleOpenModal 
}) => {
  const total = billeteras.reduce(
    (sum: number, b: Billetera) => sum + b.saldo,
    0
  );

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>💰 Billeteras</Text>

      <View style={styles.totalCard}>
        <Text style={styles.totalCardTitle}>Total General</Text>
        <CurrencyText
          amount={total}
          hideValue={hideBalances}
          style={styles.totalCardAmount}
        />
      </View>

      <FlatList
        data={billeteras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Billetera }) => (
          <View style={[styles.billeteraCard, { borderLeftColor: item.color }]}>
            <View style={styles.billeteraHeader}>
              {APP_LOGOS[item.nombre] ? (
                <Image source={APP_LOGOS[item.nombre]} style={styles.walletLogo} resizeMode="contain" />
              ) : (
                <Text style={styles.billeteraIcon}>{item.icono}</Text>
              )}
              <Text style={styles.billeteraName}>{item.nombre}</Text>
              <CurrencyText
                amount={item.saldo}
                hideValue={hideBalances}
                style={[
                  styles.billeteraSaldo,
                  { color: item.saldo >= 0 ? COLORS.primary : COLORS.danger },
                ]}
              />
            </View>
            <View style={styles.billeteraActions}>
              <TouchableOpacity
                style={[styles.billeteraAction, { backgroundColor: COLORS.primary }]}
                onPress={() => handleOpenModal("ingreso", item.id)}
              >
                <Text style={styles.billeteraActionText}>➕ Ingreso</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.billeteraAction, { backgroundColor: COLORS.danger }]}
                onPress={() => handleOpenModal("gasto", item.id)}
              >
                <Text style={styles.billeteraActionText}>➖ Gasto</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.billeteraAction, { backgroundColor: COLORS.secondary }]}
                onPress={() => handleOpenModal("transferencia", item.id)}
              >
                <Text style={styles.billeteraActionText}>🔄 Transferir</Text>
              </TouchableOpacity>
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
  totalCard: {
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
  },
  totalCardTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  totalCardAmount: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: "bold",
  },
  billeteraCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  billeteraHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  billeteraIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  billeteraName: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.dark,
  },
  billeteraSaldo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  walletLogo: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  billeteraActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  billeteraAction: {
    flex: 1,
    padding: 8,
    borderRadius: 6,
    marginHorizontal: 4,
    alignItems: "center",
  },
  billeteraActionText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },
});
