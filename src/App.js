import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import {useState} from 'react'


import './App.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


// komponentler
import Navbarr from './components/Navbarr';


import CorporativeServices from './components/CorporativeServices';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Feedback from './Feedback';

// ROUTES

import ServicesPages from './components/ServicesPages'

// routes
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";


// routes komponent
import HomeRoute from './components/HomeRoute'
import AboutRouter from './components/AboutRouter'
import CorporativeRouter from './components/CorporativeRouter'
import ContactUsRouter from './components/ContactUsRouter'
function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });

    AOS.refresh()
  }, []);

  return (
   <div className='main'>
   
    <BrowserRouter>
    <Navbarr />

  <Routes>
    <Route path='/' exact element={<HomeRoute />} />
    <Route path='/about' exact element={<AboutRouter />} />
    <Route path='/custom-services' exact element={<ServicesPages />} />
    <Route path='/corporative-services' exact element={ <CorporativeRouter />} />
    <Route path='/contact-us' exact element={<ContactUsRouter />} />
    
  </Routes>

  
    <Footer />
 
  </BrowserRouter>
   
   </div>
  );
}

export default App;
