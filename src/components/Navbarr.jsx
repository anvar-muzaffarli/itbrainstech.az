import logo from '../assets/itbtech/nobackground.png'
import {HiBars3CenterLeft} from 'react-icons/hi2'

import {Link} from 'react-scroll'

import './Navbarr.css'
import { useRef } from 'react'

const Navbarr = () => {
  
  const dropRef = useRef()

  const showDrop = (e) => {
    const clickedItem = e.target

    if(clickedItem.classNameList.contains('dropdown-toggle')) {
      dropRef.classNameList.toggle('show')
    }
  }

 
 

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-rad">
    <Link className="navbar-brand" to="welcome"><img src={logo} alt="" width={151} className="itbtech" /></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="welcome" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" spy={true} smooth={true} offset={50} duration={500} onClick={showDrop} to="services" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </Link>
          <div className="dropdown-menu" ref={dropRef} aria-labelledby="navbarDropdownMenuLink">
            <Link className="dropdown-item" spy={true} smooth={true} offset={50} duration={500} to="custom">Custom</Link>
            <Link className="dropdown-item" spy={true} smooth={true} offset={50} duration={500} to="corporative">Corporative</Link>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" spy={true} smooth={true} offset={50} duration={500} to="testimonials">Testimonials</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" spy={true} smooth={true} offset={150} duration={500} to="contact">Contact us</Link>
        </li>
        
      
      </ul>
    </div>
  </nav>
  )
}

export default Navbarr