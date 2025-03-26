import React from 'react'

function Button({ children, onClick, variant }) {

  const baseStyles = 'custom-button'

  const variantStyles ={
    default: "",
    arrowBtn: "buttons",
    scrollBtn: "scrollBtn",
  }
  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button