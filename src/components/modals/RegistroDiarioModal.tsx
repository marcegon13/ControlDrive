import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { RegistroDiario } from "../../types";
import RegistroRapido from "../RegistroRapido";
import RegistroCompleto from "../RegistroCompleto";
import { globalStyles } from "../../styles";

interface RegistroDiarioModalProps {
  modalVisible: boolean;
  handleCloseModal: () => void;
  handleSaveRegistroDiario: (data: Omit<RegistroDiario, "id">) => Promise<void>;
}

const RegistroDiarioModal: React.FC<RegistroDiarioModalProps> = ({
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
      <View style={globalStyles.modalOverlay}>
        <View style={globalStyles.modalContent}>
          {/* TABS DE SELECCIÓN DE MODO */}
          <View style={localStyles.tabsContainer}>
            <TouchableOpacity
              style={[localStyles.tab, modoRapido && localStyles.tabActiva]}
              onPress={() => setModoRapido(true)}
            >
              <Text style={[localStyles.tabText, modoRapido && localStyles.tabTextActiva]}>
                💨 Rápido
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[localStyles.tab, !modoRapido && localStyles.tabActiva]}
              onPress={() => setModoRapido(false)}
            >
              <Text style={[localStyles.tabText, !modoRapido && localStyles.tabTextActiva]}>
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

const localStyles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#ecf0f1",
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
    backgroundColor: "#3498db",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7f8c8d",
  },
  tabTextActiva: {
    color: "white",
  },
});

export default RegistroDiarioModal;
