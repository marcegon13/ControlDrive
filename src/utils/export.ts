import * as FileSystem from 'expo-file-system';
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
        // Unificar datos en una lista cronológica
        const inputData = [
            ...registros.map(r => ({
                fecha: new Date(r.fecha),
                tipo: "Jornada",
                categoria: r.app,
                detalle: `Efec: ${r.efectivo} | Tarj: ${r.tarjetas} | Virt: ${r.billeterasVirtuales}`,
                ingreso: r.total,
                gasto: 0
            })),
            ...cargas.map(c => ({
                fecha: new Date(c.fecha),
                tipo: "Combustible",
                categoria: c.estacion,
                detalle: `${c.litros}L @ $${c.precioPorLitro}`,
                ingreso: 0,
                gasto: c.total
            })),
            ...transactions.map(t => ({
                fecha: new Date(t.fecha),
                tipo: t.tipo === "transferencia" ? "Transferencia" : (t.tipo === "ingreso" ? "Extra" : "Gasto"),
                categoria: "General",
                detalle: (t.descripcion || "").replace(/"/g, '""'),
                ingreso: t.tipo === "ingreso" ? t.monto : 0,
                gasto: t.tipo === "gasto" ? t.monto : 0
            }))
        ].sort((a, b) => b.fecha.getTime() - a.fecha.getTime());

        // BOM para forzar UTF-8 en Excel
        let csvContent = "\ufeff";

        // Header Unificado (usando ; para Excel Latam)
        csvContent += "Fecha;Hora;Tipo;Categoria;Detalle;Ingreso;Gasto;Neto\n";

        inputData.forEach(item => {
            const f = item.fecha;
            const fechaStr = `${f.getDate().toString().padStart(2, '0')}/${(f.getMonth() + 1).toString().padStart(2, '0')}/${f.getFullYear()}`;
            const horaStr = `${f.getHours().toString().padStart(2, '0')}:${f.getMinutes().toString().padStart(2, '0')}`;

            // Helper para formatear números a "1.234,56" (Excel Latam)
            const fmtNum = (n: number) => n.toString().replace('.', ',');

            const tipo = `"${item.tipo}"`;
            const cat = `"${item.categoria}"`;
            const det = `"${item.detalle.replace(/"/g, '""')}"`; // Escapar comillas dobles

            const ing = fmtNum(item.ingreso);
            const gas = fmtNum(item.gasto);
            const net = fmtNum(item.ingreso - item.gasto);

            csvContent += `${fechaStr};${horaStr};${tipo};${cat};${det};${ing};${gas};${net}\n`;
        });

        const fileName = `ControlDriver_Reporte_${new Date().getTime()}.csv`;
        const fs = FileSystem as any;
        const fileUri = (fs.cacheDirectory || fs.documentDirectory) + fileName;

        await FileSystem.writeAsStringAsync(fileUri, csvContent, { encoding: 'utf8' });

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
        Alert.alert("Error", "No se pudo generar el reporte.");
    }
};
