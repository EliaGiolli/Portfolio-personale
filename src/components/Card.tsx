import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { useTheme } from "../contexts/ThemeContext";
import { CardProps } from "../types/generalTypes";

function Card({ children, CardVariant = "default", className, ...props }: CardProps) {
  const { themeMode } = useTheme(); 
  return (
    <div
      className={clsx(cardVariant({ variant: CardVariant, themeMode: themeMode }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;

const cardVariant = cva(
  "bg-inherit min-h-full mx-auto flex flex-col overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        project: "",
        profile: "max-w-3xl py-3",
      },
      themeMode: {
        light: "",
        dark: "",
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
