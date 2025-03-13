import React from 'react'

function Button(children, onclick) {
  return (
    <button className='buttons' onClick={onclick}>
        {children}
    </button>
  )
}

export default Button