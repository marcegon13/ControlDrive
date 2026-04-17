import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { COLORS } from "../../theme/colors";
import { Billetera, Mantenimiento } from "../../types";

interface MantenimientoModalProps {
  modalVisible: boolean;
  billeteras: Billetera[];
  handleCloseModal: () => void;
  handleSaveMantenimiento: (data: Omit<Mantenimiento, "id">) => void;
}

export const MantenimientoModal: React.FC<MantenimientoModalProps> = ({
  modalVisible,
  billeteras,
  handleCloseModal,
  handleSaveMantenimiento,
}) => {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");
  const [km, setKm] = useState("");
  const [selectedWalletId, setSelectedWalletId] = useState<string | null>(null);

  const handleSave = () => {
    if (!descripcion || !monto || !km || !selectedWalletId) {
      Alert.alert("Error", "Por favor completa todos los campos.");
      return;
    }

    const montoNum = parseFloat(monto);
    const kmNum = parseInt(km);

    if (isNaN(montoNum) || montoNum <= 0) {
      Alert.alert("Error", "Ingresa un monto válido.");
      return;
    }

    if (isNaN(kmNum) || kmNum <= 0) {
      Alert.alert("Error", "Ingresa un kilometraje válido.");
      return;
    }

    handleSaveMantenimiento({
      descripcion,
      monto: montoNum,
      km: kmNum,
      billeteraId: selectedWalletId,
      fecha: new Date(),
    });

    // Reset fields
    setDescripcion("");
    setMonto("");
    setKm("");
    setSelectedWalletId(null);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleCloseModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>🔧 Registrar Service</Text>
          
          <ScrollView style={{ width: "100%" }}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Cambio de Aceite y Filtros"
              value={descripcion}
              onChangeText={setDescripcion}
            />

            <Text style={styles.label}>Costo Total ($)</Text>
            <TextInput
              style={styles.input}
              placeholder="0.00"
              keyboardType="numeric"
              value={monto}
              onChangeText={setMonto}
            />

            <Text style={styles.label}>Kilometraje Actual</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: 45000"
              keyboardType="numeric"
              value={km}
              onChangeText={setKm}
            />

            <Text style={styles.label}>Pagar con:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.walletContainer}>
              {billeteras.map((billetera) => (
                <TouchableOpacity
                  key={billetera.id}
                  style={[
                    styles.walletChip,
                    selectedWalletId === billetera.id && { backgroundColor: billetera.color },
                  ]}
                  onPress={() => setSelectedWalletId(billetera.id)}
                >
                  <Text
                    style={[
                      styles.walletText,
                      selectedWalletId === billetera.id && { color: "white", fontWeight: "bold" },
                    ]}
                  >
                    {billetera.nombre}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={handleCloseModal}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonSave]}
                onPress={handleSave}
              >
                <Text style={styles.textStyle}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.dark,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.gray,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  walletContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  walletChip: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#eee",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  walletText: {
    fontSize: 14,
    color: COLORS.dark,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    flex: 0.48,
    alignItems: "center",
  },
  buttonCancel: {
    backgroundColor: COLORS.gray,
  },
  buttonSave: {
    backgroundColor: COLORS.primary,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
