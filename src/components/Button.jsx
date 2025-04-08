
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
// eslint-disable-next-line react/prop-types
function Button({ children, onClick, to }) {
  const {themeMode} = useTheme();
  if (to) {
    return (
      <Link to={to} className='btn'>
        {children}
      </Link>
    )
  }

  return (
    <button className={`${themeMode === 'dark' ? 'btn bg-cyan-600 text-white hover:bg-cyan-800':'btn bg-yellow-400 hover:bg-yellow-600 text-white'}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button