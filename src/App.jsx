import { Routes, Route } from 'react-router-dom';
import Homepage from './routes/Homepage'
import ErrorPage from './routes/ErrorPage';

//Theme
import { useTheme } from './contexts/ThemeContext';

function App() {
 const {themeMode} =useTheme();

  return (
    <>
      <div className={`min-h-screen ${themeMode === 'dark' ? 'bg-primary text-primary' : 'bg-yellow-50 text-gray-900'}`}>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
