// src/components/ui/DateSelector.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Calendar } from 'react-native-calendars';
import { formatearFechaHora } from "../../utils";
import { COLORS } from "../../theme/colors";

interface DateSelectorProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

export const DateSelector: React.FC<DateSelectorProps> = ({ date, onDateChange }) => {
    const [visible, setVisible] = useState(false);

    const handleDayPress = (day: any) => {
        const parts = day.dateString.split('-');
        const newDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]), 12, 0, 0);
        onDateChange(newDate);
        setVisible(false);
    };

    const markedDate = date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2,'0') + "-" + String(date.getDate()).padStart(2,'0');

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
                                [markedDate]: {selected: true, selectedColor: COLORS.primary}
                            }}
                            theme={{
                                selectedDayBackgroundColor: COLORS.primary,
                                todayTextColor: COLORS.primary,
                                arrowColor: COLORS.primary,
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
      color: COLORS.dark,
    },
    dateSelectorButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
    },
    dateSelectorText: {
        fontSize: 16,
        color: COLORS.dark,
        fontWeight: '500',
    },
    dateSelectorChange: {
        fontSize: 14,
        color: COLORS.secondary,
        fontWeight: '600',
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: COLORS.overlay,
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
      backgroundColor: COLORS.gray,
      borderRadius: 8,
      alignItems: "center",
    },
    closeButtonText: {
      color: COLORS.white,
      fontSize: 16,
      fontWeight: '600',
    },
});
