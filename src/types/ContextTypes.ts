export interface ContextTypes {
    themeMode: Theme,
    toggleTheme: () => void;
}

export type Theme = "light" | "dark"
