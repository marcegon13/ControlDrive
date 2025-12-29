// src/components/modals/CargaCombustibleModal.tsx
import React, { useState, useEffect } from "react";
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import { Billetera, CargaCombustible } from "../../types";
import { ESTACIONES_DISPONIBLES } from "../../constants";
import { CustomPicker } from "../ui/CustomPicker";
import { DateSelector } from "../ui/DateSelector";
import { COLORS } from "../../theme/colors";

interface CargaCombustibleModalProps {
  modalVisible: boolean;
  billeteras: Billetera[];
  handleCloseModal: () => void;
  handleSaveCargaCombustible: (data: Omit<CargaCombustible, "id">) => Promise<void>;
}

export const CargaCombustibleModal: React.FC<CargaCombustibleModalProps> = ({
  modalVisible,
  billeteras,
  handleCloseModal,
  handleSaveCargaCombustible,
}) => {
  const [estacion, setEstacion] = useState<string>("YPF");
  const [total, setTotal] = useState<string>("");
  const [litros, setLitros] = useState<string>("");
  const [precioPorLitro, setPrecioPorLitro] = useState<string>("");
  const [billeteraId, setBilleteraId] = useState<string>("");
  const [fecha, setFecha] = useState(new Date());
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    if (modalVisible) {
      setTotal("");
      setLitros("");
      setPrecioPorLitro("");
      setEstacion("YPF");
      setBilleteraId(billeteras.length > 0 ? billeteras[0].id : "");
      setFecha(new Date());
    }
  }, [modalVisible, billeteras]);

  useEffect(() => {
    const parsedTotal = parseFloat(total);
    const parsedLitros = parseFloat(litros);
    if (parsedTotal > 0 && parsedLitros > 0) {
      setPrecioPorLitro((parsedTotal / parsedLitros).toFixed(2));
    } else {
      setPrecioPorLitro("");
    }
  }, [total, litros]);

  const handleSubmit = async () => {
    const parsedTotal = parseFloat(total.replace(",", "."));
    const parsedLitros = parseFloat(litros.replace(",", "."));
    const parsedPrecio = parseFloat(precioPorLitro.replace(",", "."));

    if (isNaN(parsedTotal) || parsedTotal <= 0 || isNaN(parsedLitros) || parsedLitros <= 0) {
      Alert.alert("Error", "Por favor completa los campos numéricos correctamente.");
      return;
    }

    setGuardando(true);
    await handleSaveCargaCombustible({
      estacion,
      total: parsedTotal,
      litros: parsedLitros,
      precioPorLitro: parsedPrecio,
      billeteraId,
      fecha: fecha,
    });
    setGuardando(false);
  };

  return (
    <Modal visible={modalVisible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>⛽ Registrar Carga</Text>

          <DateSelector date={fecha} onDateChange={setFecha} />

          <CustomPicker
            label="Estación"
            value={estacion}
            items={ESTACIONES_DISPONIBLES.map((e) => ({ label: e, value: e }))}
            onValueChange={setEstacion}
          />

          <CustomPicker
            label="Billetera (Pago)"
            value={billeteraId}
            items={billeteras.map((b) => ({
              label: `${b.icono} ${b.nombre}`,
              value: b.id,
            }))}
            onValueChange={setBilleteraId}
          />

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Total ($)</Text>
              <TextInput
                style={styles.input}
                value={total}
                onChangeText={setTotal}
                keyboardType="numeric"
                placeholder="0.00"
              />
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Litros</Text>
              <TextInput
                style={styles.input}
                value={litros}
                onChangeText={setLitros}
                keyboardType="numeric"
                placeholder="0.0"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Precio por Litro ($)</Text>
            <TextInput
              style={styles.input}
              value={precioPorLitro}
              onChangeText={setPrecioPorLitro}
              placeholder="0.00"
              keyboardType="numeric"
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
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
  disabledInput: {
    backgroundColor: COLORS.light,
    color: COLORS.gray,
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
