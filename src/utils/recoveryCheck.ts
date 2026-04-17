// Script de recuperación de emergencia
import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkStorageData = async () => {
    try {
        console.log("=== VERIFICANDO DATOS EN ASYNCSTORAGE ===");

        const keys = [
            "@billeteras",
            "@registrosDiarios",
            "@cargasCombustible",
            "@transactions",
            "@jornadas",
            "@mantenimientos",
            "@vehicleProfile",
            "@settings",
            "@first_run_date"
        ];

        for (const key of keys) {
            const value = await AsyncStorage.getItem(key);
            if (value) {
                console.log(`✅ ${key}: ${value.substring(0, 100)}...`);
            } else {
                console.log(`❌ ${key}: VACÍO`);
            }
        }

        // Intentar recuperar TODAS las keys
        const allKeys = await AsyncStorage.getAllKeys();
        console.log("\n=== TODAS LAS KEYS EN STORAGE ===");
        console.log(allKeys);

    } catch (error) {
        console.error("Error verificando storage:", error);
    }
};
