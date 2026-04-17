import crashlytics from '@react-native-firebase/crashlytics';
import remoteConfig from '@react-native-firebase/remote-config';
import { Alert, Linking, Platform } from 'react-native';
import Constants from 'expo-constants';

// --- Crashlytics ---

export const logError = (error: Error, context?: string) => {
    if (__DEV__) {
        console.error(`[${context || 'Error'}]`, error);
    } else {
        crashlytics().recordError(error, context);
    }
};

export const logMessage = (message: string) => {
    crashlytics().log(message);
};

export const setUserId = (userId: string) => {
    crashlytics().setUserId(userId);
};

export const setAttribute = (key: string, value: string) => {
    crashlytics().setAttribute(key, value);
};

// --- Remote Config (Force Update) ---

export const checkForceUpdate = async () => {
    // Logic disabled to prevent unexpected update prompts
};

// Helper to compare versions like "1.0.0" vs "1.0.2"
const isVersionLower = (current: string, minimum: string): boolean => {
    const v1 = current.split('.').map(Number);
    const v2 = minimum.split('.').map(Number);

    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        const num1 = v1[i] || 0;
        const num2 = v2[i] || 0;
        if (num1 < num2) return true;
        if (num1 > num2) return false;
    }
    return false;
};
