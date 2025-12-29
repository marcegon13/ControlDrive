// src/components/ui/InputRapido.tsx
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

interface InputRapidoProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  onSubmitEditing?: () => void;
  returnKeyType?: "next" | "done";
}

export const InputRapido = React.forwardRef<TextInput, InputRapidoProps>(
  (
    {
      label,
      value,
      onChange,
      placeholder = "0",
      autoFocus = false,
      onSubmitEditing,
      returnKeyType = "next",
    },
    ref
  ) => {
    const validarNumero = (texto: string) => {
      const regex = /^[0-9]*\.?[0-9]*$/;
      return regex.test(texto) || texto === "";
    };

    return (
      <View style={styles.filaInput}>
        <Text style={styles.emoji}>
          {label === "Efectivo" ? "💵" : label === "Tarjetas" ? "💳" : "📲"}
        </Text>
        <TextInput
          ref={ref}
          style={styles.inputRapido}
          value={value}
          onChangeText={(text) => {
            if (validarNumero(text)) {
              onChange(text);
            }
          }}
          placeholder={placeholder}
          keyboardType="decimal-pad"
          autoFocus={autoFocus}
          selectTextOnFocus={true}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          placeholderTextColor="#999"
        />
      </View>
    );
  }
);

InputRapido.displayName = "InputRapido";

const styles = StyleSheet.create({
  filaInput: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
  },
  emoji: {
    fontSize: 20,
    marginRight: 10,
  },
  inputRapido: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: COLORS.dark,
  },
});
