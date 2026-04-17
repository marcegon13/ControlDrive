import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from "react-native";
import { Transaction, TransactionType, Billetera } from "../../types";
import CustomPicker from "../CustomPicker";
import DateSelector from "../DateSelector";
import { globalStyles } from "../../styles";

interface TransactionModalProps {
  modalVisible: boolean;
  modalType: TransactionType | null;
  selectedWalletId: string | null;
  billeteras: Billetera[];
  handleCloseModal: () => void;
  handleSaveTransaction: (data: any) => Promise<void>;
}

const TransactionModal: React.FC<TransactionModalProps> = ({
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

    if (parsedMonto > 10000) {
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
  };

  const isTransferencia = modalType === "transferencia";
  const title = modalType === "ingreso" ? "Registrar Ingreso" : modalType === "gasto" ? "Registrar Gasto" : "Transferencia";

  return (
    <Modal visible={modalVisible} transparent animationType="slide">
      <View style={globalStyles.modalOverlay}>
        <View style={globalStyles.modalContent}>
          <Text style={globalStyles.modalTitle}>{title}</Text>

          <DateSelector date={fecha} onDateChange={setFecha} />

          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>Monto ($)</Text>
            <TextInput
              style={globalStyles.input}
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

          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>Descripción</Text>
            <TextInput
              style={globalStyles.input}
              value={descripcion}
              onChangeText={setDescripcion}
              placeholder="Opcional"
            />
          </View>

          <View style={globalStyles.modalButtons}>
            <TouchableOpacity style={globalStyles.cancelButton} onPress={() => handleCloseModal()}>
              <Text style={globalStyles.buttonTextSecondary}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[globalStyles.saveButton, guardando && globalStyles.disabledButton]}
              onPress={handleSubmit}
              disabled={guardando}
            >
              <Text style={globalStyles.buttonTextPrimary}>
                {guardando ? "Guardando..." : "Guardar"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TransactionModal;
