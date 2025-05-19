import { Outlet } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

//Theme
import { useTheme } from './contexts/ThemeContext';

function App() {
 const { themeMode } = useTheme();

  return (
    <>
      <Navbar />
        <div className={`min-h-screen ${themeMode === 'dark' ? 'bg-primary text-primary' : 'bg-blue-50 text-gray-900'}`}>
          <Outlet />
        </div>
      <Footer/>  
    </>
  )
}

export default App
