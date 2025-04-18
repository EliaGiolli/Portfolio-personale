import { useTheme } from "../contexts/ThemeContext"

function Card({ children, variant = 'default'}) {
  const {themeMode} = useTheme();

  const baseStyles = "bg-inherit min-h-full mx-auto flex flex-col overflow-hidden";
  const themeProjectCard = `max-w-2xl p-5 rounded-lg ${themeMode === 'dark'?'bg-primary border-1 border-cyan-800':'bg-white border-1 border-yellow-400'}`;
  const variantStyles = {
    default: "",
    project: themeProjectCard,
    profile: "max-w-3xl py-3",
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </div>
  )
}

export default Card