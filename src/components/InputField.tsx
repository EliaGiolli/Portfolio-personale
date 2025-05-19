/* eslint-disable react/prop-types */
import { InputProps } from "../types/generalTypes"

function InputField({ 
  children, 
  className,
  placeholder,
  value,
  onChange,
  ...props  
}: InputProps) {
  return (
    <div className="relative">
        <input 
          type="text" 
          className={`nav-input ${className || ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
        {children}
    </div>
  )
}

export default InputField