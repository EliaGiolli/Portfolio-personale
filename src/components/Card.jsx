// eslint-disable-next-line react/prop-types
function Card({ children, variant = 'default'}) {
  const baseStyles = "bg-inherit h-[300] mx-auto flex flex-col relative group p-6 m-4 overflow-hidden"
  
  const variantStyles = {
    default: "",
    project: " max-w-2xl absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-all p-10",
    profile: "max-w-3xl",
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </div>
  )
}

export default Card