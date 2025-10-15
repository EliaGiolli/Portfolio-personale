import { forwardRef } from "react";
import { useThemeStore } from "../store/store";
// Types 
import { ModalButtonProps } from "../types/generalTypes";

export const ModalButton = forwardRef<HTMLAnchorElement, ModalButtonProps>(
  ({ href, children, ...props }, ref) => {
    const theme = useThemeStore(state => state.initialTheme);

    const baseClass =
      theme === "dark"
        ? "bg-cyan-600 hover:bg-cyan-800 text-white px-4 py-2 rounded-md"
        : "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md";

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        {...props}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

ModalButton.displayName = "ModalButton";
