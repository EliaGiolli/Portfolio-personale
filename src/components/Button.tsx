import {cva} from 'class-variance-authority'
import clsx from 'clsx';
import { useTheme } from '../contexts/ThemeContext'
import { ButtonProps } from '../types/generalTypes';
// eslint-disable-next-line react/prop-types
function Button({ children, onClick, className, variant = 'customBtn', ...props }:ButtonProps) {
  const { themeMode } = useTheme();

  return (
   <button
      className={clsx(buttonVariant({ variant, themeMode}), className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

const buttonVariant = cva(
    "px-5 py-4 font-semibold rounded-md cursor-pointer transition-all duration-200",
    {
      variants: {
        variant: {
          default: "",
          customBtn: "shadow-md",
          hamburgerBtn: "block md:hidden",
          toggleBtn: "shadow-md", 
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
        }
      ],
      defaultVariants: {
        variant: "customBtn",
        themeMode: "dark",
      },
    }
  );
  