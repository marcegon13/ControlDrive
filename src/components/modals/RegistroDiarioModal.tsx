// src/components/modals/RegistroDiarioModal.tsx
import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { RegistroDiario } from "../../types";
import { APPS_DISPONIBLES } from "../../constants";
import { CustomPicker } from "../ui/CustomPicker";
import { InputRapido } from "../ui/InputRapido";
import { DateSelector } from "../ui/DateSelector";
import { COLORS } from "../../theme/colors";

// --- Sub-componente: Registro Rápido ---
interface RegistroRapidoProps {
  onGuardar: (data: Omit<RegistroDiario, "id">) => void;
  onCancelar: () => void;
}

const RegistroRapido: React.FC<RegistroRapidoProps> = ({ onGuardar, onCancelar }) => {
  const [app, setApp] = useState("Didi");
  const [efectivo, setEfectivo] = useState("");
  const [tarjetas, setTarjetas] = useState("");
  const [billeterasVirtuales, setBilleterasVirtuales] = useState("");
  const [guardando, setGuardando] = useState(false);

  const efectivoRef = useRef<TextInput>(null);
  const tarjetasRef = useRef<TextInput>(null);
  const billeterasRef = useRef<TextInput>(null);

  const total = useMemo(() => {
    const e = parseFloat(efectivo) || 0;
    const t = parseFloat(tarjetas) || 0;
    const b = parseFloat(billeterasVirtuales) || 0;
    return e + t + b;
  }, [efectivo, tarjetas, billeterasVirtuales]);

  const handleSubmit = () => {
    const parsedEfectivo = parseFloat(efectivo.replace(",", ".")) || 0;
    const parsedTarjetas = parseFloat(tarjetas.replace(",", ".")) || 0;
    const parsedBilleteras = parseFloat(billeterasVirtuales.replace(",", ".")) || 0;
    const parsedTotal = parseFloat(total.toString().replace(",", ".")) || 0;

    if (parsedTotal <= 0) {
      Alert.alert("Error", "El total debe ser mayor a 0.");
      return;
    }

    setGuardando(true);
    onGuardar({
      app,
      efectivo: parsedEfectivo,
      tarjetas: parsedTarjetas,
      billeterasVirtuales: parsedBilleteras,
      total: parsedTotal,
      fecha: new Date(),
    });
    setGuardando(false);
  };

  return (
    <View style={styles.rapidoContainer}>
      <Text style={styles.rapidoTitle}>Registro Rápido 💨</Text>
      <Text style={styles.rapidoSubtitle}>Carga los totales de hoy por App</Text>

      <CustomPicker
        label="App"
        value={app}
        items={APPS_DISPONIBLES.map((a) => ({ label: a, value: a }))}
        onValueChange={setApp}
      />

      <InputRapido
        label="Efectivo"
        value={efectivo}
        onChange={setEfectivo}
        autoFocus={true}
        onSubmitEditing={() => tarjetasRef.current?.focus()}
        returnKeyType="next"
        ref={efectivoRef}
      />

      <InputRapido
        label="Tarjetas"
        value={tarjetas}
        onChange={setTarjetas}
        onSubmitEditing={() => billeterasRef.current?.focus()}
        returnKeyType="next"
        ref={tarjetasRef}
      />

      <InputRapido
        label="Billeteras"
        value={billeterasVirtuales}
        onChange={setBilleterasVirtuales}
        returnKeyType="done"
        ref={billeterasRef}
      />

      <View style={styles.totalRapido}>
        <Text style={styles.totalTexto}>Total: ${total.toFixed(2)}</Text>
      </View>

      <View style={styles.modalButtons}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancelar}>
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
  );
};

// --- Sub-componente: Registro Completo ---
interface RegistroCompletoProps {
  onGuardar: (data: Omit<RegistroDiario, "id">) => void;
  onCancelar: () => void;
}

