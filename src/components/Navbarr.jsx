import logo from '../assets/itbtech/nobackground.png'
import {HiBars3CenterLeft} from 'react-icons/hi2'

import {Link as Scroll} from 'react-scroll'
import {Link, useNavigate} from 'react-router-dom'



import './Navbarr.css'
import { useRef } from 'react'
import CustomServices from './CustomServices'

const Navbarr = ({history}) => {

  const navigate = useNavigate()
  
  const dropRef = useRef()

  const showDrop = (e) => {
    const clickedItem = e.target

    if(clickedItem.classNameList.contains('dropdown-toggle')) {
      dropRef.classNameList.toggle('show')
    }
  }

 
 

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-rad">
    <Link className="navbar-brand" to="/"><img src={logo} alt="" width={151} className="itbtech" /></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Scroll className="nav-link" to='about' spy={true} offset={2} smooth={true}><Link to="/about">About</Link></Scroll>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" onClick={showDrop} to="services" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </Link>
          <div className="dropdown-menu" ref={dropRef} aria-labelledby="navbarDropdownMenuLink">
           <Link className="dropdown-item" to="/custom-services">Custom</Link>
            <Link className="dropdown-item" to="/corporative-services">Corporative</Link>
          </div>
        </li>
        <li className="nav-item">
        </li>
        <li className="nav-item">
          <Scroll className="nav-link" spy={true} smooth={true} offset={-10} duration={500} to="contact-us"><Link to="/contact-us">Contact us</Link></Scroll>
        </li>
        
      
      </ul>
    </div>
  </nav>
  )
}

export default Navbarr