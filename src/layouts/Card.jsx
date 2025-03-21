import React from 'react'

function Card({ children, variant = 'default' }) {
  const baseStyles = "cards flex flex-col"
  
  const variantStyles = {
    default: "",
    project: " max-w-2xl mx-auto md:hover:scale-105 transition-transform duration-300",
    profile: "max-w-3xl mx-auto md:hover:scale-100 transition-transform duration-300",
    skill: "max-w-3xl mx-auto"
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </div>
  )
}

export default Card