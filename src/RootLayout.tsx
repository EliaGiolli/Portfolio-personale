import { Outlet } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Subnavbar from './layouts/Subnavbar';
import Footer from './layouts/Footer';

function App() {


  return (
    <>
      <Navbar />
      <Subnavbar />
        <div>
          <Outlet />
        </div>
      <Footer/>  
    </>
  )
}

export default App
