import React, { ReactNode } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'customBtn' | 'toggleBtn' | 'hamburgerBtn'
    children?: ReactNode
}

export interface ContextTypes {
    themeMode: Theme,
    toggleTheme: () => void;
}

export type Theme = "light" | "dark"