const RegistroCompleto: React.FC<RegistroCompletoProps> = ({ onGuardar, onCancelar }) => {
  const [app, setApp] = useState("Didi");
  const [efectivo, setEfectivo] = useState("");
  const [tarjetas, setTarjetas] = useState("");
  const [billeterasVirtuales, setBilleterasVirtuales] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [guardando, setGuardando] = useState(false);

  const efectivoRef = useRef<TextInput>(null);
  const tarjetasRef = useRef<TextInput>(null);
  const billeterasRef = useRef<TextInput>(null);

  const total = useMemo(() => {
    const e = parseFloat(efectivo) || 0;
    const t = parseFloat(tarjetas) || 0;
    const b = parseFloat(billeterasVirtuales) || 0;
    return e + t + b;
  }, [efectivo, tarjetas, billeterasVirtuales]);

  const handleSubmit = () => {
    const parsedEfectivo = parseFloat(efectivo.replace(",", ".")) || 0;
    const parsedTarjetas = parseFloat(tarjetas.replace(",", ".")) || 0;
    const parsedBilleteras = parseFloat(billeterasVirtuales.replace(",", ".")) || 0;
    const parsedTotal = parseFloat(total.toString().replace(",", ".")) || 0;

    if (parsedTotal <= 0) {
      Alert.alert("Error", "El total debe ser mayor a 0.");
      return;
    }

    setGuardando(true);
    onGuardar({
      app,
      efectivo: parsedEfectivo,
      tarjetas: parsedTarjetas,
      billeterasVirtuales: parsedBilleteras,
      total: parsedTotal,
      fecha: fecha,
    });
    setGuardando(false);
  };

  return (
    <ScrollView style={styles.completoContainer}>
      <Text style={styles.completoTitle}>Registro Completo 📊</Text>

      <DateSelector date={fecha} onDateChange={setFecha} />

      <CustomPicker
        label="App"
        value={app}
        items={APPS_DISPONIBLES.map((a) => ({ label: a, value: a }))}
        onValueChange={setApp}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>💵 Efectivo ($)</Text>
        <TextInput
          ref={efectivoRef}
          style={styles.input}
          value={efectivo}
          onChangeText={setEfectivo}
          keyboardType="decimal-pad"
          placeholder="0.00"
          returnKeyType="next"
          onSubmitEditing={() => tarjetasRef.current?.focus()}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>💳 Tarjetas/Plataforma ($)</Text>
        <TextInput
          ref={tarjetasRef}
          style={styles.input}
          value={tarjetas}
          onChangeText={setTarjetas}
          keyboardType="decimal-pad"
          placeholder="0.00"
          returnKeyType="next"
          onSubmitEditing={() => billeterasRef.current?.focus()}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>📲 Billeteras Virtuales ($)</Text>
        <TextInput
          ref={billeterasRef}
          style={styles.input}
          value={billeterasVirtuales}
          onChangeText={setBilleterasVirtuales}
          keyboardType="decimal-pad"
          placeholder="0.00"
          returnKeyType="done"
        />
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total del Día:</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>

      <View style={styles.modalButtons}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancelar}>
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
    </ScrollView>
  );
};

// --- Componente Principal: RegistroDiarioModal ---
interface RegistroDiarioModalProps {
  modalVisible: boolean;
  handleCloseModal: () => void;
  handleSaveRegistroDiario: (data: Omit<RegistroDiario, "id">) => Promise<void>;
}

export const RegistroDiarioModal: React.FC<RegistroDiarioModalProps> = ({
  modalVisible,
  handleCloseModal,
  handleSaveRegistroDiario,
}) => {
  const [modoRapido, setModoRapido] = useState(true);

  const handleGuardar = async (data: Omit<RegistroDiario, "id">) => {
    await handleSaveRegistroDiario(data);
    handleCloseModal();
  };

  return (
    <Modal visible={modalVisible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* TABS DE SELECCIÓN DE MODO */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[styles.tab, modoRapido && styles.tabActiva]}
              onPress={() => setModoRapido(true)}
            >
              <Text style={[styles.tabText, modoRapido && styles.tabTextActiva]}>
                💨 Rápido
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, !modoRapido && styles.tabActiva]}
              onPress={() => setModoRapido(false)}
            >
              <Text style={[styles.tabText, !modoRapido && styles.tabTextActiva]}>
                📊 Completo
              </Text>
            </TouchableOpacity>
          </View>

          {modoRapido ? (
            <RegistroRapido
              onGuardar={handleGuardar}
              onCancelar={handleCloseModal}
            />
          ) : (
            <RegistroCompleto
              onGuardar={handleGuardar}
              onCancelar={handleCloseModal}
            />
          )}
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
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: COLORS.light,
    borderRadius: 8,
    padding: 4,
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    borderRadius: 6,
  },
  tabActiva: {
    backgroundColor: COLORS.secondary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.gray,
  },
  tabTextActiva: {
    color: COLORS.white,
  },
  rapidoContainer: {
    padding: 0,
  },
  rapidoTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: COLORS.dark,
  },
  rapidoSubtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: COLORS.gray,
  },
  completoContainer: {
    padding: 0,
  },
  completoTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
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
  totalRapido: {
    backgroundColor: COLORS.light,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 16,
  },
  totalTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  totalContainer: {
    backgroundColor: COLORS.light,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 16,
  },
  totalLabel: {
    fontSize: 16,
    color: COLORS.gray,
    marginBottom: 4,
  },
  totalValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
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
