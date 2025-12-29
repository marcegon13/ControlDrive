// App.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  Image,
} from "react-native";
import { LocaleConfig } from 'react-native-calendars';

// Hooks y Contexto
import { useAppState } from "./src/hooks/useAppState";
import { DriveManager } from "./src/services/driveManager";
// Componentes y Pantallas
import { DashboardScreen } from "./src/screens/DashboardScreen";
import { BilleterasScreen } from "./src/screens/BilleterasScreen";
import { VehiculoScreen } from "./src/screens/VehiculoScreen";
import { HistorialScreen } from "./src/screens/HistorialScreen";

// Modales
import { RegistroDiarioModal } from "./src/components/modals/RegistroDiarioModal";
import { CargaCombustibleModal } from "./src/components/modals/CargaCombustibleModal";
import { TransactionModal } from "./src/components/modals/TransactionModal";
import { SettingsModal } from "./src/components/modals/SettingsModal";

// Utils y Otros
import * as LocalAuthentication from 'expo-local-authentication';

// Temas y Constantes
import { COLORS } from "./src/theme/colors";

// Configuración de idioma para el calendario (Global)
LocaleConfig.locales['es'] = {
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.']
};
LocaleConfig.defaultLocale = 'es';

const App: React.FC = () => {
  const { state, actions } = useAppState();
  const [settingsModalVisible, setSettingsModalVisible] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    DriveManager.configure();
  }, []);

  React.useEffect(() => {
    if (!state.isLoading) {
      if (state.proSettings.biometricEnabled && !isAuthenticated) {
        handleBiometricAuth();
      } else {
        setIsAuthenticated(true);
      }
    }
  }, [state.isLoading, state.proSettings.biometricEnabled, isAuthenticated]);

  const handleBiometricAuth = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Acceso Seguro a Control Driver",
    });
    if (result.success) {
      setIsAuthenticated(true);
    } else {
      // Reintentar o salir? Por ahora reintentar con botón
    }
  };

  if (state.isLoading || !isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.light }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={{ marginTop: 10, color: COLORS.dark }}>
          {!isAuthenticated && state.proSettings.biometricEnabled 
            ? "Esperando autenticación..." 
            : "Cargando Control Driver..."}
        </Text>
        {!isAuthenticated && state.proSettings.biometricEnabled && (
          <TouchableOpacity 
            style={{ marginTop: 20, padding: 12, backgroundColor: COLORS.primary, borderRadius: 8 }}
            onPress={handleBiometricAuth}
          >
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>Reintentar Acceso</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  const renderScreen = () => {
    switch (state.currentScreen) {
      case "dashboard":
        return (
          <DashboardScreen
            registrosDiarios={state.registrosDiarios}
            cargasCombustible={state.cargasCombustible}
            billeteras={state.billeteras}
            transactions={state.transactions}
            hideBalances={state.proSettings.hideBalances}
            handleOpenModal={actions.handleOpenModal}
            handleOpenRegistroDiarioModal={() => actions.setRegistroDiarioModalVisible(true)}
            handleOpenCargaCombustibleModal={() => actions.setCargaCombustibleModalVisible(true)}
            handleExportData={actions.handleExportData}
          />
        );
      case "billeteras":
        return (
          <BilleterasScreen
            billeteras={state.billeteras}
            hideBalances={state.proSettings.hideBalances}
            handleOpenModal={actions.handleOpenModal}
          />
        );
      case "vehiculo":
        return (
          <VehiculoScreen
            cargasCombustible={state.cargasCombustible}
            jornadas={state.jornadas}
            mantenimientos={state.mantenimientos}
            billeteras={state.billeteras}
            hideBalances={state.proSettings.hideBalances}
            handleOpenCargaCombustibleModal={() => actions.setCargaCombustibleModalVisible(true)}
            handleDeleteCargaCombustible={actions.handleDeleteCargaCombustible}
            handleStartJornada={actions.handleStartJornada}
            handleEndJornada={actions.handleEndJornada}
            handleSaveMantenimiento={actions.handleSaveMantenimiento}
            handleDeleteMantenimiento={actions.handleDeleteMantenimiento}
          />
        );
      case "historial":
        return (
          <HistorialScreen
            registrosDiarios={state.registrosDiarios}
            cargasCombustible={state.cargasCombustible}
            transactions={state.transactions}
            hideBalances={state.proSettings.hideBalances}
            handleDeleteRegistroDiario={actions.handleDeleteRegistroDiario}
            handleDeleteCargaCombustible={actions.handleDeleteCargaCombustible}
            handleDeleteTransaction={actions.handleDeleteTransaction}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.dark} barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerActionLeft} 
          onPress={() => setSettingsModalVisible(true)}
        >
          <Text style={{ fontSize: 20 }}>⚙️</Text>
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
          <Image 
            source={require("./assets/icon.png")} 
            style={styles.headerLogo} 
            resizeMode="contain"
          />
          <Text style={styles.headerTitle}>Control Driver</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.headerAction} 
          onPress={() => actions.updateProSettings({ hideBalances: !state.proSettings.hideBalances })}
        >
          <Text style={{ fontSize: 20 }}>
            {state.proSettings.hideBalances ? "👁️‍🗨️" : "👁️"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Navigation */}
      <View style={styles.navigation}>
        {[
          { id: "dashboard", icon: "📊", label: "Dashboard" },
          { id: "billeteras", icon: "💰", label: "Billeteras" },
          { id: "vehiculo", icon: "🚗", label: "Vehículo" },
          { id: "historial", icon: "📋", label: "Historial" },
        ].map((nav) => (
          <TouchableOpacity
            key={nav.id}
            style={[
              styles.navButton,
              state.currentScreen === nav.id && styles.navButtonActive,
            ]}
            onPress={() => actions.setCurrentScreen(nav.id as any)}
          >
            <Text style={[styles.navText, state.currentScreen === nav.id && styles.navTextActive]}>
              {nav.icon}
            </Text>
            <Text style={[styles.navText, state.currentScreen === nav.id && styles.navTextActive]}>
              {nav.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contenido Principal */}
      <View style={styles.content}>{renderScreen()}</View>

      {/* Modales */}
      <RegistroDiarioModal
        modalVisible={state.registroDiarioModalVisible}
        handleCloseModal={() => actions.setRegistroDiarioModalVisible(false)}
        handleSaveRegistroDiario={actions.handleSaveRegistroDiario}
      />

      <CargaCombustibleModal
        modalVisible={state.cargaCombustibleModalVisible}
        billeteras={state.billeteras}
        handleCloseModal={() => actions.setCargaCombustibleModalVisible(false)}
        handleSaveCargaCombustible={actions.handleSaveCargaCombustible}
      />

      <TransactionModal
        modalVisible={state.transactionModalVisible}
        modalType={state.transactionModalType}
        selectedWalletId={state.selectedWalletId}
        billeteras={state.billeteras}
        handleCloseModal={actions.handleCloseTransactionModal}
        handleSaveTransaction={actions.handleSaveTransaction}
      />

      <SettingsModal
        visible={settingsModalVisible}
        settings={state.proSettings}
        onClose={() => setSettingsModalVisible(false)}
        onUpdateSettings={actions.updateProSettings}
        onCloudBackup={actions.handleCloudBackup}
        onManualBackup={actions.handleManualBackup}
        onRestoreBackup={actions.handleRestoreBackup}
        onFactoryReset={actions.handleFactoryReset}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark, 
  },
  header: {
    backgroundColor: COLORS.dark,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 15, 
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerAction: {
    position: "absolute",
    right: 20,
    bottom: 12,
  },
  headerActionLeft: {
    position: "absolute",
    left: 20,
    bottom: 12,
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLogo: {
    width: 25,

    height: 25,
    marginRight: 8,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  navigation: {
    flexDirection: "row",
    backgroundColor: "#34495e",
    paddingVertical: 10,
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  navButtonActive: {
    backgroundColor: COLORS.dark,
    borderRadius: 8,
    marginHorizontal: 2,
  },
  navText: {
    color: COLORS.lightGray,
    fontSize: 12,
    fontWeight: "500",
  },
  navTextActive: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
});

export default App;