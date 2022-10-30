import './Welcome.css'
import Typed from 'react-typed'


const Welcome = () => {
  return (
    <div class="welcome-area" id="welcome">

   
    <div class="header-text">
        <div class="container">
            <div class="row">
                <div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                <Typed
                className='typed-text'
                strings={[
                    'Lorem ipsum dolor sit.',
                    'IT Brains Academy',
                    'ITBTech']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                    
                    
                </Typed>
                    <p>Burada sizin reklamınız ola bilərdi</p>
                   
                </div>
            </div>
        </div>
    </div>
   
</div>
  )
}

export default Welcome