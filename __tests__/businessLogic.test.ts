import { calculateTripCost } from '../src/utils/calculator';
import { JornadaSummary } from '../src/types';

describe('Calculadora de Ganancias', () => {
    test('calculateTripCost debe calcular correctamente el costo del viaje', () => {
        expect(calculateTripCost(10, 1500, 10).estimatedCost).toBe(1500); // 10km * (1500$/10km/L) = 1500
    });

    // Simulador de una Jornada Completa
    test('Simulación de Jornada: Ingresos vs Gastos', () => {
        // 1. Estado Inicial
        let billetera = 0;
        const jornadaSimulada = {
            ingresos: [] as number[],
            gastos: [] as number[],
            km: 0
        };

        // 2. El conductor hace 3 viajes
        jornadaSimulada.ingresos.push(2500); // Viaje 1
        jornadaSimulada.ingresos.push(4000); // Viaje 2
        jornadaSimulada.ingresos.push(1500); // Viaje 3

        // 3. Carga combustible
        jornadaSimulada.gastos.push(3000); // Nafta

        // 4. Cálculo final
        const totalIngresos = jornadaSimulada.ingresos.reduce((a, b) => a + b, 0);
        const totalGastos = jornadaSimulada.gastos.reduce((a, b) => a + b, 0);
        const gananciaNeta = totalIngresos - totalGastos;

        // 5. Verificaciones (Asserts)
        expect(totalIngresos).toBe(8000); // 2500+4000+1500
        expect(totalGastos).toBe(3000);
        expect(gananciaNeta).toBe(5000);
    });

    test('Validación de Kilómetros Muertos', () => {
        const totalKmGPS = 150;
        const kmApp = 120;

        const kmMuertos = totalKmGPS - kmApp;

        expect(kmMuertos).toBe(30);
        expect(kmMuertos).toBeGreaterThanOrEqual(0);
    });
});
