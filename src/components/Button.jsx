
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Button({ children, onClick, to }) {

  if (to) {
    return (
      <Link to={to} className='btn'>
        {children}
      </Link>
    )
  }

  return (
    <button className='btn'onClick={onClick}>
        {children}
    </button>
  )
}

export default Button