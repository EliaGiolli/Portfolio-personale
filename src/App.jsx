import {useEffect} from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom'
import Homepage from './routes/Homepage'
import ProjectsPage from './routes/ProjectsPage';
import CvPage from './routes/CvPage';
import ErrorPage from './routes/ErrorPage';
import About from './routes/About';
import Contacts from './routes/Contacts';

function App() {
  const navigate = useNavigate();

//It sends the user directly to the homepage when he first enters the website
  useEffect(()=>{
    navigate('/');
  },[navigate])


  return (
    <div className="min-h-screen bg-primary">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default App
