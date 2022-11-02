import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import {useState} from 'react'


import './App.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


// komponentler
import Navbarr from './components/Navbarr';
import Welcome from './components/Welcome';
import CardsSection from './components/CardsSection';
import About from './components/About';

import CustomServices from './components/CustomServices';
import CorporativeServices from './components/CorporativeServices';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Feedback from './Feedback';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });

    AOS.refresh()
  }, []);

  return (
   <div className='main'>
  <Navbarr />
  <Welcome />
  <CardsSection />
  <About />
  <CustomServices />
  <CorporativeServices />

 

  <Feedback />
    
 

  <ContactUs />

  <Footer />
   
   </div>
  );
}

export default App;
