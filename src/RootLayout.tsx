import { Outlet } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Subnavbar from './layouts/Subnavbar';
import Footer from './layouts/Footer';

import { useThemeStore } from './store/store';

function App() {

  const initialTheme = useThemeStore((state) => state.initialTheme);

  return (
    <div className={`${initialTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-50 text-gray-700'}`}>
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
