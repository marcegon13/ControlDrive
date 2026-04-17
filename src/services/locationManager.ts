// src/services/locationManager.ts
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants';

export const LOCATION_TASK_NAME = 'background-location-task';

// Función para calcular distancia entre dos puntos (haversine formula)
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; // Radio de la tierra en km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
}

// Definición de la tarea en segundo plano
// NOTA: Debe llamarse en el scope global (fuera de componentes)
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }: any) => {
    if (error) {
        console.error('Error en tarea de ubicación:', error);
        return;
    }
    if (data) {
        const { locations } = data;
        const newLocation = locations[0];

        try {
            // Obtener última ubicación y KM acumulado del almacenamiento
            const lastDataStr = await AsyncStorage.getItem('@temp_location_data');
            const lastData = lastDataStr ? JSON.parse(lastDataStr) : null;

            if (lastData) {
                const distance = getDistance(
                    lastData.coords.latitude,
                    lastData.coords.longitude,
                    newLocation.coords.latitude,
                    newLocation.coords.longitude
                );

                // Solo sumar si la distancia es significativa (>10 metros) pero razonable (<2km en un salto)
                if (distance > 0.01 && distance < 2) {
                    const currentKmStr = await AsyncStorage.getItem('@current_jornada_km');
                    const currentKm = currentKmStr ? parseFloat(currentKmStr) : 0;
                    const updatedKm = currentKm + distance;

                    await AsyncStorage.setItem('@current_jornada_km', updatedKm.toString());
                }
            }

            await AsyncStorage.setItem('@temp_location_data', JSON.stringify(newLocation));
        } catch (e) {
            console.error('Error procesando ubicación en background:', e);
        }
    }
});

export const LocationManager = {
    async requestPermissions() {
        const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
        if (foregroundStatus !== 'granted') return false;

        const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
        return backgroundStatus === 'granted';
    },

    async startTracking(resetData: boolean = true) {
        const isStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);
        if (isStarted) return;

        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
            accuracy: Location.Accuracy.Balanced,
            timeInterval: 10000, // 10 segundos
            distanceInterval: 10, // 10 metros
            foregroundService: {
                notificationTitle: "Control Driver activo",
                notificationBody: "Rastreando kilometraje en segundo plano",
                notificationColor: "#2ecc71",
            },
        });

        if (resetData) {
            await AsyncStorage.setItem('@current_jornada_km', '0');
            await AsyncStorage.removeItem('@temp_location_data');
        }
    },

    async stopTracking() {
        const isStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);
        if (isStarted) {
            await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
        }
        const finalKmStr = await AsyncStorage.getItem('@current_jornada_km');
        await AsyncStorage.removeItem('@temp_location_data');
        await AsyncStorage.removeItem('@current_jornada_km');
        return finalKmStr ? parseFloat(finalKmStr) : 0;
    },

    async getCurrentDistance() {
        const currentKmStr = await AsyncStorage.getItem('@current_jornada_km');
        return currentKmStr ? parseFloat(currentKmStr) : 0;
    }
};
