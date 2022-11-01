import './About.css'
import about from '../assets/undraw/about/about-left.svg'
import aboutRight from '../assets/undraw/about-right.svg'
const About = () => {
  return (
    <>
    
    <div id='about' className='p-5 mt-5'>
        <h1 className='text-center p-5'>About us</h1>
   
    <section class="section padding-top-70 padding-bottom-0" id="features">
        <div class="container">
            <div class="row">
                <div  class="col-lg-4 col-md-12 col-sm-12 mr-2" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src={about} class="rounded img-fluid d-block mx-auto" alt="App" className='about' />
                </div>
               
                <div class="col-lg-6 col-md-12 col-sm-12 align-self-end mobile-top-fix">
                    <div class="left-heading">
                        <h2 class="section-title">Let’s discuss about you project</h2>
                    </div>
                    <div class="text-left">
                        <p>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="hr"></div>
                </div>
            </div>
        </div>
    </section>
    </div>

    </>
  )
}

export default About