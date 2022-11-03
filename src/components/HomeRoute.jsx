import React from 'react'

import Welcome from './Welcome'
import CardsSection from './CardsSection'
import About from './About'
import Feedback from '../Feedback'
import ContactUs from './ContactUs'
const HomeRoute = () => {
  return (
    <>
        <Welcome />
        <CardsSection />
        <About />
        <Feedback />
    <ContactUs />
    </>
  )
}

export default HomeRoute