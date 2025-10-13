import { cva } from "class-variance-authority";
import clsx from "clsx";
import { useTheme } from "../contexts/ThemeContext";
import { CardProps } from "../types/generalTypes";
import { CardVariants } from "../types/enums";

function Card({ 
  children, 
  variant = CardVariants.default , 
  className, 
  ...props }: CardProps) {

  const { themeMode } = useTheme(); 

  return (
    <div
      className={clsx(cardVariant({ variant, themeMode: themeMode }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;

const cardVariant = cva(
  "min-h-full mx-auto flex flex-col overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        project: "",
        profile: "max-w-3xl py-3",
      },
      themeMode: {
        light: "bg-blue-50",
        dark: "bg-gray-800",
      },
    },
    compoundVariants: [
      {
        variant: "project",
        themeMode: "light",
        className: "max-w-2xl p-5 rounded-lg bg-white border border-gray-200 shadow-md",
      },
      {
        variant: "project",
        themeMode: "dark",
        className: "max-w-2xl p-5 rounded-lg bg-primary border-1 border-cyan-800",
      },
    ],
    defaultVariants: {
      variant: "default",
      themeMode: "dark",
    },
  }
);
