import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert, Modal, TextInput } from "react-native";
import { Billetera, TransactionType, RegistroDiario, CargaCombustible, Transaction } from "../types";
import { formatearMoneda } from "../utils";
import { globalStyles } from "../styles";
import { BilleteraDetalleModal } from "../components/modals/BilleteraDetalleModal";

interface BilleterasScreenProps {
  billeteras: Billetera[];
  handleOpenModal: (type: TransactionType, walletId: string | null) => void;
  // Nuevas props para detalle
  registros: RegistroDiario[];
  gastos: CargaCombustible[];
  transactions: Transaction[];
  onAdjustBalance: (walletId: string, newBalance: number) => void;
}

const BilleterasScreen: React.FC<BilleterasScreenProps> = ({
  billeteras,
  handleOpenModal,
  registros,
  gastos,
  transactions,
  onAdjustBalance
}) => {
  const [selectedBilletera, setSelectedBilletera] = useState<Billetera | null>(null);

  // Estado para ajuste de saldo
  const [adjustModalVisible, setAdjustModalVisible] = useState(false);
  const [editingWallet, setEditingWallet] = useState<Billetera | null>(null);
  const [newBalanceInput, setNewBalanceInput] = useState("");

  const openAdjustModal = (wallet: Billetera) => {
    setEditingWallet(wallet);
    setNewBalanceInput(wallet.saldo.toString());
    setAdjustModalVisible(true);
  };

  const handleConfirmAdjust = () => {
    if (!editingWallet) return;
    const amount = parseFloat(newBalanceInput);
    if (isNaN(amount)) {
      Alert.alert("Error", "Ingresa un número válido");
      return;
    }

    Alert.alert(
      "Confirmar Ajuste",
      `¿Cambiar saldo de ${editingWallet.nombre} a ${formatearMoneda(amount)}?\n\nSe creará una transacción de ajuste automáticamente.`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          onPress: () => {
            onAdjustBalance(editingWallet.id, amount);
            setAdjustModalVisible(false);
            setEditingWallet(null);
          }
        }
      ]
    );
  };

  // Mes actual por defecto (YYYY-MM)
  const currentMonth = React.useMemo(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  }, []);

  const total = billeteras.reduce(
    (sum: number, b: Billetera) => sum + b.saldo,
    0
  );

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.screenTitle}>💰 Billeteras</Text>

      <View style={styles.totalCard}>
        <Text style={styles.totalCardTitle}>Total General</Text>
        <Text style={styles.totalCardAmount}>{formatearMoneda(total)}</Text>
      </View>

      <FlatList
        data={billeteras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Billetera }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setSelectedBilletera(item)} // ✅ Abre el modal al tocar
            style={[styles.billeteraCard, { borderLeftColor: item.color }]}
          >
            <View style={styles.billeteraHeader}>
              <Text style={styles.billeteraIcon}>{item.icono}</Text>
              <Text style={styles.billeteraName}>{item.nombre}</Text>
              <Text style={styles.detailHint}>🔍 Ver detalle</Text>
              <Text
                style={[
                  styles.billeteraSaldo,
                  { color: item.saldo >= 0 ? "#2ecc71" : "#e74c3c" },
                ]}
              >
                {formatearMoneda(item.saldo)}
              </Text>
              <TouchableOpacity
                onPress={(e) => {
                  e.stopPropagation();
                  openAdjustModal(item);
                }}
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 4, opacity: 0.8 }}
              >
                <Text style={{ fontSize: 12, color: '#7f8c8d' }}>✏️ Ajustar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.billeteraActions}>
              <TouchableOpacity
                style={[styles.billeteraAction, { backgroundColor: "#2ecc71" }]}
                onPress={(e) => {
                  e.stopPropagation(); // Evitar abrir detalle al tocar botón
                  handleOpenModal("ingreso", item.id);
                }}
              >
                <Text style={styles.billeteraActionText}>➕ Ingreso</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.billeteraAction, { backgroundColor: "#e74c3c" }]}
                onPress={(e) => {
                  e.stopPropagation();
                  handleOpenModal("gasto", item.id);
                }}
              >
                <Text style={styles.billeteraActionText}>➖ Gasto</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.billeteraAction, { backgroundColor: "#3498db" }]}
                onPress={(e) => {
                  e.stopPropagation();
                  handleOpenModal("transferencia", item.id);
                }}
              >
                <Text style={styles.billeteraActionText}>🔄 Transferir</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
      <BilleteraDetalleModal
        visible={!!selectedBilletera}
        onClose={() => setSelectedBilletera(null)}
        billetera={selectedBilletera}
        currentMonth={currentMonth}
        registros={registros}
        gastos={gastos}
        transactions={transactions}
      />

      {/* Modal Ajuste Saldo */}
      <Modal visible={adjustModalVisible} transparent animationType="fade">
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '85%', elevation: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#2c3e50' }}>✏️ Ajustar Saldo Real</Text>
            <Text style={{ marginBottom: 10, color: '#7f8c8d' }}>
              Ingresa el dinero REAL que tienes actualmente en {editingWallet?.nombre}.
            </Text>

            <TextInput
              style={{ borderWidth: 1, borderColor: '#bdc3c7', borderRadius: 8, padding: 12, fontSize: 18, marginBottom: 20 }}
              value={newBalanceInput}
              onChangeText={setNewBalanceInput}
              keyboardType="numeric"
              placeholder="0.00"
              autoFocus
            />

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => setAdjustModalVisible(false)} style={{ padding: 10, marginRight: 10 }}>
                <Text style={{ color: '#e74c3c', fontWeight: 'bold' }}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleConfirmAdjust} style={{ backgroundColor: '#2ecc71', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  totalCard: {
    backgroundColor: "#3498db",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
  },
  totalCardTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  totalCardAmount: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  billeteraCard: {
    backgroundColor: "white",
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
    color: "#2c3e50",
  },
  billeteraSaldo: {
    fontSize: 18,
    fontWeight: "bold",
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
    color: "white",
    fontWeight: "600",
    marginLeft: 5,
  },
  detailHint: {
    fontSize: 12,
    color: '#95a5a6',
    marginLeft: 10,
    fontStyle: 'italic',
  },
});

export default BilleterasScreen;
