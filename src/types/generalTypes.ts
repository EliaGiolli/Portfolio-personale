import React, { ReactNode } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: 'customBtn' | 'toggleBtn'
}