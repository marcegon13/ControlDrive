import React from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { COLORS } from "../../theme/colors";
import { CurrencyText } from "../ui/CurrencyText";
import { JornadaSummary } from "../../types";

interface ResumenJornadaModalProps {
  modalVisible: boolean;
  summary: JornadaSummary | null;
  handleCloseModal: () => void;
}

export const ResumenJornadaModal: React.FC<ResumenJornadaModalProps> = ({
  modalVisible,
  summary,
  handleCloseModal,
}) => {
  if (!summary) return null;

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={handleCloseModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>🏁 Resumen de Jornada</Text>
          <Text style={styles.modalSubtitle}>¡Excelente trabajo! Aquí están tus números:</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>⏱️ Duración</Text>
              <Text style={styles.statValue}>{summary.duracionHoras} hs</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>🛣️ Recorrido GPS</Text>
              <Text style={styles.statValue}>{summary.totalKm} km</Text>
            </View>
            {summary.kmApps !== undefined && (
              <>
                <View style={styles.statRow}>
                  <Text style={styles.statLabel}>📱 Recorrido Apps</Text>
                  <Text style={[styles.statValue, { fontSize: 14, color: COLORS.gray }]}>{summary.kmApps} km</Text>
                </View>
                <View style={styles.statRow}>
                  <Text style={styles.statLabel}>💀 Km Muertos</Text>
                  <Text style={[styles.statValue, { color: COLORS.warning }]}>{(summary.kmMuertos || 0)} km</Text>
                </View>
              </>
            )}
            <View style={styles.divider} />
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>🟢 Ingresos</Text>
              <CurrencyText amount={summary.ingresos} style={[styles.statValue, { color: COLORS.success }]} />
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>🔴 Gastos</Text>
              <CurrencyText amount={summary.gastos} style={[styles.statValue, { color: COLORS.danger }]} />
            </View>
            <View style={styles.divider} />
            <View style={styles.statRow}>
              <Text style={[styles.statLabel, { fontWeight: 'bold' }]}>💰 Ganancia Neta</Text>
              <CurrencyText amount={summary.gananciaNeta} style={[styles.statValue, { fontSize: 22, color: COLORS.primary }]} />
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>📊 Rentabilidad/KM</Text>
              <CurrencyText amount={summary.rentabilidadPorKm} style={[styles.statValue, { fontSize: 16, color: COLORS.gray }]} />
            </View>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>Cerrar y Descansar 😴</Text>
          </TouchableOpacity>
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
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  modalSubtitle: {
    textAlign: "center",
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 20,
  },
  statsContainer: {
    width: "100%",
    backgroundColor: COLORS.light,
    borderRadius: 12,
    padding: 15,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  statLabel: {
    fontSize: 16,
    color: COLORS.dark,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  closeButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 12,
    elevation: 2,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
