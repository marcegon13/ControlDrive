# AI Coding Agent Instructions: ControlDriverApp

## Project Overview
**ControlDriverApp** is a React Native financial management app for ride-share drivers (Uber, Didi, etc.). It tracks income, expenses, fuel consumption, and profitability metrics across three separate wallets. The entire app is a single monolithic React component in `App.tsx` (~2,672 lines) with local-only data persistence.

## Architecture & Data Flow

### Monolithic Component Structure
- **Single Entry Point**: `App.tsx` contains all UI components, state management, and business logic
- **No External State Management**: Uses React hooks only (useState, useEffect, useMemo, useRef)
- **Local Storage Only**: `AsyncStorage` stores all data (no backend, no cloud sync)
- **Component Hierarchy**: Main `App` component renders screen components (Dashboard, BilleterasScreen, CombustibleScreen, HistorialScreen) as views, controlled by `currentScreen` state

### Core Data Types (Line 26-48)
```tsx
interface Billetera { id, nombre, saldo, color, icono }
interface RegistroDiario { app, efectivo, tarjetas, billeterasVirtuales, total, fecha }
interface CargaCombustible { estacion, total, litros, precioPorLitro, billeteraId, fecha }
interface Transaction { tipo, monto, descripcion, billeteraId, destinoId, fecha }
```

### State Management Pattern
- **Parent State in `App` Component**: `billeteras`, `registrosDiarios`, `cargasCombustible`, `transactions`, `currentScreen`
- **Modal States**: Separate boolean + type state for each modal (e.g., `registroDiarioModalVisible`, `transactionModalType`)
- **Immediate Persistence**: `useEffect` watches all data arrays → auto-saves to `AsyncStorage` on every change
- **No Async State Loading**: `loadData()` is called once on mount; all subsequent updates are synchronous

### Data Balance Updates Pattern
When data is saved, **wallet balances update immediately**:
- Registro Diario: Adds cash/card/virtual amounts to respective wallets
- Fuel Charge: Subtracts total from selected wallet
- Transactions: Adds/subtracts based on tipo ("ingreso", "gasto", "transferencia")
- **Deletion Reversals**: Each delete handler offers "revert balances" option to undo balance changes

### Three Wallet System
Always exists: Efectivo (cash), Tarjetas/Plataforma (cards), Billeteras Virtuales (digital wallets)
- Initialized in `INITIAL_BILLETERAS` (line 74-86)
- Users can add income/expenses per-wallet via Transaction modal
- Balance total = sum of all three wallet saldos

## Critical Development Patterns

### Modal & Form Pattern
1. **CustomPicker Component** (line 339): Dropdown using Modal + FlatList (no external UI library)
2. **InputRapido Component** (line 376): Numeric input with validation regex `/^[0-9]*\.?[0-9]*$/`
3. **Modal Data Flow**: Form → `onGuardar` callback → parent sets state → auto-saves
4. **Reset on Open**: Modal state resets when `modalVisible` changes (see `useEffect` in each modal handler)

### Numeric Input Handling
- Decimal values use comma/dot conversion: `parseFloat(value.replace(",", "."))`
- Validation rejects non-numeric: `validarNumero()` function returns boolean
- Calculations use `useMemo` to avoid recalculations: `const total = useMemo(() => {...}, [efectivo, tarjetas, billeterasVirtuales])`

### Statistics Calculation (Line 159-254)
- **`calcularEstadisticasPorPeriodo()`**: Pure function computing hoy/semana/mes stats
- Returns object with `ingresos`, `gastos`, `neto`, `registros` per period
- Used in Dashboard via `useMemo` to recalculate only when data arrays change
- **Rendimiento** = (neto / ingresos) * 100 (profitability percentage)

### Date Handling Quirks
- Store as ISO strings in `AsyncStorage`, convert to `Date` objects on load
- Filtering by date: Create new `Date(year, month, date)` (midnight) for day comparisons
- Format output: `formatearFechaHora()` uses `toLocaleString("es-AR")`

