import React, { useState, useRef, useMemo } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { RegistroDiario } from "../types";
import { APPS_DISPONIBLES } from "../constants";
import InputRapido from "./InputRapido";
import CustomPicker from "./CustomPicker";
import DateSelector from "./DateSelector";
import { globalStyles } from "../styles";

interface RegistroRapidoProps {
    onGuardar: (data: Omit<RegistroDiario, "id">) => void;
    onCancelar: () => void;
}

const RegistroRapido: React.FC<RegistroRapidoProps> = ({
    onGuardar,
    onCancelar,
}) => {
    const [efectivo, setEfectivo] = useState("");
    const [tarjetas, setTarjetas] = useState("");
    const [billeterasVirtuales, setBilleterasVirtuales] = useState("");
    const [app, setApp] = useState("Didi");
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

    const handleSubmit = () => {
        if (total <= 0) {
            Alert.alert("Error", "El total debe ser mayor a 0.");
            return;
        }

        setGuardando(true);
        onGuardar({
            app,
            efectivo: parseFloat(efectivo) || 0,
            tarjetas: parseFloat(tarjetas) || 0,
            billeterasVirtuales: parseFloat(billeterasVirtuales) || 0,
            total,
            fecha: fecha,
        });
        setGuardando(false);
    };

    return (
        <View style={localStyles.rapidoContainer}>
            <Text style={localStyles.rapidoTitle}>Ingreso Rápido 💨</Text>

            <DateSelector date={fecha} onDateChange={setFecha} />

            <CustomPicker
                label="App"
                value={app}
                items={APPS_DISPONIBLES.map((a) => ({ label: a, value: a }))}
                onValueChange={setApp}
            />

            <InputRapido
                label="Efectivo"
                value={efectivo}
                onChange={setEfectivo}
                autoFocus={true}
                onSubmitEditing={() => tarjetasRef.current?.focus()}
                returnKeyType="next"
                ref={efectivoRef}
            />

            <InputRapido
                label="Tarjetas"
                value={tarjetas}
                onChange={setTarjetas}
                onSubmitEditing={() => billeterasRef.current?.focus()}
                returnKeyType="next"
                ref={tarjetasRef}
            />

            <InputRapido
                label="Billeteras"
                value={billeterasVirtuales}
                onChange={setBilleterasVirtuales}
                returnKeyType="done"
                ref={billeterasRef}
            />

            <View style={localStyles.totalRapido}>
                <Text style={localStyles.totalTexto}>Total: ${total.toFixed(2)}</Text>
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
        </View>
    );
};

const localStyles = StyleSheet.create({
    rapidoContainer: {
        padding: 0,
    },
    rapidoTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 5,
        color: "#2c3e50",
    },
    totalRapido: {
        backgroundColor: "#ecf0f1",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 16,
    },
    totalTexto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2ecc71",
    },
});

export default RegistroRapido;
