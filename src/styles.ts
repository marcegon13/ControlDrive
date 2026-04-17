import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    // Contenedores y Layout
    container: {
        flex: 1,
        backgroundColor: "#ecf0f1",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    // Inputs y Labels
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
    disabledInput: {
        backgroundColor: "#ecf0f1",
        color: "#7f8c8d",
    },
    halfInput: {
        width: "48%",
    },

    // Botones
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    cancelButton: {
        flex: 1,
        padding: 16,
        backgroundColor: "#e74c3c",
        borderRadius: 8,
        marginRight: 8,
        alignItems: "center",
    },
    saveButton: {
        flex: 1,
        padding: 16,
        backgroundColor: "#2ecc71",
        borderRadius: 8,
        marginLeft: 8,
        alignItems: "center",
    },
    buttonTextPrimary: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonTextSecondary: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    disabledButton: {
        backgroundColor: "#95a5a6",
        opacity: 0.7,
    },

    // Modales
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20,
        width: "90%",
        maxHeight: "80%",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#2c3e50",
    },

    // Pantallas
    screenContainer: {
        flex: 1,
        padding: 16,
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#2c3e50",
        textAlign: "center",
    },
});
