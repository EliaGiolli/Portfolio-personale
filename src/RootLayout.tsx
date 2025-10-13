import { Outlet } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Subnavbar from './layouts/Subnavbar';
import Footer from './layouts/Footer';

import { useTheme } from './contexts/ThemeContext';

function App() {

  const { themeMode } = useTheme();

  return (
    <div className={`app-container ${themeMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-50 text-gray-700'}`}>
      <Navbar />
      <Subnavbar />
        <div>
          <Outlet />
        </div>
      <Footer/>  
    </div>
  )
}

export default App
