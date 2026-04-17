import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';

interface VoiceButtonProps {
    onPress: () => void;
    isListening: boolean;
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({ onPress, isListening }) => {
    return (
        <TouchableOpacity 
            style={[
                styles.container, 
                isListening ? styles.listening : styles.idle
            ]} 
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Ionicons 
                name={isListening ? "mic" : "mic-outline"} 
                size={32} 
                color="white" 
            />
            {isListening && (
                <View style={styles.ripple} />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 80, // Subido para evitar corte en pantalla
        right: 20, // Bottom Right corner, floating
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        zIndex: 999,
    },
    idle: {
        backgroundColor: COLORS.primary,
    },
    listening: {
        backgroundColor: COLORS.danger, // Red when recording
    },
    ripple: {
        position: 'absolute',
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    }
});
