import { VehicleProfile } from "../types";

export const calculateTripCost = (
    distanceKm: number,
    fuelPrice: number,
    profile: VehicleProfile,
    isCityTraffic: boolean
): { estimatedCost: number; estimatedLitros: number } => {
    if (!distanceKm || !fuelPrice || !profile) {
        return { estimatedCost: 0, estimatedLitros: 0 };
    }

    // Base Efficiency (KM per Liter/Unit) - Estimates
    let efficiency = 10; // Default for 1.6

    switch (profile.engineDisplacement) {
        case "1.0":
        case "1.4":
            efficiency = 12;
            break;
        case "1.6":
            efficiency = 10;
            break;
        case "2.0":
            efficiency = 8;
            break;
        default:
            efficiency = 10;
    }

    // Fuel Type Modifiers (Efficiency relative to Nafta 1.6 base)
    if (profile.fuelType === "diesel") efficiency *= 1.3; // Diesel is more efficient
    if (profile.fuelType === "gnc") efficiency *= 1.1; // GNC yields slightly more km/$ usually, treating efficiency generally

    // Condition Modifiers (Reduce efficiency)
    if (profile.acEnabled) efficiency *= 0.9; // AC consumes ~10% more (efficiency drops)
    if (isCityTraffic) efficiency *= 0.85; // Heavy traffic drops efficiency by ~15%

    const estimatedLitros = distanceKm / efficiency;
    const estimatedCost = estimatedLitros * fuelPrice;

    return {
        estimatedCost: Math.round(estimatedCost),
        estimatedLitros: parseFloat(estimatedLitros.toFixed(2)),
    };
};
