// src/components/ui/CustomPicker.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import { COLORS } from "../../theme/colors";

interface CustomPickerProps {
  label: string;
  value: string;
  items: { label: string; value: string }[];
  onValueChange: (value: string) => void;
  disabled?: boolean;
}

export const CustomPicker: React.FC<CustomPickerProps> = ({
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
    color: COLORS.dark,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: COLORS.white,
  },
  disabledInput: {
    backgroundColor: COLORS.light,
    color: COLORS.gray,
  },
  pickerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    fontSize: 16,
    color: COLORS.dark,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerModalContent: {
    backgroundColor: COLORS.white,
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
    color: COLORS.dark,
  },
  pickerItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light,
  },
  pickerItemText: {
    fontSize: 16,
    color: COLORS.dark,
    textAlign: "center",
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
    fontWeight: "600",
  },
});
