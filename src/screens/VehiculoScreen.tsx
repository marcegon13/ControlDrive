// src/screens/VehiculoScreen.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, ScrollView } from "react-native";
import { CargaCombustible, Jornada, Mantenimiento, Billetera } from "../types";
import { formatearMoneda, formatearFechaHora } from "../utils";
import { COLORS } from "../theme/colors";
import { CurrencyText } from "../components/ui/CurrencyText";

interface VehiculoScreenProps {
  cargasCombustible: CargaCombustible[];
  jornadas: Jornada[];
  mantenimientos: Mantenimiento[];
  billeteras: Billetera[];
  hideBalances: boolean;
  handleOpenCargaCombustibleModal: () => void;
  handleDeleteCargaCombustible: (id: string) => void;
  handleStartJornada: (km: number) => void;
  handleEndJornada: (id: string, km: number) => void;
  handleSaveMantenimiento: (data: Omit<Mantenimiento, "id">) => void;
  handleDeleteMantenimiento: (id: string) => void;
}

type TabType = "jornadas" | "combustible" | "mantenimiento";

export const VehiculoScreen: React.FC<VehiculoScreenProps> = ({
  cargasCombustible,
  jornadas,
  mantenimientos,
  hideBalances,
  handleOpenCargaCombustibleModal,
  handleDeleteCargaCombustible,
  handleStartJornada,
  handleEndJornada,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("jornadas");
  const [kmInput, setKmInput] = useState("");

  const activeJornada = jornadas.find(j => !j.finalizada);

  const renderJornadas = () => (
    <View style={styles.tabContent}>
      {activeJornada ? (
        <View style={styles.activeCard}>
          <Text style={styles.activeCardTitle}>🚀 Jornada en Curso</Text>
          <Text style={styles.activeCardDetail}>Iniciada: {formatearFechaHora(activeJornada.fecha)}</Text>
          <Text style={styles.activeCardDetail}>KM Inicial: {activeJornada.kmInicio} km</Text>
          
          <View style={styles.inputRow}>
            <TextInput
              style={styles.kmInput}
              placeholder="KM Final"
              keyboardType="numeric"
              value={kmInput}
              onChangeText={setKmInput}
            />
            <TouchableOpacity 
              style={[styles.actionButton, { backgroundColor: COLORS.danger }]}
              onPress={() => {
                const km = parseInt(kmInput);
                if (km > activeJornada.kmInicio) {
                  handleEndJornada(activeJornada.id, km);
                  setKmInput("");
                } else {
                  alert("El KM final debe ser mayor al inicial");
                }
              }}
            >
              <Text style={styles.actionButtonText}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.activeCard}>
          <Text style={styles.activeCardTitle}>🏁 Sin Jornada Activa</Text>
          <Text style={styles.activeCardDetail}>Registra tu kilometraje para empezar.</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.kmInput}
              placeholder="KM Actual"
              keyboardType="numeric"
              value={kmInput}
              onChangeText={setKmInput}
            />
            <TouchableOpacity 
              style={[styles.actionButton, { backgroundColor: COLORS.success }]}
              onPress={() => {
                const km = parseInt(kmInput);
                if (km > 0) {
                  handleStartJornada(km);
                  setKmInput("");
                }
              }}
            >
              <Text style={styles.actionButtonText}>Iniciar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <FlatList
        data={[...jornadas].reverse()}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <View style={styles.rowBetween}>
              <Text style={styles.historyDate}>{formatearFechaHora(item.fecha)}</Text>
              <Text style={[styles.historyStatus, { color: item.finalizada ? COLORS.gray : COLORS.primary }]}>
                {item.finalizada ? "Finalizada" : "En curso"}
              </Text>
            </View>
            <View style={styles.rowBetween}>
              <Text style={styles.historyKM}>KM: {item.kmInicio} → {item.kmFin || "..."}</Text>
              {item.totalKm && <Text style={styles.historyTotal}>{item.totalKm} km Recorridos</Text>}
            </View>
          </View>
        )}
      />
    </View>
  );

  const renderCombustible = () => (
    <View style={styles.tabContent}>
      <TouchableOpacity
        style={styles.mainActionButton}
        onPress={handleOpenCargaCombustibleModal}
      >
        <Text style={styles.mainActionText}>➕ Registrar Carga</Text>
      </TouchableOpacity>
      
      <FlatList
        data={cargasCombustible.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.listItem, { borderLeftColor: COLORS.danger }]}>
            <View style={styles.rowBetween}>
              <Text style={styles.listTitle}>{item.estacion}</Text>
              <TouchableOpacity onPress={() => handleDeleteCargaCombustible(item.id)}>
                <Text style={styles.deleteButton}>🗑️</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowBetween}>
              <CurrencyText amount={item.total} hideValue={hideBalances} style={styles.listSubtitle} />
              <Text style={styles.listDetail}>{item.litros}L</Text>
            </View>
            <Text style={styles.listDate}>{formatearFechaHora(new Date(item.fecha))}</Text>
          </View>
        )}
      />
    </View>
  );

  const renderMantenimiento = () => (
    <View style={styles.tabContent}>
       <View style={styles.infoCard}>
         <Text style={styles.infoTitle}>🛠️ Próximamente</Text>
         <Text style={styles.infoText}>Estamos terminando de pulir el módulo de mantenimientos programados.</Text>
       </View>
       <FlatList
        data={mantenimientos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.listItem, { borderLeftColor: COLORS.secondary }]}>
             <Text style={styles.listTitle}>{item.descripcion}</Text>
             <View style={styles.rowBetween}>
                <CurrencyText amount={item.monto} hideValue={hideBalances} style={styles.listSubtitle} />
                <Text style={styles.listDetail}>{item.km} KM</Text>
             </View>
             <Text style={styles.listDate}>{formatearFechaHora(new Date(item.fecha))}</Text>
          </View>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === "jornadas" && styles.activeTab]} 
          onPress={() => setActiveTab("jornadas")}
        >
          <Text style={[styles.tabText, activeTab === "jornadas" && styles.activeTabText]}>🛣️ KM</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === "combustible" && styles.activeTab]} 
          onPress={() => setActiveTab("combustible")}
        >
          <Text style={[styles.tabText, activeTab === "combustible" && styles.activeTabText]}>⛽ Nafta</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === "mantenimiento" && styles.activeTab]} 
          onPress={() => setActiveTab("mantenimiento")}
        >
          <Text style={[styles.tabText, activeTab === "mantenimiento" && styles.activeTabText]}>🛠️ Service</Text>
        </TouchableOpacity>
      </View>

      {activeTab === "jornadas" && renderJornadas()}
      {activeTab === "combustible" && renderCombustible()}
      {activeTab === "mantenimiento" && renderMantenimiento()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    fontSize: 14,
    color: COLORS.gray,
    fontWeight: "600",
  },
  activeTabText: {
    color: COLORS.primary,
  },
  tabContent: {
    flex: 1,
    padding: 16,
  },
  activeCard: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  activeCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
    marginBottom: 8,
  },
  activeCardDetail: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },
  kmInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginRight: 10,
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  actionButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  historyItem: {
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  historyDate: {
    fontSize: 12,
    color: COLORS.gray,
  },
  historyStatus: {
    fontSize: 12,
    fontWeight: "bold",
  },
  historyKM: {
    fontSize: 16,
    color: COLORS.dark,
    marginTop: 4,
  },
  historyTotal: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  mainActionButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  mainActionText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  listItem: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 4,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.dark,
  },
  listSubtitle: {
    fontSize: 14,
    color: COLORS.gray,
  },
  listDetail: {
    fontSize: 12,
    color: COLORS.gray,
  },
  listDate: {
    fontSize: 11,
    color: "#95a5a6",
    marginTop: 4,
  },
  deleteButton: {
    fontSize: 18,
    color: COLORS.danger,
    marginLeft: 10,
  },
  infoCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.secondary,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: COLORS.gray,
    lineHeight: 20,
  },
});
