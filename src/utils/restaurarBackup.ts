import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants';

/**
 * Restaura datos desde un JSON completo de backup
 * Úsalo en Configuración → Restaurar desde JSON manual
 */
export const restaurarDesdeJSON = async (jsonString: string): Promise<boolean> => {
    try {
        const backup = JSON.parse(jsonString);

        // Guardar cada sección
        if (backup.billeteras) {
            await AsyncStorage.setItem(STORAGE_KEYS.BILLETERAS, JSON.stringify(backup.billeteras));
        }

        if (backup.registrosDiarios) {
            await AsyncStorage.setItem(STORAGE_KEYS.REGISTROS_DIARIOS, JSON.stringify(backup.registrosDiarios));
        }

        if (backup.cargasCombustible) {
            await AsyncStorage.setItem(STORAGE_KEYS.CARGAS, JSON.stringify(backup.cargasCombustible));
        }

        if (backup.transactions) {
            await AsyncStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(backup.transactions));
        }

        if (backup.jornadas) {
            await AsyncStorage.setItem(STORAGE_KEYS.JORNADAS, JSON.stringify(backup.jornadas));
        }

        if (backup.mantenimientos) {
            await AsyncStorage.setItem(STORAGE_KEYS.MANTENIMIENTOS, JSON.stringify(backup.mantenimientos));
        }

        if (backup.proSettings) {
            const settings = {
                isPro: backup.proSettings.isPro || false,
                hideBalances: backup.proSettings.hideBalances || false,
                weeklyGoal: 0,
                biometricEnabled: backup.proSettings.biometricEnabled || false
            };
            await AsyncStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));

            // Guardar vehicleProfile por separado
            if (backup.proSettings.vehicleProfile) {
                await AsyncStorage.setItem(STORAGE_KEYS.VEHICLE_PROFILE, JSON.stringify(backup.proSettings.vehicleProfile));
            }
        }

        console.log('✅ Datos restaurados exitosamente');
        return true;
    } catch (error) {
        console.error('❌ Error restaurando datos:', error);
        return false;
    }
};

