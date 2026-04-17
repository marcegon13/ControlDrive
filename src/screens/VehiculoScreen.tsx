// src/screens/VehiculoScreen.tsx
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, ScrollView, Alert, Vibration } from "react-native";
import { calculateTripCost } from "../utils/calculator";
import { CargaCombustible, Jornada, Mantenimiento, Billetera, VehicleProfile, RegistroDiario, Transaction } from "../types";
import { formatearMoneda, formatearFechaHora } from "../utils";
import { COLORS } from "../theme/colors";
import { CurrencyText } from "../components/ui/CurrencyText";
import { Switch } from "react-native";

import { LocationManager } from "../services/locationManager";

interface VehiculoScreenProps {
  cargasCombustible: CargaCombustible[];
  jornadas: Jornada[];
  mantenimientos: Mantenimiento[];
  billeteras: Billetera[];
  registrosDiarios: RegistroDiario[]; // Added for Guardian
  transactions: Transaction[]; // Added for Guardian
  hideBalances: boolean;
  vehicleProfile: VehicleProfile;
  onUpdateProfile: (profile: VehicleProfile) => void;
  handleOpenCargaCombustibleModal: () => void;
  handleDeleteCargaCombustible: (id: string) => void;
  handleStartJornada: (km: number) => void;
  handleEndJornada: (id: string, km: number) => void;
  handleCancelJornada: (id: string) => void;
  handleViewJornada: (jornada: Jornada) => void;
  handleSaveMantenimiento: (data: Omit<Mantenimiento, "id">) => void;
  handleDeleteMantenimiento: (id: string) => void;
  handleOpenMantenimientoModal: () => void;
}

type TabType = "jornadas" | "combustible" | "mantenimiento" | "perfil" | "calculadora";

