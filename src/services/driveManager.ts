// src/services/driveManager.ts
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';

const DRIVE_API_URL = 'https://www.googleapis.com/drive/v3/files';
const UPLOAD_API_URL = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';

export const DriveManager = {
    async configure() {
        try {
            GoogleSignin.configure({
                scopes: ['https://www.googleapis.com/auth/drive.appdata'],
            });
            console.log("Google Sign-In Configurado");
        } catch (e) {
            console.error("Error confirmando Google Signin", e);
        }
    },

    async signIn() {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const tokens = await GoogleSignin.getTokens();
            return tokens.accessToken;
        } catch (error: any) {
            console.error('Error Google Sign-In:', error);
            console.error('Error Google Sign-In:', error);
            const errorDetail = JSON.stringify(error);
            Alert.alert('Error Google', `No se pudo iniciar sesión.\nDetalle: ${error.code || error.message || errorDetail}`);
            return null;
        }
    },

    async findBackupFile(accessToken: string) {
        try {
            const response = await fetch(`${DRIVE_API_URL}?spaces=appDataFolder&q=name='ControlDriverBackup.json'`, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            const data = await response.json();
            return data.files && data.files.length > 0 ? data.files[0] : null;
        } catch (error) {
            console.error('Error buscando backup:', error);
            return null;
        }
    },

    async uploadBackup(accessToken: string, jsonData: string) {
        try {
            const existingFile = await this.findBackupFile(accessToken);

            const metadata: any = {
                name: 'ControlDriverBackup.json',
            };

            if (!existingFile) {
                metadata.parents = ['appDataFolder'];
            }

            const boundary = 'foo_bar_baz';
            const body =
                `--${boundary}\r\n` +
                `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
                `${JSON.stringify(metadata)}\r\n` +
                `--${boundary}\r\n` +
                `Content-Type: application/json\r\n\r\n` +
                `${jsonData}\r\n` +
                `--${boundary}--`;

            const url = existingFile
                ? `https://www.googleapis.com/upload/drive/v3/files/${existingFile.id}?uploadType=multipart`
                : UPLOAD_API_URL;

            const response = await fetch(url, {
                method: existingFile ? 'PATCH' : 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': `multipart/related; boundary=${boundary}`,
                },
                body: body,
            });

            if (response.ok) {
                Alert.alert('✅ Éxito', 'Copia de seguridad guardada en Google Drive.');
                return true;
            } else {
                const errorText = await response.text();
                console.error('Error subiendo backup:', errorText);
                throw new Error(`Status ${response.status}: ${errorText}`);
            }
        } catch (error: any) {
            console.error('Error backup exception:', error);
            const msg = error instanceof Error ? error.message : JSON.stringify(error);
            Alert.alert('❌ Error', `No se pudo realizar la copia de seguridad.\nDetalle: ${msg}`);
            return false;
        }
    }
};