// JSON de backup del usuario
export const BACKUP_MARCELO_13_ENE_2026 = `{
  "billeteras": [
    {
      "id": "1",
      "nombre": "Efectivo",
      "saldo": 181142,
      "color": "#2ecc71",
      "icono": "💵"
    },
    {
      "id": "2",
      "nombre": "Tarjetas/Plataforma",
      "saldo": 918593,
      "color": "#3498db",
      "icono": "💳"
    },
    {
      "id": "3",
      "nombre": "Billeteras Virtuales",
      "saldo": -14070,
      "color": "#f1c40f",
      "icono": "📲"
    }
  ],
  "registrosDiarios": [
    {
      "app": "Didi",
      "efectivo": 23455,
      "tarjetas": 56723,
      "billeterasVirtuales": 0,
      "total": 80178,
      "fecha": "2025-12-01T15:00:00.000Z",
      "id": "1766194456202"
    },
    {
      "app": "Didi",
      "efectivo": 9055,
      "tarjetas": 15095,
      "billeterasVirtuales": 0,
      "total": 24150,
      "fecha": "2025-12-02T15:00:00.000Z",
      "id": "1766194492636"
    },
    {
      "app": "Didi",
      "efectivo": 35140,
      "tarjetas": 38379,
      "billeterasVirtuales": 0,
      "total": 73519,
      "fecha": "2025-12-03T15:00:00.000Z",
      "id": "1766194537447"
    },
    {
      "app": "Didi",
      "efectivo": 30837,
      "tarjetas": 50566,
      "billeterasVirtuales": 0,
      "total": 81403,
      "fecha": "2025-12-04T15:00:00.000Z",
      "id": "1766194672590"
    },
    {
      "app": "Didi",
      "efectivo": 20944,
      "tarjetas": 40088,
      "billeterasVirtuales": 0,
      "total": 61032,
      "fecha": "2025-12-05T15:00:00.000Z",
      "id": "1766194706796"
    },
    {
      "app": "Didi",
      "efectivo": 16292,
      "tarjetas": 0,
      "billeterasVirtuales": 0,
      "total": 16292,
      "fecha": "2025-12-06T15:00:00.000Z",
      "id": "1766194813086"
    },
    {
      "app": "Didi",
      "efectivo": 41949,
      "tarjetas": 56345,
      "billeterasVirtuales": 0,
      "total": 98294,
      "fecha": "2025-12-10T15:00:00.000Z",
      "id": "1766201727178"
    },
    {
      "app": "Didi",
      "efectivo": 29119,
      "tarjetas": 45319,
      "billeterasVirtuales": 0,
      "total": 74438,
      "fecha": "2025-12-11T15:00:00.000Z",
      "id": "1766201954562"
    },
    {
      "app": "Didi",
      "efectivo": 29668,
      "tarjetas": 70474,
      "billeterasVirtuales": 0,
      "total": 100142,
      "fecha": "2025-12-12T15:00:00.000Z",
      "id": "1766202000910"
    },
    {
      "app": "Didi",
      "efectivo": 12570,
      "tarjetas": 27560,
      "billeterasVirtuales": 0,
      "total": 40130,
      "fecha": "2025-12-15T15:00:00.000Z",
      "id": "1766202073607"
    },
    {
      "app": "Didi",
      "efectivo": 11935,
      "tarjetas": 10253,
      "billeterasVirtuales": 0,
      "total": 22188,
      "fecha": "2025-12-16T15:00:00.000Z",
      "id": "1766202129929"
    },
    {
      "app": "Didi",
      "efectivo": 38182,
      "tarjetas": 34292,
      "billeterasVirtuales": 0,
      "total": 72474,
      "fecha": "2025-12-17T15:00:00.000Z",
      "id": "1766202176816"
    },
    {
      "app": "Didi",
      "efectivo": 19374,
      "tarjetas": 70103,
      "billeterasVirtuales": 0,
      "total": 89477,
      "fecha": "2025-12-18T15:00:00.000Z",
      "id": "1766202249034"
    },
    {
      "app": "Didi",
      "efectivo": 43148,
      "tarjetas": 54134,
      "billeterasVirtuales": 0,
      "total": 97282,
      "fecha": "2025-12-19T15:00:00.000Z",
      "id": "1766202338877"
    },
    {
      "app": "Didi",
      "efectivo": 16540,
      "tarjetas": 40500,
      "billeterasVirtuales": 0,
      "total": 57040,
      "fecha": "2025-12-21T01:22:12.497Z",
      "id": "1766280176767"
    },
    {
      "app": "Didi",
      "efectivo": 0,
      "tarjetas": 46022,
      "billeterasVirtuales": 0,
      "total": 46022,
      "fecha": "2025-12-22T15:00:00.000Z",
      "id": "1766463740860"
    },
    {
      "app": "Didi",
      "efectivo": 44914,
      "tarjetas": 37371,
      "billeterasVirtuales": 0,
      "total": 82285,
      "fecha": "2025-12-25T01:55:33.611Z",
      "id": "1766627733611"
    },
    {
      "app": "Didi",
      "efectivo": 0,
      "tarjetas": 3230,
      "billeterasVirtuales": 6430,
      "total": 9660,
      "fecha": "2025-12-26T23:52:59.002Z",
      "id": "1766793179002"
    },
    {
      "app": "Didi",
      "efectivo": 18065,
      "tarjetas": 26995,
      "billeterasVirtuales": 0,
      "total": 45060,
      "fecha": "2025-12-30T20:11:42.526Z",
      "id": "1767125502526"
    },
    {
      "app": "Didi",
      "efectivo": 21700,
      "tarjetas": 27666,
      "billeterasVirtuales": 0,
      "total": 49366,
      "fecha": "2025-12-31T03:17:50.636Z",
      "id": "1767151070636"
    },
    {
      "app": "Didi",
      "efectivo": 36255,
      "tarjetas": 112208,
      "billeterasVirtuales": 0,
      "total": 148463,
      "fecha": "2026-01-01T02:34:04.977Z",
      "id": "1767234844977"
    },
    {
      "app": "Didi",
      "efectivo": 5000,
      "tarjetas": 20319,
      "billeterasVirtuales": 11800,
      "total": 37119,
      "fecha": "2026-01-05T00:19:30.480Z",
      "id": "1767572370480"
    },
    {
      "app": "Didi",
      "efectivo": 0,
      "tarjetas": 19071,
      "billeterasVirtuales": 3400,
      "total": 22471,
      "fecha": "2026-01-08T01:19:31.090Z",
      "id": "1767835171090"
    },
    {
      "app": "Didi",
      "efectivo": 20000,
      "tarjetas": 0,
      "billeterasVirtuales": 0,
      "total": 20000,
      "fecha": "2026-01-09T03:06:50.359Z",
      "id": "1767928010359"
    },
    {
      "app": "Didi",
      "efectivo": 1000,
      "tarjetas": 15880,
      "billeterasVirtuales": 12300,
      "total": 29180,
      "fecha": "2026-01-11T02:00:44.734Z",
      "id": "1768096844734"
    },
    {
      "app": "Didi",
      "efectivo": 0,
      "tarjetas": 0,
      "billeterasVirtuales": 38000,
      "total": 38000,
      "fecha": "2026-01-12T19:29:21.531Z",
      "id": "1768246161531"
    }
  ],
  "cargasCombustible": [
    {
      "estacion": "YPF",
      "total": 22000,
      "litros": 13.775,
      "precioPorLitro": 1692.31,
      "billeteraId": "3",
      "fecha": "2026-01-10T21:32:15.738Z",
      "id": "1768080799543"
    },
    {
      "estacion": "YPF",
      "total": 26000,
      "litros": 16,
      "precioPorLitro": 1625,
      "billeteraId": "1",
      "fecha": "2026-01-07T23:46:38.852Z",
      "id": "1767829626997"
    },
    {
      "estacion": "YPF",
      "total": 22000,
      "litros": 13.54,
      "precioPorLitro": 1624.82,
      "billeteraId": "3",
      "fecha": "2026-01-03T15:00:00.000Z",
      "id": "1767572291715"
    },
    {
      "estacion": "YPF",
      "total": 22000,
      "litros": 12.5,
      "precioPorLitro": 1595,
      "billeteraId": "3",
      "fecha": "2025-12-31T01:24:48.134Z",
      "id": "1767144344351"
    },
    {
      "estacion": "YPF",
      "total": 18000,
      "litros": 12.75,
      "precioPorLitro": 1595,
      "billeteraId": "1",
      "fecha": "2025-12-30T20:09:23.063Z",
      "id": "1767125393337"
    },
    {
      "estacion": "YPF",
      "total": 25000,
      "litros": 15.6,
      "precioPorLitro": 1602.56,
      "billeteraId": "1",
      "fecha": "2025-12-25T20:26:53.098Z",
      "id": "1766694496824"
    },
    {
      "estacion": "YPF",
      "total": 20000,
      "litros": 12.53,
      "precioPorLitro": 1596.17,
      "billeteraId": "3",
      "fecha": "2025-12-24T14:57:05.728Z",
      "id": "1766588251262"
    },
    {
      "estacion": "YPF",
      "total": 16000,
      "litros": 10,
      "precioPorLitro": 1600,
      "billeteraId": "1",
      "fecha": "2025-12-21T01:25:35.851Z",
      "id": "1766280349723"
    },
    {
      "estacion": "YPF",
      "total": 20000,
      "litros": 12.5,
      "precioPorLitro": 1600,
      "billeteraId": "1",
      "fecha": "2025-12-20T21:07:48.145Z",
      "id": "1766264915981"
    },
    {
      "estacion": "YPF",
      "total": 22000,
      "litros": 13.77,
      "precioPorLitro": 1597.68,
      "billeteraId": "1",
      "fecha": "2025-12-19T20:04:48.358Z",
      "id": "1766174711677"
    },
    {
      "estacion": "YPF",
      "total": 20000,
      "litros": 12,
      "precioPorLitro": 1666.67,
      "billeteraId": "1",
      "fecha": "2025-12-19T15:00:00.000Z",
      "id": "1766280730374"
    },
    {
      "estacion": "YPF",
      "total": 20000,
      "litros": 12,
      "precioPorLitro": 1666.67,
      "billeteraId": "1",
      "fecha": "2025-12-18T15:00:00.000Z",
      "id": "1766280709471"
    },
    {
      "estacion": "YPF",
      "total": 20000,
      "litros": 12,
      "precioPorLitro": 1666.67,
      "billeteraId": "1",
      "fecha": "2025-12-17T15:00:00.000Z",
      "id": "1766280684764"
    },
    {
      "estacion": "YPF",
      "total": 25000,
      "litros": 15,
      "precioPorLitro": 1666.67,
      "billeteraId": "1",
      "fecha": "2025-12-25T15:00:00.000Z",
      "id": "1766280660907"
    },
    {
      "estacion": "YPF",
      "total": 15000,
      "litros": 9.6,
      "precioPorLitro": 1666.67,
      "billeteraId": "1",
      "fecha": "2025-12-11T15:00:00.000Z",
      "id": "1766280579853"
    },
    {
      "estacion": "YPF",
      "total": 20000,
      "litros": 12,
      "precioPorLitro": 1666.67,
      "billeteraId": "1",
      "fecha": "2025-12-10T15:00:00.000Z",
      "id": "1766280551084"
    },
    {
      "estacion": "YPF",
      "total": 22000,
      "litros": 14,
      "precioPorLitro": 1571.43,
      "billeteraId": "1",
      "fecha": "2025-12-06T15:00:00.000Z",
      "id": "1766280523029"
    },
    {
      "estacion": "YPF",
      "total": 19000,
      "litros": 12,
      "precioPorLitro": 1583.33,
      "billeteraId": "1",
      "fecha": "2025-12-05T15:00:00.000Z",
      "id": "1766280445952"
    },
    {
      "estacion": "YPF",
      "total": 25000,
      "litros": 15,
      "precioPorLitro": 1666.67,
      "billeteraId": "1",
      "fecha": "2025-12-04T15:00:00.000Z",
      "id": "1766280386158"
    },
    {
      "estacion": "YPF",
      "total": 15000,
      "litros": 9.54,
      "precioPorLitro": 1572.33,
      "billeteraId": "1",
      "fecha": "2025-12-02T15:00:00.000Z",
      "id": "1766280335825"
    },
    {
      "estacion": "YPF",
      "total": 16000,
      "litros": 10,
      "precioPorLitro": 1600,
      "billeteraId": "1",
      "fecha": "2025-12-01T15:00:00.000Z",
      "id": "1766280306775"
    }
  ],
  "transactions": [],
  "jornadas": [
    {
      "id": "1766425391995",
      "fecha": "2025-12-22T17:43:11.995Z",
      "kmInicio": 1000,
      "finalizada": true,
      "kmFin": 1200,
      "totalKm": 200
    },
    {
      "id": "1767127822597",
      "fecha": "2025-12-30T20:50:22.597Z",
      "kmInicio": 160046,
      "finalizada": true,
      "kmFin": 160101,
      "totalKm": 55
    },
    {
      "id": "1767214062276",
      "fecha": "2025-12-31T20:47:42.276Z",
      "kmInicio": 160102,
      "finalizada": true,
      "kmFin": 160210,
      "totalKm": 108,
      "summary": {
        "duracionHoras": 4.84,
        "totalKm": 108,
        "ingresos": 0,
        "gastos": 0,
        "gananciaNeta": 0,
        "rentabilidadPorKm": 0
      },
      "fechaFin": "2026-01-01T01:38:10.708Z"
    },
    {
      "id": "1767928248343",
      "fecha": "2026-01-09T03:10:48.343Z",
      "kmInicio": 160400,
      "finalizada": true,
      "kmFin": 160407,
      "totalKm": 7,
      "summary": {
        "duracionHoras": 0.4,
        "totalKm": 7,
        "ingresos": 0,
        "gastos": 0,
        "gananciaNeta": 0,
        "rentabilidadPorKm": 0
      },
      "fechaFin": "2026-01-09T03:34:39.741Z"
    },
    {
      "id": "1768080816455",
      "fecha": "2026-01-10T21:33:36.455Z",
      "kmInicio": 160482,
      "finalizada": true,
      "kmFin": 160547,
      "totalKm": 65,
      "summary": {
        "duracionHoras": 4.45,
        "totalKm": 65,
        "ingresos": 29180,
        "gastos": 22000,
        "gananciaNeta": 7180,
        "rentabilidadPorKm": 110.46153846153847
      },
      "fechaFin": "2026-01-11T02:00:52.112Z"
    },
    {
      "id": "1768215393611",
      "fecha": "2026-01-12T10:56:33.611Z",
      "kmInicio": 160573,
      "finalizada": true,
      "kmFin": 160609,
      "totalKm": 36,
      "summary": {
        "duracionHoras": 8.55,
        "totalKm": 36,
        "ingresos": 38000,
        "gastos": 0,
        "gananciaNeta": 38000,
        "rentabilidadPorKm": 1055.5555555555557
      },
      "fechaFin": "2026-01-12T19:29:27.097Z"
    }
  ],
  "mantenimientos": [],
  "proSettings": {
    "isPro": true,
    "biometricEnabled": false,
    "hideBalances": false,
    "darkMode": false,
    "vehicleProfile": {
      "brand": "Honda",
      "model": "Fit ",
      "year": "2009",
      "engineDisplacement": "1.4",
      "fuelType": "nafta",
      "acEnabled": true
    }
  },
  "version": "1.0.0",
  "timestamp": "2026-01-13T15:27:45.503Z"
}`;
