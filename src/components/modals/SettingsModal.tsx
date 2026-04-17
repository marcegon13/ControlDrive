// src/components/modals/SettingsModal.tsx
import React from "react";
import { Modal, View, Text, Switch, TouchableOpacity, StyleSheet, Alert, ScrollView, TextInput, Linking } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication';
import { COLORS } from "../../theme/colors";
import { ProSettings } from "../../types";
import { BUILD_IS_ADMIN } from "../../constants";

interface SettingsModalProps {
  visible: boolean;
  settings: ProSettings;
  onClose: () => void;
  onUpdateSettings: (newSettings: Partial<ProSettings>) => void;
  onCloudBackup: () => void;
  onManualBackup: () => void;
  onRestoreBackup: (json: string) => Promise<boolean | void>;
  onCloudRestore: () => Promise<void>;
  onFactoryReset: () => void;
  onRecalcularSaldos: () => void;
  onVerDiagnostico: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  visible, settings, onClose, onUpdateSettings, onCloudBackup, onManualBackup, onRestoreBackup, onCloudRestore, onFactoryReset, onRecalcularSaldos, onVerDiagnostico
}) => {
  const [restoreModalVisible, setRestoreModalVisible] = React.useState(false);
  const [restoreText, setRestoreText] = React.useState("");

  const handleRestoreSubmit = async () => {
    if (!restoreText.trim()) {
      Alert.alert("Error", "El campo está vacío");
      return;
    }
    const success = await onRestoreBackup(restoreText);
    if (success !== false) {
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

  // --- LOGICA DE ACTIVACION PRO ---
  const [showProAuth, setShowProAuth] = React.useState(false);
  const [activationCode, setActivationCode] = React.useState("");
  const PRO_CODE = "NUBE2026";

  const handleTogglePro = (value: boolean) => {
    // Si es ADMIN, no dejar desactivar.
    if (BUILD_IS_ADMIN) {
      Alert.alert("Modo Admin", "Esta es una versión de administrador. No se puede desactivar el modo Pro.");
      return;
    }

    if (value) {
      setShowProAuth(true); // Pedir código para activar
    } else {
      onUpdateSettings({ isPro: false }); // Permitir desactivar libremente
    }
  };

  const verifyProCode = () => {
    if (activationCode.toUpperCase().trim() === PRO_CODE) {
      onUpdateSettings({ isPro: true });
      setShowProAuth(false);
      setActivationCode("");
      Alert.alert("¡Licencia Activada!", "Bienvenido al Modo Pro.");
    } else {
      Alert.alert("Acceso Denegado", "El código de licencia no es válido.");
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
            contentContainerStyle={{ paddingBottom: 40 }}
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
              <Text style={styles.sectionLabel}>RESPALDO AUTOMÁTICO GOOGLE DRIVE</Text>
              <View style={styles.infoCard}>
                <Text style={styles.infoText}>Guarda tus datos en tu cuenta de Google con un solo toque.</Text>

                <TouchableOpacity
                  style={[styles.googleButton, { marginTop: 15, borderColor: COLORS.primary, backgroundColor: '#e8f5e9' }]}
                  onPress={onCloudBackup}
                >
                  <Text style={[styles.googleButtonText, { color: COLORS.primary }]}>☁️ Guardar en Google Drive</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.googleButton, { marginTop: 10, borderColor: '#9c27b0', backgroundColor: '#f3e5f5' }]}
                  onPress={onCloudRestore}
                >
                  <Text style={[styles.googleButtonText, { color: '#9c27b0' }]}>📥 Recuperar Datos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.googleButton, { marginTop: 10, borderColor: '#ff9800', backgroundColor: '#fff3e0' }]}
                  onPress={onRecalcularSaldos}
                >
                  <Text style={[styles.googleButtonText, { color: '#ff9800' }]}>🔄 Recalcular Saldos</Text>
                </TouchableOpacity>

                {BUILD_IS_ADMIN && (
                  <View style={{ marginTop: 20, borderTopWidth: 1, borderColor: '#eee', paddingTop: 10 }}>
                    <Text style={{ fontSize: 10, color: COLORS.gray, marginBottom: 5 }}>Opciones de Administrador</Text>
                    <TouchableOpacity onPress={onManualBackup} style={{ padding: 5 }}>
                      <Text style={{ color: COLORS.secondary, fontSize: 12 }}>📤 Exportar Archivo (Manual)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRestoreModalVisible(true)} style={{ padding: 5 }}>
                      <Text style={{ color: '#9c27b0', fontSize: 12 }}>📥 Importar Texto/JSON (Manual)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onVerDiagnostico} style={{ padding: 5, marginTop: 10, borderTopWidth: 1, borderColor: '#ffebee', paddingTop: 10 }}>
                      <Text style={{ color: '#f44336', fontSize: 12, fontWeight: 'bold' }}>🔍 DEBUG: Ver Diagnóstico</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>

            {/* SECCIÓN METAS DE INGRESOS */}
            <View style={styles.section}>
              <Text style={styles.sectionLabel}>METAS DE INGRESOS</Text>
              <View style={styles.settingItem}>
                <View style={styles.settingTextContent}>
                  <Text style={styles.settingLabel}>Objetivo Semanal ($)</Text>
                  <Text style={styles.settingDescription}>Tu meta de facturación bruta por semana.</Text>
                </View>
                {!settings.isPro ? (
                  <TouchableOpacity onPress={() => handleTogglePro(true)}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: COLORS.secondary }}>DESBLOQUEAR 🔒</Text>
                  </TouchableOpacity>
                ) : (
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: '#ddd',
                      borderRadius: 8,
                      paddingVertical: 8,
                      paddingHorizontal: 12,
                      width: 120,
                      textAlign: 'right',
                      backgroundColor: '#f9f9f9',
                      fontSize: 16
                    }}
                    keyboardType="numeric"
                    placeholder="0"
                    value={settings.weeklyGoal ? settings.weeklyGoal.toString() : ""}
                    onChangeText={(t) => onUpdateSettings({ weeklyGoal: parseInt(t.replace(/[^0-9]/g, '')) || 0 })}
                  />
                )}
              </View>
            </View>

            {/* SECCION PRO */}
            <View style={[styles.infoCard, { marginTop: 10, backgroundColor: settings.isPro ? '#e8f5e9' : '#fff3e0', borderColor: settings.isPro ? '#c8e6c9' : '#ffe0b2', marginBottom: 20 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[styles.infoTitle, { color: settings.isPro ? '#2e7d32' : '#e65100' }]}>
                  {BUILD_IS_ADMIN ? "👑 Licencia Admin" : (settings.isPro ? "🌟 Miembro Pro" : "🔓 Modo Gratuito")}
                </Text>

                {/* Si es Admin, el switch NO se muestra */}
                {!BUILD_IS_ADMIN && (
                  <Switch
                    value={settings.isPro}
                    onValueChange={handleTogglePro}
                    trackColor={{ false: "#767577", true: "#2e7d32" }}
                  />
                )}
              </View>
              <Text style={styles.infoText}>
                {BUILD_IS_ADMIN
                  ? "Esta es una versión ilimitada de administrador. No requiere activación."
                  : (settings.isPro
                    ? "Tienes acceso a todas las funciones premium. ¡Gracias por tu apoyo!"
                    : "Viendo anuncios. Activa el interruptor para desbloquear funciones PRO y quitar publicidad.")
                }
              </Text>
            </View>

            {/* SECCIÓN SOPORTE */}
            <View style={styles.section}>
              <Text style={styles.sectionLabel}>AYUDA Y SOPORTE</Text>
              <TouchableOpacity 
                style={[styles.infoCard, { backgroundColor: '#f0f4f8' }]}
                onPress={() => {
                  const subject = encodeURIComponent("Soporte ControlDriver");
                  const body = encodeURIComponent("Hola! Necesito ayuda con...");
                  const url = `mailto:lanubecomputacion@gmail.com?subject=${subject}&body=${body}`;
                  Linking.openURL(url).catch(() => Alert.alert("Error", "No se pudo abrir la app de correo."));
                }}
              >
                <Text style={[styles.infoTitle, { color: '#007bff' }]}>📧 Contactar Soporte Técnico</Text>
                <Text style={styles.infoText}>¿Tenés problemas o sugerencias? Escribinos a lanubecomputacion@gmail.com</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>
      </View>

      {/* MODAL DE RESTAURACIÓN MANUAL */}
      <Modal visible={restoreModalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { height: '80%' }]}>
            <Text style={styles.modalTitle}>Restaurar Copia</Text>
            <Text style={{ color: COLORS.gray, marginBottom: 10 }}>
              Pega aquí el texto de tu copia de seguridad.
            </Text>

            <View style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 15 }}>
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

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={[styles.googleButton, { flex: 1, marginRight: 5, borderColor: COLORS.gray }]}
                onPress={() => { setRestoreModalVisible(false); setRestoreText(""); }}
              >
                <Text style={[styles.googleButtonText, { color: COLORS.gray }]}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.googleButton, { flex: 1, marginLeft: 5, backgroundColor: '#9c27b0', borderColor: '#9c27b0' }]}
                onPress={handleRestoreSubmit}
              >
                <Text style={[styles.googleButtonText, { color: 'white' }]}>Restaurar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* MODAL DE ACTIVACION PRO (SEGURIDAD) */}
      <Modal visible={showProAuth} animationType="fade" transparent>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { height: 'auto', paddingBottom: 40, borderTopLeftRadius: 20, borderTopRightRadius: 20 }]}>
            <Text style={[styles.modalTitle, { color: '#2e7d32', textAlign: 'center' }]}>💎 Activar Pro</Text>
            <Text style={{ color: COLORS.gray, marginBottom: 20, textAlign: 'center' }}>
              Introduce tu código de licencia para desbloquear.
            </Text>

            <TextInput
              style={{ borderWidth: 1, borderColor: '#2e7d32', borderRadius: 8, padding: 15, fontSize: 18, textAlign: 'center', marginBottom: 20, backgroundColor: '#e8f5e9' }}
              placeholder="CÓDIGO"
              value={activationCode}
              onChangeText={setActivationCode}
              autoCapitalize="characters"
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={[styles.googleButton, { flex: 1, marginRight: 5, borderColor: COLORS.gray }]}
                onPress={() => { setShowProAuth(false); setActivationCode(""); }}
              >
                <Text style={[styles.googleButtonText, { color: COLORS.gray }]}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.googleButton, { flex: 1, marginLeft: 5, backgroundColor: '#2e7d32', borderColor: '#2e7d32' }]}
                onPress={verifyProCode}
              >
                <Text style={[styles.googleButtonText, { color: 'white' }]}>ACTIVAR</Text>
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
    height: "90%",
    width: "100%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10
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
