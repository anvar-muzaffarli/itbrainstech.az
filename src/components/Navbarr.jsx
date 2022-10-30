import logo from '../assets/itbtech/nobackground.png'
import {HiBars3CenterLeft} from 'react-icons/hi2'

import {Link} from 'react-scroll'

import './Navbarr.css'
import { useRef } from 'react'

const Navbarr = () => {
  
  const dropRef = useRef()

  const showDrop = (e) => {
    const clickedItem = e.target

    if(clickedItem.classList.contains('dropdown-toggle')) {
      dropRef.classList.toggle('show')
    }
  }

 
 

  return (
    <nav class="navbar navbar-expand-lg navbar-light border-rad">
  <a class="navbar-brand" href="#"><img src={logo} alt="" width={141}/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span><HiBars3CenterLeft /></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item cursor-pointer">
        <Link class="nav-link " to="#">Ana səhifə <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item cursor-pointer">
        <Link className="nav-link nav-link" to="features" spy={true} smooth={true} offset={50} duration={500}> Haqqımızda</Link>
      </li>
      <li class="nav-item dropdown cursor-pointer">
        <Link class="nav-link dropdown-toggle" onClick={showDrop} to="#" spy={true} smooth={true} offset={50} duration={500} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Xidmətlərimiz
        </Link>
        <div class="dropdown-menu" ref={dropRef} aria-labelledby="navbarDropdown">
          <Link class="dropdown-item cursor-pointer" to="custom" spy={true} smooth={true} offset={100} duration={500}>Fərdi</Link>
          <Link  class="dropdown-item cursor-pointer" to="corporative" >Korporativ</Link>
        
        </div>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Əlaqə</a>
      </li>
     
    </ul>
  
  </div>
</nav>
  )
}

export default Navbarr