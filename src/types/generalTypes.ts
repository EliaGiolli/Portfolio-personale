import React, { type ChangeEvent, type ReactNode } from "react";
import { ProjectDataTypes } from "./ProjectDataTypes";


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'customBtn' | 'toggleBtn' | 'hamburgerBtn'
    children?: ReactNode
    disable?: boolean,
}

export interface InputProps {
    children?: ReactNode,
    className?: string,
    type?:string,
    placeholder?: string,
    value?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void 
}

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    CardVariant?: 'project' | 'profile' | 'default',
    children?: ReactNode
}

export interface ModalCardProps {
    closeModal: () => void;
    project: ProjectDataTypes;
    getTechIcon: (tech:string, className:string) => ReactNode
}

export interface ContactFormData {
    //emailjs.send expects a plain object with string keys (Record<string, unknown>).
     [key: string]: unknown;
     nome: string;
     email: string;
     privacy: boolean;
}