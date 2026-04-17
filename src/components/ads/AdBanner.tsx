import React from 'react';
import { View, Text } from 'react-native';

// DUMMY NO-OP VERSION PARA COMPILAR
// import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

interface AdBannerProps {
    unitId?: string;
    isPro: boolean;
}

export const AdBanner: React.FC<AdBannerProps> = ({ unitId, isPro }) => {
    // Si es Pro, no mostramos nada
    if (isPro) return null;

    // Si NO es Pro, antes mostrábamos un banner.
    // Ahora por problemas de compilación, mostramos un espacio vacío o nada.
    // Opcional: Un placeholder visual.
    /*
    return (
        <View style={{ alignItems: 'center', marginVertical: 10, padding: 10, backgroundColor: '#f0f0f0' }}>
           <Text style={{ fontSize: 10, color: '#aaa' }}>Espacio Publicitario</Text>
        </View>
    );
    */
    return null;
};
