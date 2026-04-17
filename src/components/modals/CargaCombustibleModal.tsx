import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from "react-native";
import { CargaCombustible, Billetera } from "../../types";
import { ESTACIONES_DISPONIBLES } from "../../constants";
import CustomPicker from "../CustomPicker";
import DateSelector from "../DateSelector";
import { globalStyles } from "../../styles";

interface CargaCombustibleModalProps {
  modalVisible: boolean;
  billeteras: Billetera[];
  handleCloseModal: () => void;
  handleSaveCargaCombustible: (data: Omit<CargaCombustible, "id">) => Promise<void>;
}

const CargaCombustibleModal: React.FC<CargaCombustibleModalProps> = ({
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
      <View style={globalStyles.modalOverlay}>
        <View style={globalStyles.modalContent}>
          <Text style={globalStyles.modalTitle}>⛽ Registrar Carga</Text>

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

          <View style={globalStyles.row}>
            <View style={globalStyles.halfInput}>
              <Text style={globalStyles.label}>Total ($)</Text>
              <TextInput
                style={globalStyles.input}
                value={total}
                onChangeText={setTotal}
                keyboardType="numeric"
                placeholder="0.00"
              />
            </View>
            <View style={globalStyles.halfInput}>
              <Text style={globalStyles.label}>Litros</Text>
              <TextInput
                style={globalStyles.input}
                value={litros}
                onChangeText={setLitros}
                keyboardType="numeric"
                placeholder="0.0"
              />
            </View>
          </View>

          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>Precio por Litro ($)</Text>
            <TextInput
              style={[globalStyles.input, globalStyles.disabledInput]}
              value={precioPorLitro}
              editable={false}
              placeholder="Calculado..."
            />
          </View>

          <View style={globalStyles.modalButtons}>
            <TouchableOpacity style={globalStyles.cancelButton} onPress={handleCloseModal}>
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

export default CargaCombustibleModal;
