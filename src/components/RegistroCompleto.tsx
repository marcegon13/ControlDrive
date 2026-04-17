import React, { useState, useRef, useMemo, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, StyleSheet } from "react-native";
import { RegistroDiario } from "../types";
import { APPS_DISPONIBLES } from "../constants";
import CustomPicker from "./CustomPicker";
import DateSelector from "./DateSelector";
import { globalStyles } from "../styles";

interface RegistroCompletoProps {
    onGuardar: (data: Omit<RegistroDiario, "id">) => void;
    onCancelar: () => void;
}

const RegistroCompleto: React.FC<RegistroCompletoProps> = ({
    onGuardar,
    onCancelar,
}) => {
    const [app, setApp] = useState("Didi");
    const [efectivo, setEfectivo] = useState("");
    const [tarjetas, setTarjetas] = useState("");
    const [billeterasVirtuales, setBilleterasVirtuales] = useState("");
    const [fecha, setFecha] = useState(new Date());
    const [guardando, setGuardando] = useState(false);

    const efectivoRef = useRef<TextInput>(null);
    const tarjetasRef = useRef<TextInput>(null);
    const billeterasRef = useRef<TextInput>(null);

    const total = useMemo(() => {
        const e = parseFloat(efectivo) || 0;
        const t = parseFloat(tarjetas) || 0;
        const b = parseFloat(billeterasVirtuales) || 0;
        return e + t + b;
    }, [efectivo, tarjetas, billeterasVirtuales]);

    useEffect(() => {
        setTimeout(() => efectivoRef.current?.focus(), 100);
    }, []);

    const handleSubmit = () => {
        const parsedEfectivo = parseFloat(efectivo.replace(",", ".")) || 0;
        const parsedTarjetas = parseFloat(tarjetas.replace(",", ".")) || 0;
        const parsedBilleteras = parseFloat(billeterasVirtuales.replace(",", ".")) || 0;
        const parsedTotal = parseFloat(total.toString().replace(",", ".")) || 0;

        if (parsedTotal <= 0) {
            Alert.alert("Error", "El total debe ser mayor a 0.");
            return;
        }

        setGuardando(true);
        onGuardar({
            app,
            efectivo: parsedEfectivo,
            tarjetas: parsedTarjetas,
            billeterasVirtuales: parsedBilleteras,
            total: parsedTotal,
            fecha: fecha,
        });
        setGuardando(false);
    };

    return (
        <ScrollView style={localStyles.completoContainer}>
            <Text style={localStyles.completoTitle}>Registro Completo 📊</Text>

            <DateSelector date={fecha} onDateChange={setFecha} />

            <CustomPicker
                label="App"
                value={app}
                items={APPS_DISPONIBLES.map((a) => ({ label: a, value: a }))}
                onValueChange={setApp}
            />

            <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.label}>💵 Efectivo ($)</Text>
                <TextInput
                    ref={efectivoRef}
                    style={globalStyles.input}
                    value={efectivo}
                    onChangeText={setEfectivo}
                    keyboardType="decimal-pad"
                    placeholder="0.00"
                    returnKeyType="next"
                    onSubmitEditing={() => tarjetasRef.current?.focus()}
                />
            </View>

            <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.label}>💳 Tarjetas/Plataforma ($)</Text>
                <TextInput
                    ref={tarjetasRef}
                    style={globalStyles.input}
                    value={tarjetas}
                    onChangeText={setTarjetas}
                    keyboardType="decimal-pad"
                    placeholder="0.00"
                    returnKeyType="next"
                    onSubmitEditing={() => billeterasRef.current?.focus()}
                />
            </View>

            <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.label}>📲 Billeteras Virtuales ($)</Text>
                <TextInput
                    ref={billeterasRef}
                    style={globalStyles.input}
                    value={billeterasVirtuales}
                    onChangeText={setBilleterasVirtuales}
                    keyboardType="decimal-pad"
                    placeholder="0.00"
                    returnKeyType="done"
                />
            </View>

            <View style={localStyles.totalContainer}>
                <Text style={localStyles.totalLabel}>Total del Día:</Text>
                <Text style={localStyles.totalValue}>${total.toFixed(2)}</Text>
            </View>

            <View style={globalStyles.modalButtons}>
                <TouchableOpacity style={globalStyles.cancelButton} onPress={onCancelar}>
                    <Text style={globalStyles.buttonTextSecondary}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[globalStyles.saveButton, guardando && globalStyles.disabledButton]}
                    onPress={handleSubmit}
                    disabled={guardando}
                >
                    <Text style={globalStyles.buttonTextPrimary}>
                        {guardando ? "Guardando..." : "Guardar"}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const localStyles = StyleSheet.create({
    completoContainer: {
        padding: 0,
    },
    completoTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#2c3e50",
    },
    totalContainer: {
        backgroundColor: "#ecf0f1",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 16,
    },
    totalLabel: {
        fontSize: 16,
        color: "#7f8c8d",
        marginBottom: 4,
    },
    totalValue: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2ecc71",
    },
});

export default RegistroCompleto;
