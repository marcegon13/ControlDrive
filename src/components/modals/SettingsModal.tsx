// src/components/modals/SettingsModal.tsx
import React from "react";
import { Modal, View, Text, Switch, TouchableOpacity, StyleSheet, Alert, ScrollView, TextInput } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication';
import { COLORS } from "../../theme/colors";
import { ProSettings } from "../../types";

interface SettingsModalProps {
  visible: boolean;
  settings: ProSettings;
  onClose: () => void;
  onUpdateSettings: (newSettings: Partial<ProSettings>) => void;
  onCloudBackup: () => void;
  onManualBackup: () => void;
  onRestoreBackup: (json: string) => Promise<boolean | void>;
  onFactoryReset: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ 
  visible, settings, onClose, onUpdateSettings, onCloudBackup, onManualBackup, onRestoreBackup, onFactoryReset
}) => {
  const [restoreModalVisible, setRestoreModalVisible] = React.useState(false);
  const [restoreText, setRestoreText] = React.useState("");

  const handleRestoreSubmit = async () => {
    if (!restoreText.trim()) {
        Alert.alert("Error", "El campo está vacío");
        return;
    }
    const success = await onRestoreBackup(restoreText);
    if (success !== false) { // Assuming void or true means success
        setRestoreModalVisible(false);
        setRestoreText("");
        onClose();
    }
  };
  const handleToggleBiometric = async (value: boolean) => {
    if (value) {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!hasHardware || !isEnrolled) {
        Alert.alert(
          "No disponible", 
          "Tu dispositivo no tiene biometría configurada o no es compatible."
        );
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Confirma tu identidad para activar el acceso seguro",
        fallbackLabel: "Usar código",
      });

      if (result.success) {
        onUpdateSettings({ biometricEnabled: true });
      } else {
        Alert.alert("Error", "No se pudo verificar la identidad.");
      }
    } else {
      onUpdateSettings({ biometricEnabled: false });
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Configuración Pro</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{ width: '100%' }}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {/* SECCIÓN SEGURIDAD */}
            <View style={styles.section}>
              <Text style={styles.sectionLabel}>SEGURIDAD</Text>
              <View style={styles.settingItem}>
                <View style={styles.settingTextContent}>
                  <Text style={styles.settingLabel}>Acceso Biométrico</Text>
                  <Text style={styles.settingDescription}>Huella o rostro al abrir la app.</Text>
                </View>
                <Switch
                  value={settings.biometricEnabled}
                  onValueChange={handleToggleBiometric}
                  trackColor={{ false: "#767577", true: COLORS.primary }}
                />
              </View>
              <View style={styles.settingItem}>
                <View style={styles.settingTextContent}>
                  <Text style={styles.settingLabel}>Modo Incógnito</Text>
                  <Text style={styles.settingDescription}>Oculta saldos en las pantallas.</Text>
                </View>
                <Switch
                  value={settings.hideBalances}
                  onValueChange={(val) => onUpdateSettings({ hideBalances: val })}
                  trackColor={{ false: "#767577", true: COLORS.primary }}
                />
              </View>
            </View>

            {/* SECCIÓN NUBE */}
            <View style={styles.section}>
              <Text style={styles.sectionLabel}>SINCRONIZACIÓN (PRO)</Text>
              <View style={styles.infoCard}>
                <Text style={styles.infoText}>Protege tus datos financieros con una copia de seguridad en la nube (Google Drive).</Text>
                <TouchableOpacity 
                  style={styles.googleButton}
                  onPress={onCloudBackup}
                >
                  <Text style={styles.googleButtonText}>☁️ Respaldar en Google Drive</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.googleButton, { marginTop: 15, borderColor: COLORS.secondary }]}
                  onPress={onManualBackup}
                >
                  <Text style={[styles.googleButtonText, { color: COLORS.secondary }]}>📤 Copiar Datos (Emergencia)</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 10, color: COLORS.gray, marginTop: 5, textAlign: 'center' }}>
                  Usa esta opción para copiar tus datos y guardarlos en otra app (Notas, Email/WhatsApp) antes de reinstalar.
                </Text>

                <TouchableOpacity 
                  style={[styles.googleButton, { marginTop: 15, borderColor: '#9c27b0' }]}
                  onPress={() => setRestoreModalVisible(true)}
                >
                  <Text style={[styles.googleButtonText, { color: '#9c27b0' }]}>📥 Restaurar Datos (Pegar)</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* SECCIÓN DANGER ZONE */}
            <View style={[styles.section, { marginTop: 20, borderTopWidth: 1, borderTopColor: '#ffebee', paddingTop: 20 }]}>
              <Text style={[styles.sectionLabel, { color: '#d32f2f' }]}>ZONA DE PELIGRO</Text>
              <TouchableOpacity 
                style={[styles.googleButton, { borderColor: '#d32f2f', backgroundColor: '#ffebee' }]}
                onPress={onFactoryReset}
              >
                <Text style={[styles.googleButtonText, { color: '#d32f2f' }]}>🗑️ BORRAR TODOS LOS DATOS</Text>
              </TouchableOpacity>
            </View>

            {/* SECCIÓN PREFERENCIAS */}
            <View style={styles.section}>
              <Text style={styles.sectionLabel}>APARIENCIA</Text>
              <View style={styles.settingItem}>
                <View style={styles.settingTextContent}>
                  <Text style={styles.settingLabel}>Modo Oscuro</Text>
                  <Text style={styles.settingDescription}>Ideal para conducir de noche.</Text>
                </View>
                <Switch
                  value={settings.darkMode}
                  onValueChange={(val) => onUpdateSettings({ darkMode: val })}
                  trackColor={{ false: "#767577", true: COLORS.primary }}
                />
              </View>
            </View>

            <View style={[styles.infoCard, { marginTop: 10, backgroundColor: '#e8f5e9', borderColor: '#c8e6c9' }]}>
              <Text style={[styles.infoTitle, { color: '#2e7d32' }]}>🌟 Miembro Pro</Text>
              <Text style={styles.infoText}>
                Tienes acceso a todas las funciones premium de Control Driver.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* MODAL DE RESTAURACIÓN MANUAL */}
      <Modal visible={restoreModalVisible} animationType="slide" transparent>
          <View style={styles.modalOverlay}>
              <View style={[styles.modalContent, { height: '80%' }]}>
                  <Text style={styles.modalTitle}>Pegar Copia de Seguridad</Text>
                  <Text style={{color: COLORS.gray, marginBottom: 10}}>
                      Pega aquí el texto JSON que copiaste anteriormente.
                  </Text>
                  
                  <View style={{flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 15}}>
                    <ScrollView>
                        <TextInput 
                            multiline
                            placeholder="{ ... datos ... }"
                            value={restoreText}
                            onChangeText={setRestoreText}
                            style={{ padding: 10, minHeight: 200 }} 
                        />
                    </ScrollView>
                  </View>

                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <TouchableOpacity 
                          style={[styles.googleButton, {flex: 1, marginRight: 5, borderColor: COLORS.gray}]}
                          onPress={() => { setRestoreModalVisible(false); setRestoreText(""); }}
                      >
                          <Text style={[styles.googleButtonText, { color: COLORS.gray }]}>Cancelar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                          style={[styles.googleButton, {flex: 1, marginLeft: 5, backgroundColor: '#9c27b0', borderColor: '#9c27b0'}]}
                          onPress={handleRestoreSubmit}
                      >
                          <Text style={[styles.googleButtonText, { color: 'white' }]}>Restaurar</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
      </Modal>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: "85%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  closeButtonText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: "600",
  },
  section: {
    marginBottom: 25,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.gray,
    marginBottom: 10,
    letterSpacing: 1,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingTextContent: {
    flex: 1,
    marginRight: 10,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.dark,
  },
  settingDescription: {
    fontSize: 12,
    color: COLORS.gray,
  },
  infoCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 13,
    color: COLORS.dark,
    lineHeight: 18,
  },
  googleButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#4285F4',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  googleButtonText: {
    color: '#4285F4',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
