import React from 'react'

import Welcome from './Welcome'
import CardsSection from './CardsSection'
import About from './About'
import Feedback from '../Feedback'
import ContactUs from './ContactUs'
import Counter from './Counter'

const AboutRouter = () => {
  return (
    <>
    <Welcome />
    <CardsSection />
    <About />
    <Counter />
    <Feedback />
    <ContactUs />
    </>
  )
}

export default AboutRouter