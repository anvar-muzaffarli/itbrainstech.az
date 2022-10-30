import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import {useState} from 'react'


import './App.css'


// komponentler
import Navbarr from './components/Navbarr';
import Welcome from './components/Welcome';
import CardsSection from './components/CardsSection';
import About from './components/About';
import Accordion from './components/Accordion';
import AccordionCorporative from './components/AccordionCorporative';

import Counter from './components/Counter';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Feedback from './Feedback';

function App() {

  

  return (
   <div className='main'>
  <Navbarr />
  <Welcome />
  <CardsSection />
  <About />

  <Accordion />
  <AccordionCorporative />

  <Feedback />
    
 

  <ContactUs />

  <Footer />
   
   </div>
  );
}

export default App;
