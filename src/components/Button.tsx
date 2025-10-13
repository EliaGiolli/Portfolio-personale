import {cva} from 'class-variance-authority'
import clsx from 'clsx';
import { useTheme } from '../contexts/ThemeContext'
import { ButtonProps } from '../types/generalTypes';
import { ButtonVariants } from '../types/enums';
// eslint-disable-next-line react/prop-types
function Button({ 
    children, 
    onClick, 
    className, 
    disabled,
    variant = ButtonVariants.customBtn,
     ...props }:ButtonProps) {

  const { themeMode } = useTheme();

  return (
   <button
      className={clsx(buttonVariant({ variant, themeMode}), className)}
      onClick={onClick}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

const buttonVariant = cva(
    "inline-flex justify-center items-center px-4 py-3 font-semibold rounded-lg cursor-pointer transition-all duration-200 text-base box-border",
    {
      variants: {
        variant: {
          default: "",
          customBtn: "shadow-sm",
          hamburgerBtn: "block md:hidden",
          toggleBtn: "", 
          transparentBtn: "shadow-md border-2"
        },
        themeMode: {
          light: "",
          dark: "",
        },
      },
      compoundVariants: [
        {
          variant: "customBtn",
          themeMode: "light",
          className: "bg-blue-600 hover:bg-blue-700 text-white shadow-gray-300",
        },
        {
          variant: "transparentBtn",
          themeMode: "light",
          className: "bg-transparent hover:bg-blue-100 text-gray-900 hover:text-gray-600 border-cyan-300"
        },
        {
          variant: "transparentBtn",
          themeMode: "dark",
          className: "bg-transparent hover:bg-blue-50 text-gray-300 hover:text-gray-600 border-cyan-300"
        },
        {
          variant: "customBtn",
          themeMode: "dark",
          className: "bg-blue-500 hover:bg-blue-400 text-gray-300 hover:text-gray-200 shadow-gray-200",
        },
        {
          variant: 'toggleBtn',
          themeMode: 'light',
          className: 'bg-blue-600 hover:bg-blue-700 text-white shadow-gray-300'
        },
        {
          variant: 'toggleBtn',
          themeMode: 'dark',
          className: 'bg-blue-800 text-white hover:bg-blue-700 shadow-gray-200'
        },
        {
          variant: "transparentBtn",

        }
      ],
      defaultVariants: {
        variant: "customBtn",
        themeMode: "dark",
      },
    }
  );
  