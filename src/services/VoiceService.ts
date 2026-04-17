// VERSION DUMMY PARA COMPILAR SIN LIBRERÍA DE VOZ
// import Voice, { SpeechResultsEvent, SpeechErrorEvent } from '@react-native-voice/voice';

import * as Speech from 'expo-speech';

interface VoiceServiceProps {
    onSpeechStart?: () => void;
    onSpeechEnd?: () => void;
    onSpeechResults?: (results: string[]) => void;
    onSpeechError?: (e: any) => void;
}

class VoiceService {
    private callbacks: VoiceServiceProps = {};
    private isListening = false;

    constructor() {
        // Inicialización dummy
    }

    setCallbacks(callbacks: VoiceServiceProps) {
        this.callbacks = callbacks;
    }

    async startListening() {
        console.log("VoiceService: startListening (DUMMY - Librería desactivada)");
        // Simulamos acciones
        if (this.callbacks.onSpeechStart) this.callbacks.onSpeechStart();

        // Simulamos un error o finalización inmediata para que la UI no se quede pegada
        // Esto le avisa al usuario que use el teclado si mira los logs,
        // pero visualmente simplemente se cerrará el indicador de escucha.
        setTimeout(() => {
            if (this.callbacks.onSpeechEnd) this.callbacks.onSpeechEnd();
        }, 500);
    }

    async stopListening() {
        console.log("VoiceService: stopListening (DUMMY)");
        if (this.callbacks.onSpeechEnd) this.callbacks.onSpeechEnd();
    }

    speak(text: string) {
        // Expo Speech sí funciona, lo dejamos
        Speech.speak(text, { language: 'es-419' });
    }
}

export const voiceService = new VoiceService();