## Key Files & Conventions

### File Organization
- `App.tsx`: Complete app (types, components, state, styles)
- `app.json`: Expo config
- `eas.json`: EAS build config for Android/iOS
- `package.json`: Dependencies (React Native 0.81.5, Expo 54.0.27)
- `tsconfig.json`: Strict TypeScript, ES modules

### Important Constants (Lines 79-94)
- `STORAGE_KEYS`: AsyncStorage keys for each data type
- `APPS_DISPONIBLES`: ["Didi", "Uber", "Cabify", "Beat", "Particular", "Varias Apps"]
- `ESTACIONES_DISPONIBLES`: ["YPF", "SHELL", "AXION", "PUMA", "Otra"]

### Naming Conventions
- Spanish variable names throughout (e.g., `billetera`, `cargaCombustible`, `guardando`)
- Boolean flags use `guardando` + suffix (e.g., `guardandoRegistro`, `guardandoCarga`)
- Handlers follow pattern: `handle[Action]` + `[OnEvent]` (e.g., `handleSaveRegistroDiario`, `handleOpenModal`)
- Style objects grouped at end in `StyleSheet.create()`

## Build & Run Commands

### Development
```bash
npm install          # Install dependencies
npm start           # Start Expo dev server
npx expo run:android # Build & run on Android
npx expo run:ios    # Build & run on iOS
npm run web         # Run web version (limited support)
```

### Build Artifacts
- Android builds: `android/` folder with Gradle config
- EAS builds: Use `eas build` for cloud builds (configured in `eas.json`)
- Backup files: `App.tsx.backup`, `App.tsx.backup2` (safe to ignore)

## When Adding Features

### Checklist for New Data Type
1. Add interface definition at top with other types
2. Add `STORAGE_KEYS` entry
3. Add useState hook in App component
4. Add useEffect cleanup for AsyncStorage in `loadData()` and `saveData()`
5. Create modal component if user input needed
6. Add handler functions for create/update/delete
7. Add balance update logic if affects wallets
8. Add render logic to appropriate screen component
9. Add stats calculation if needed (update `calcularEstadisticasPorPeriodo`)

### Modifying Existing Components
- **Modal Changes**: Keep `useEffect` to reset form state on `modalVisible` change
- **Balance Logic**: Always check which wallet is affected; consider undo/revert implications
- **Date Filtering**: Use consistent date construction pattern (see line 180-190 example)
- **Stats**: Update `calcularEstadisticasPorPeriodo` to include new data sources

### Style Guidelines
- Use dark theme: `#2c3e50`, `#34495e` backgrounds, light text
- Wallet colors: `#2ecc71` (green/cash), `#3498db` (blue/cards), `#f1c40f` (yellow/virtual)
- Action colors: `#2ecc71` (income), `#e74c3c` (expense), `#e67e22` (fuel), `#3498db` (transfers)
- Card styling: `marginVertical`, `paddingHorizontal`, rounded corners with `borderRadius: 12`

## Known Limitations & Trade-offs

1. **Single Component**: No component reusability; refactoring into separate files would improve maintainability
2. **No Animations**: All transitions instant; could add React Native animated library
3. **No Offline Caching Sync**: If app force-closes, recent edits sync to AsyncStorage on restart
4. **Date Timezone Issues**: Locale-dependent; dates stored as ISO strings but no UTC conversion
5. **Large Modal Overlays**: Full-screen modals block main content; consider drawers/bottom sheets for mobile UX
6. **No Input Sanitization**: String inputs not validated beyond regex; could add length/content checks

## Testing Approach
- No automated tests in place
- Manual testing: Use `npm start` → Expo Go app on device
- Test data persists across app restarts (check `AsyncStorage` behavior)
- Delete handlers have confirmation alerts (test with "revert balances" option)
