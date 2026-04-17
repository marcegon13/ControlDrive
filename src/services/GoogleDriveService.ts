import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';

// Configuración inicial (se debe llamar en App.tsx o al inicio)
export const configureGoogleSignIn = () => {
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.file'], // Acceso a archivos creados por la app
        // webClientId: '', // Requerido solo si offlineAccess es true
        offlineAccess: false, // Fix: Evita error "requires server web ClientID"
    });
};

export const signInWithGoogle = async () => {
    try {
        configureGoogleSignIn(); // <--- Arreglo Definitivo para 'apiClient is null'
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        return userInfo;
    } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("Usuario canceló login");
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log("Login en proceso");
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            Alert.alert("Error", "Google Play Services no disponible");
        } else {
            console.error("Error Login Google", error);
            Alert.alert("Error Login", error.message);
        }
        return null;
    }
};

export const uploadBackupToDrive = async (jsonContent: string) => {
    try {
        // 1. Obtener Tokens
        const tokens = await GoogleSignin.getTokens();
        const accessToken = tokens.accessToken;

        // 2. Crear Metadata
        const metadata = {
            name: 'controldriver_backup.json',
            mimeType: 'application/json',
            // parents: ['appDataFolder'] // Descomentar para carpeta oculta estilo WhatsApp
        };

        // 3. Crear Multipart Body
        const boundary = 'foo_bar_baz';
        const delimiter = `\r\n--${boundary}\r\n`;
        const closeDelimiter = `\r\n--${boundary}--`;

        const body =
            delimiter +
            'Content-Type: application/json\r\n\r\n' +
            JSON.stringify(metadata) +
            delimiter +
            'Content-Type: application/json\r\n\r\n' +
            jsonContent +
            closeDelimiter;

        // 4. Upload Request
        const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': `multipart/related; boundary=${boundary}`,
            },
            body: body,
        });

        const result = await response.json();
        console.log("Upload Result:", result);

        if (response.ok) {
            return true;
        } else {
            console.error("Drive API Error:", result);
            throw new Error(result.error?.message || "Error subiendo archivo");
        }

    } catch (error: any) {
        console.error("Error Backup Drive:", error);
        Alert.alert("Error Backup", error.message);
        return false;
    }
};

export const restoreBackupFromDrive = async (): Promise<string | null> => {
    try {
        // 1. Auth & Token
        const tokens = await GoogleSignin.getTokens();
        const accessToken = tokens.accessToken;

        // 2. Buscar archivo
        const q = "name = 'controldriver_backup.json' and trashed = false";
        const searchUrl = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&orderBy=createdTime desc&pageSize=1`;

        const searchRes = await fetch(searchUrl, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        const searchData = await searchRes.json();

        if (searchData.files && searchData.files.length > 0) {
            const fileId = searchData.files[0].id;

            // 3. Descargar contenido
            const downloadUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`;
            const downloadRes = await fetch(downloadUrl, {
                headers: { 'Authorization': `Bearer ${accessToken}` }
            });

            const content = await downloadRes.text();
            return content;
        } else {
            Alert.alert("No encontrado", "No se encontró ningún archivo de respaldo.");
            return null;
        }

    } catch (error: any) {
        console.error("Error Restore Drive:", error);
        Alert.alert("Error Restaurando", error.message);
        return null;
    }
};
