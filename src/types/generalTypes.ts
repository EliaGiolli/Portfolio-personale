import React, { type ChangeEvent, type ReactNode } from "react";


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'customBtn' | 'toggleBtn' | 'hamburgerBtn'
    children?: ReactNode
}

export interface InputProps {
    children?: ReactNode,
    className: string,
    placeholder: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void 
}

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    CardVariant?: 'project' | 'profile' | 'default',
    children?: ReactNode
}