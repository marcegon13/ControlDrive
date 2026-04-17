import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
} from "react-native";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { formatearFechaHora } from "../utils";

// Configuración de idioma para el calendario
LocaleConfig.locales['es'] = {
    monthNames: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.']
};
LocaleConfig.defaultLocale = 'es';

interface DateSelectorProps {
    date: Date;
    onDateChange: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ date, onDateChange }) => {
    const [visible, setVisible] = useState(false);

    const handleDayPress = (day: any) => {
        // dia.dateString es YYYY-MM-DD
        // Construir fecha local (mediodía para evitar cambios de zona horaria)
        const parts = day.dateString.split('-');
        const newDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]), 12, 0, 0);
        onDateChange(newDate);
        setVisible(false);
    };

    // YYYY-MM-DD
    const markedDate = date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + String(date.getDate()).padStart(2, '0');

    return (
        <View style={styles.dateSelectorContainer}>
            <Text style={styles.label}>Fecha</Text>
            <TouchableOpacity onPress={() => setVisible(true)} style={styles.dateSelectorButton}>
                <Text style={styles.dateSelectorText}>📅 {formatearFechaHora(date).split(',')[0]}</Text>
                <Text style={styles.dateSelectorChange}>Cambiar</Text>
            </TouchableOpacity>

            <Modal visible={visible} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.calendarContainer}>
                        <Calendar
                            current={markedDate}
                            onDayPress={handleDayPress}
                            markedDates={{
                                [markedDate]: { selected: true, selectedColor: '#2ecc71' }
                            }}
                            theme={{
                                selectedDayBackgroundColor: '#2ecc71',
                                todayTextColor: '#2ecc71',
                                arrowColor: '#2ecc71',
                            }}
                        />
                        <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    dateSelectorContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
        color: "#2c3e50",
    },
    dateSelectorButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#bdc3c7',
    },
    dateSelectorText: {
        fontSize: 16,
        color: '#2c3e50',
        fontWeight: '500',
    },
    dateSelectorChange: {
        fontSize: 14,
        color: '#3498db',
        fontWeight: '600',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    calendarContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 10,
        width: '90%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    closeButton: {
        marginTop: 16,
        padding: 12,
        backgroundColor: "#95a5a6",
        borderRadius: 8,
        alignItems: "center",
    },
    closeButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default DateSelector;
