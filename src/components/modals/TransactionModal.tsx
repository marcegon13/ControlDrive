// src/components/modals/TransactionModal.tsx
import React, { useState, useEffect } from "react";
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import { Billetera, TransactionType } from "../../types";
import { CustomPicker } from "../ui/CustomPicker";
import { DateSelector } from "../ui/DateSelector";
import { COLORS } from "../../theme/colors";

interface TransactionModalProps {
  modalVisible: boolean;
  modalType: TransactionType | null;
  selectedWalletId: string | null;
  billeteras: Billetera[];
  handleCloseModal: () => void;
  handleSaveTransaction: (data: any) => Promise<void>;
}

export const TransactionModal: React.FC<TransactionModalProps> = ({
  modalVisible,
  modalType,
  selectedWalletId,
  billeteras,
  handleCloseModal,
  handleSaveTransaction,
}) => {
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [origenId, setOrigenId] = useState("");
  const [destinoId, setDestinoId] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    if (modalVisible) {
      setOrigenId(selectedWalletId || (billeteras.length > 0 ? billeteras[0].id : ""));
      setMonto("");
      setDescripcion("");
      setDestinoId("");
      setFecha(new Date());
    }
  }, [modalVisible, selectedWalletId, billeteras]);

  if (!modalVisible || !modalType) return null;

  const handleSubmit = async () => {
    const parsedMonto = parseFloat(monto.replace(",", "."));
    if (isNaN(parsedMonto) || parsedMonto <= 0) {
      Alert.alert("Error", "Monto inválido");
      return;
    }

    if (parsedMonto > 100000) { // Ajustado a valor más realista para confirmación
      Alert.alert(
        "Confirmar Transacción Grande",
        `¿Estás seguro de registrar $${parsedMonto}?`,
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Confirmar",
            onPress: async () => {
              setGuardando(true);
              await handleSaveTransaction({
                monto: parsedMonto,
                descripcion,
                billeteraId: origenId,
                destinoId: modalType === "transferencia" ? destinoId : null,
                tipo: modalType,
                fecha: fecha,
              });
              setGuardando(false);
              handleCloseModal();
            },
          },
        ]
      );
      return;
    }

    setGuardando(true);
    await handleSaveTransaction({
      monto: parsedMonto,
      descripcion,
      billeteraId: origenId,
      destinoId: modalType === "transferencia" ? destinoId : null,
      tipo: modalType,
      fecha: fecha,
    });
    setGuardando(false);
    handleCloseModal();
  };

  const isTransferencia = modalType === "transferencia";
  const title = modalType === "ingreso" ? "Registrar Ingreso" : modalType === "gasto" ? "Registrar Gasto" : "Transferencia";

  return (
    <Modal visible={modalVisible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>
          
          <DateSelector date={fecha} onDateChange={setFecha} />

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Monto ($)</Text>
            <TextInput
              style={styles.input}
              value={monto}
              onChangeText={setMonto}
              keyboardType="numeric"
              placeholder="0.00"
            />
          </View>

          <CustomPicker
            label={isTransferencia ? "Desde Billetera" : "Billetera"}
            value={origenId}
            items={billeteras.map((b) => ({
              label: `${b.icono} ${b.nombre}`,
              value: b.id,
            }))}
            onValueChange={setOrigenId}
            disabled={!!selectedWalletId && !isTransferencia}
          />

          {isTransferencia && (
            <CustomPicker
              label="Hacia Billetera"
              value={destinoId}
              items={billeteras
                .filter((b) => b.id !== origenId)
                .map((b) => ({ label: `${b.icono} ${b.nombre}`, value: b.id }))}
              onValueChange={setDestinoId}
            />
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={styles.input}
              value={descripcion}
              onChangeText={setDescripcion}
              placeholder="Opcional"
            />
          </View>

          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCloseModal}>
              <Text style={styles.buttonTextSecondary}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.saveButton, guardando && styles.disabledButton]}
              onPress={handleSubmit}
              disabled={guardando}
            >
              <Text style={styles.buttonTextPrimary}>
                {guardando ? "Guardando..." : "Guardar"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    width: "90%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: COLORS.dark,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: COLORS.dark,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: COLORS.white,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.danger,
    borderRadius: 8,
    marginRight: 8,
    alignItems: "center",
  },
  saveButton: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: "center",
  },
  buttonTextPrimary: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextSecondary: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: COLORS.lightGray,
    opacity: 0.7,
  },
});
