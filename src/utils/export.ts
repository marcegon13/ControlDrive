import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';
import { Alert, Platform } from 'react-native';
import { RegistroDiario, CargaCombustible, Transaction } from '../types';
import { formatearFechaHora } from './index';

export const exportToCSV = async (
    registros: RegistroDiario[],
    cargas: CargaCombustible[],
    transactions: Transaction[]
) => {
    try {
        // BOM para forzar UTF-8 en Excel
        let csvContent = "\ufeffREPORTE DE CONTROL DRIVER\n\n";

        // 1. Registros Diarios
        csvContent += "--- REGISTROS DIARIOS ---\n";
        csvContent += "Fecha,App,Efectivo,Tarjetas,Billeteras,Total\n";
        registros.forEach(r => {
            csvContent += `${formatearFechaHora(new Date(r.fecha))},${r.app},${r.efectivo},${r.tarjetas},${r.billeterasVirtuales},${r.total}\n`;
        });

        csvContent += "\n--- CARGAS DE COMBUSTIBLE ---\n";
        csvContent += "Fecha,Estacion,Litros,P/Litro,Total\n";
        cargas.forEach(c => {
            csvContent += `${formatearFechaHora(new Date(c.fecha))},${c.estacion},${c.litros},${c.precioPorLitro},${c.total}\n`;
        });

        csvContent += "\n--- OTRAS TRANSACCIONES ---\n";
        csvContent += "Fecha,Tipo,Monto,Descripcion\n";
        transactions.forEach(t => {
            csvContent += `${formatearFechaHora(new Date(t.fecha))},${t.tipo},${t.monto},"${(t.descripcion || "").replace(/"/g, '""')}"\n`;
        });

        const fileName = `ControlDriver_Reporte_${new Date().getTime()}.csv`;

        // Usar CacheDirectory ("legacy" properties might need casting if types are missing)
        const fs = FileSystem as any;
        const fileUri = (fs.cacheDirectory || fs.documentDirectory) + fileName;

        // Escribir el archivo
        await FileSystem.writeAsStringAsync(fileUri, csvContent, {
            encoding: 'utf8'
        });

        // Verificar si se puede compartir
        const isSharingAvailable = await Sharing.isAvailableAsync();

        if (isSharingAvailable) {
            await Sharing.shareAsync(fileUri, {
                mimeType: 'text/csv',
                dialogTitle: 'Guardar reporte CSV',
                UTI: 'public.comma-separated-values-text'
            });
        } else {
            Alert.alert("Exportación exitosa", "Archivo guardado temporalmente en: " + fileUri);
        }

    } catch (error) {
        console.error("Error exportando CSV:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        Alert.alert("Error", `No se pudo generar el reporte.\nDetalle: ${errorMessage}`);
    }
};
