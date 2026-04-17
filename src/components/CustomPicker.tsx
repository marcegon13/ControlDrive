import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    FlatList,
    StyleSheet,
} from "react-native";

interface CustomPickerProps {
    label: string;
    value: string;
    items: { label: string; value: string }[];
    onValueChange: (value: string) => void;
    disabled?: boolean;
}

const CustomPicker: React.FC<CustomPickerProps> = ({
    label,
    value,
    items,
    onValueChange,
    disabled,
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const selectedItem = items.find((i) => i.value === value);

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity
                style={[styles.input, styles.pickerButton, disabled && styles.disabledInput]}
                onPress={() => !disabled && setModalVisible(true)}
                disabled={disabled}
            >
                <Text style={styles.inputText}>
                    {selectedItem ? selectedItem.label : "Seleccionar..."}
                </Text>
                <Text>▼</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modalOverlay}>
                    <View style={styles.pickerModalContent}>
                        <Text style={styles.modalTitle}>Seleccionar {label}</Text>
                        <FlatList
                            data={items}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.pickerItem}
                                    onPress={() => {
                                        onValueChange(item.value);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={styles.pickerItemText}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
        color: "#2c3e50",
    },
    input: {
        borderWidth: 1,
        borderColor: "#bdc3c7",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: "white",
    },
    pickerButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    disabledInput: {
        backgroundColor: "#ecf0f1",
        color: "#7f8c8d",
    },
    inputText: {
        fontSize: 16,
        color: "#2c3e50",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    pickerModalContent: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20,
        width: "80%",
        maxHeight: "60%",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#2c3e50",
    },
    pickerItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ecf0f1",
    },
    pickerItemText: {
        fontSize: 16,
        color: "#2c3e50",
        textAlign: "center",
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

export default CustomPicker;