export const VehiculoScreen: React.FC<VehiculoScreenProps> = ({
  cargasCombustible,
  jornadas,
  mantenimientos,
  billeteras,
  registrosDiarios,
  transactions,
  hideBalances,
  handleOpenCargaCombustibleModal,
  handleDeleteCargaCombustible,
  handleStartJornada,
  handleEndJornada,
  handleCancelJornada,
  handleViewJornada,
  handleSaveMantenimiento,
  handleDeleteMantenimiento,
  vehicleProfile,
  onUpdateProfile,
  handleOpenMantenimientoModal,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("jornadas");
  const [kmInput, setKmInput] = useState("");
  const [isEnding, setIsEnding] = useState(false);

  // Calculator State
  const [calcDistance, setCalcDistance] = useState("");
  const [calcPrice, setCalcPrice] = useState("");
  const [isCityTraffic, setIsCityTraffic] = useState(false);
  const [estimatedResult, setEstimatedResult] = useState<{ cost: number, litros: number } | null>(null);

  // Auto-fill price from last charge
  useEffect(() => {
    if (cargasCombustible.length > 0) {
      const lastCharge = cargasCombustible.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())[0];
      if (lastCharge && lastCharge.litros > 0) {
        const price = lastCharge.total / lastCharge.litros;
        setCalcPrice(price.toFixed(0));
      }
    }
  }, [cargasCombustible]);

  // Recalculate when inputs change
  useEffect(() => {
    if (calcDistance && calcPrice && vehicleProfile) {
      const dist = parseFloat(calcDistance);
      const price = parseFloat(calcPrice);
      if (!isNaN(dist) && !isNaN(price)) {
        const result = calculateTripCost(dist, price, vehicleProfile, isCityTraffic);
        setEstimatedResult({ cost: result.estimatedCost, litros: result.estimatedLitros });
      }
    } else {
      setEstimatedResult(null);
    }
  }, [calcDistance, calcPrice, isCityTraffic, vehicleProfile]);

  // GPS Tracking State
  const [gpsDistance, setGpsDistance] = useState(0);

  const activeJornada = jornadas.find(j => !j.finalizada);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeJornada) {
      // Resume tracking if needed (in case app was restarted)
      LocationManager.requestPermissions().then(granted => {
        if (granted) LocationManager.startTracking(false);
      });

      // Poll GPS distance every 5 seconds
      const fetchGps = async () => {
        const dist = await LocationManager.getCurrentDistance();
        setGpsDistance(dist);
      };
      fetchGps(); // Initial fetch
      interval = setInterval(fetchGps, 5000);
    }
    return () => clearInterval(interval);
  }, [activeJornada]);

  const processEndJornada = () => {
    if (!activeJornada) return;
    const manualKm = parseInt(kmInput);
    const estimatedKm = Math.floor(activeJornada.kmInicio + gpsDistance);

    if (manualKm > 0) {
      if (manualKm > activeJornada.kmInicio) {
        setIsEnding(true);
        Promise.resolve(handleEndJornada(activeJornada.id, manualKm))
          .finally(() => {
            setIsEnding(false);
            setKmInput("");
          });
      } else {
        Alert.alert("Error", "El KM final debe ser mayor al inicial.");
      }
    } else if (gpsDistance > 0) {
      Alert.alert(
        "Finalizar con GPS",
        `¿Cerrar jornada con ${estimatedKm} km? (Calculado por GPS)`,
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Confirmar",
            onPress: () => {
              setIsEnding(true);
              Promise.resolve(handleEndJornada(activeJornada.id, estimatedKm))
                .finally(() => {
                  setIsEnding(false);
                  setKmInput("");
                });
            }
          }
        ]
      );
    } else {
      Alert.alert("Aviso", "Ingresa el KM final o espera a que el GPS calcule la distancia. (Asegúrate de tener buena señal)");
    }
  };

  const renderItem = ({ item }: { item: Jornada }) => (
    <TouchableOpacity
      style={styles.historyItem}
      onPress={() => handleViewJornada(item)}
    >
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
      {item.finalizada && <Text style={{ fontSize: 10, color: COLORS.primary, marginTop: 5, textAlign: 'right' }}>Ver Resumen 📊</Text>}
    </TouchableOpacity>
  );

  const renderJornadas = () => (
    <View style={styles.tabContent}>
      {activeJornada ? (
        <View style={styles.activeCard}>
          <Text style={styles.activeCardTitle}>🚀 Jornada en Curso</Text>
          <Text style={styles.activeCardDetail}>Iniciada: {formatearFechaHora(activeJornada.fecha)}</Text>
          <Text style={styles.activeCardDetail}>KM Inicial: {activeJornada.kmInicio} km</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ fontSize: 12, color: COLORS.success }}>📡 GPS Activo: {gpsDistance.toFixed(2)} km recorridos</Text>
          </View>

          <View style={styles.inputRow}>
            <TextInput
              style={styles.kmInput}
              placeholder="KM Final"
              keyboardType="numeric"
              value={kmInput}
              onChangeText={setKmInput}
            />
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: isEnding ? COLORS.gray : COLORS.danger }]}
              disabled={isEnding}
              onPress={() => {
                Vibration.vibrate(10); // Haptic feedback
                if (isEnding) return;

                // --- GUARDIAN DE CIERRE ---
                const ingresosJornada = registrosDiarios.filter(r => new Date(r.fecha) >= new Date(activeJornada.fecha));
                // Only warn if GPS moves (>0.5km) AND no money entered
                if (gpsDistance > 0.5 && ingresosJornada.length === 0) {
                  Alert.alert(
                    "⚠️ ¿Cargaste tus viajes?",
                    "El GPS registró movimiento pero no anotaste ganancias de Apps (Uber/Didi). Si cierras ahora, no entrarán en este reporte.",
                    [
                      { text: "Cancelar y Cargar", style: "cancel" },
                      {
                        text: "Cerrar Igual",
                        style: "destructive",
                        onPress: () => processEndJornada()
                      }
                    ]
                  );
                  return;
                }

                processEndJornada();
              }}
            >
              <Text style={styles.actionButtonText}>{isEnding ? "Finalizando..." : "Finalizar"}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{ marginTop: 10, alignSelf: 'flex-start', padding: 5, backgroundColor: '#e9f7ef', borderRadius: 5 }}
            onPress={() => {
              const estimatedKm = Math.floor(activeJornada.kmInicio + gpsDistance);
              setKmInput(estimatedKm.toString());
            }}
          >
            <Text style={{ color: COLORS.success, fontSize: 12, fontWeight: 'bold' }}>✨ Usar sugerencia GPS: {Math.floor(activeJornada.kmInicio + gpsDistance)} km</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 15, alignSelf: 'center' }}
            onPress={() => {
              Alert.alert(
                "Cancelar Jornada",
                "¿Estás seguro de abortar? Se perderán los datos del GPS actual.",
                [
                  { text: "No", style: "cancel" },
                  {
                    text: "Sí, Abortar",
                    style: "destructive",
                    onPress: () => handleCancelJornada(activeJornada.id)
                  }
                ]
              );
            }}
          >
            <Text style={{ color: COLORS.danger, fontSize: 14, textDecorationLine: 'underline' }}>❌ Cancelar/Abortar Jornada</Text>
          </TouchableOpacity>
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
                Vibration.vibrate(10);
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
        renderItem={renderItem}
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
      <TouchableOpacity
        style={styles.mainActionButton}
        onPress={handleOpenMantenimientoModal}
      >
        <Text style={styles.mainActionText}>➕ Registrar Service</Text>
      </TouchableOpacity>

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



  const renderProfile = () => (
    <ScrollView style={styles.tabContent}>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>🚘 Perfil del Vehículo</Text>
        <Text style={styles.infoText}>Configura los detalles de tu auto para mejorar el cálculo de costos y consumo.</Text>
      </View>

      <View style={styles.activeCard}>
        <Text style={styles.activeCardTitle}>Detalles Técnicos</Text>

        <Text style={styles.label}>Marca</Text>
        <TextInput
          style={styles.input}
          value={vehicleProfile?.brand}
          placeholder="Ej: Fiat"
          onChangeText={(text) => onUpdateProfile({ ...vehicleProfile, brand: text })}
        />

        <Text style={styles.label}>Modelo</Text>
        <TextInput
          style={styles.input}
          value={vehicleProfile?.model}
          placeholder="Ej: Cronos"
          onChangeText={(text) => onUpdateProfile({ ...vehicleProfile, model: text })}
        />

        <Text style={styles.label}>Año</Text>
        <TextInput
          style={styles.input}
          value={vehicleProfile?.year}
          placeholder="Ej: 2023"
          keyboardType="numeric"
          onChangeText={(text) => onUpdateProfile({ ...vehicleProfile, year: text })}
        />

        <Text style={styles.label}>Motor (Cilindrada)</Text>
        <View style={styles.rowBetween}>
          {["1.0", "1.4", "1.6", "2.0"].map((eng) => (
            <TouchableOpacity
              key={eng}
              style={[styles.chip, vehicleProfile?.engineDisplacement === eng && styles.chipActive]}
              onPress={() => onUpdateProfile({ ...vehicleProfile, engineDisplacement: eng })}
            >
              <Text style={[styles.chipText, vehicleProfile?.engineDisplacement === eng && styles.chipTextActive]}>{eng}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Combustible Principal</Text>
        <View style={styles.rowBetween}>
          {["nafta", "gnc", "diesel"].map((fuel) => (
            <TouchableOpacity
              key={fuel}
              style={[styles.chip, vehicleProfile?.fuelType === fuel && styles.chipActive]}
              onPress={() => onUpdateProfile({ ...vehicleProfile, fuelType: fuel as any })}
            >
              <Text style={[styles.chipText, vehicleProfile?.fuelType === fuel && styles.chipTextActive]}>{fuel.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Transmisión</Text>
        <View style={styles.rowBetween}>
          {["manual", "automatica"].map((trans) => (
            <TouchableOpacity
              key={trans}
              style={[styles.chip, vehicleProfile?.transmission === trans && styles.chipActive]}
              onPress={() => onUpdateProfile({ ...vehicleProfile, transmission: trans })}
            >
              <Text style={[styles.chipText, vehicleProfile?.transmission === trans && styles.chipTextActive]}>
                {trans === "manual" ? "Manual" : "Automática"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={[styles.rowBetween, { marginTop: 20, borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 15 }]}>
          <Text style={styles.label}>Aire Acondicionado (Modo Verano)</Text>
          <Switch
            value={vehicleProfile?.acEnabled}
            onValueChange={(val) => onUpdateProfile({ ...vehicleProfile, acEnabled: val })}
            trackColor={{ false: "#767577", true: COLORS.primary }}
          />
        </View>
        <Text style={{ fontSize: 10, color: COLORS.gray }}>Activar esto sumará un +10% al cálculo de costo estimado.</Text>
      </View>
    </ScrollView>
  );

  const renderCalculator = () => (
    <ScrollView style={styles.tabContent}>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>🧮 Calculadora Predictiva</Text>
        <Text style={styles.infoText}>Estima cuánto gastarás en tu próximo viaje según tu perfil.</Text>
      </View>

      <View style={styles.activeCard}>
        <Text style={styles.label}>Distancia a Recorrer (KM)</Text>
        <TextInput
          style={styles.input}
          value={calcDistance}
          placeholder="Ej: 15"
          keyboardType="numeric"
          onChangeText={setCalcDistance}
        />

        <Text style={styles.label}>Precio Combustible ($/Litro)</Text>
        <TextInput
          style={styles.input}
          value={calcPrice}
          placeholder="Ej: 900"
          keyboardType="numeric"
          onChangeText={setCalcPrice}
        />

        <View style={[styles.rowBetween, { marginTop: 20 }]}>
          <Text style={styles.label}>Tráfico Intenso (Ciudad)</Text>
          <Switch
            value={isCityTraffic}
            onValueChange={setIsCityTraffic}
            trackColor={{ false: "#767577", true: COLORS.warning }}
          />
        </View>
        <Text style={{ fontSize: 10, color: COLORS.gray, marginBottom: 20 }}>Reduce rendimiento un 15%.</Text>

        {estimatedResult && (
          <View style={{ backgroundColor: COLORS.light, padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 16, color: COLORS.gray }}>Costo Estimado</Text>
            <CurrencyText amount={estimatedResult.cost} style={{ fontSize: 32, fontWeight: 'bold', color: COLORS.primary, marginVertical: 5 }} />
            <Text style={{ fontSize: 14, color: COLORS.dark }}>⛽ {estimatedResult.litros} Litros necesarios</Text>
            {vehicleProfile?.acEnabled && <Text style={{ fontSize: 12, color: COLORS.danger, marginTop: 5 }}>❄️ Incluye recargo por A/C activo</Text>}
          </View>
        )}
      </View>
    </ScrollView>
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
        <TouchableOpacity
          style={[styles.tab, activeTab === "perfil" && styles.activeTab]}
          onPress={() => setActiveTab("perfil")}
        >
          <Text style={[styles.tabText, activeTab === "perfil" && styles.activeTabText]}>🚘 Mi Auto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "calculadora" && styles.activeTab]}
          onPress={() => setActiveTab("calculadora")}
        >
          <Text style={[styles.tabText, activeTab === "calculadora" && styles.activeTabText]}>🧮 Calc</Text>
        </TouchableOpacity>
      </View>

      {activeTab === "jornadas" && renderJornadas()}
      {activeTab === "combustible" && renderCombustible()}
      {activeTab === "mantenimiento" && renderMantenimiento()}
      {activeTab === "perfil" && renderProfile()}
      {activeTab === "calculadora" && renderCalculator()}
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
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#eee',
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: COLORS.primary,
  },
  chipText: {
    color: COLORS.dark,
    fontSize: 14,
  },
  chipTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
