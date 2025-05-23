import { Outlet } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

function App() {


  return (
    <>
      <Navbar />
        <div>
          <Outlet />
        </div>
      <Footer/>  
    </>
  )
}

export default App
