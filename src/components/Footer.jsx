import './Footer.css'
import {FiFacebook,FiInstagram, FiLinkedin} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <ul class="social">
                        <li><a href="#"><FiInstagram /></a></li>
                        <li><a href="#"><FiFacebook /></a></li>
                        <li><a href="#"><FiLinkedin /></a></li>
                        
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <p class="copyright">Copyright © 2022 Anvar Khalid - IT Brains Academy</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer