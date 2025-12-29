// Declaraciones de tipos para variables globales del entorno Canvas/Runtime

declare global {
    // Variables globales proporcionadas por el entorno de Canvas
    const __app_id: string | undefined;
    const __firebase_config: string | undefined;

    interface Window {
        __initial_auth_token: string | undefined;
    }
}

export { };
