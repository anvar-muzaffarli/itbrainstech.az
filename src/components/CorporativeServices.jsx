import './CorporativeServices.css'
import sebeke from '../assets/undraw/services/system.svg'
import web from '../assets/undraw/services/web.svg'
import digitalMarketing from '../assets/undraw/services/digital-marketing.svg'
import graphic from '../assets/undraw/services/graphic.svg'
import helpdesk from '../assets/undraw/services/helpdesk.svg'
const CorporativeServices = () => {
  return (
    <div className='corporative mt-5' id='corporative'>
        <h1 className='display-1 p-5 text-center corporative-text'>Corporative services</h1>
        <div className="row mx-auto">
            <div className="col-12 col-md-6 col-lg-4 ml-5 mt-5  d-flex justify-content-center" data-aos="fade-right">
                    <img src={sebeke} alt="" className='corporativeimg mt-5' />
            </div>

            <div className="col-12 col-md-6 col-lg-6 p-5 mt-5" data-aos="fade-left">
                <h1 className='text-right display-4 mb-5'>System and Network</h1>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, ullam totam officiis perspiciatis, laudantium earum voluptatibus, obcaecati repellendus exercitationem dolorum saepe dignissimos quae. Alias corrupti adipisci soluta odit nulla. Nisi impedit iure nulla cumque modi corporis, ipsam maiores repellendus quae illum maxime, alias laudantium. Sunt labore perspiciatis mollitia culpa totam.</p>
            </div>
            </div>

<div className="row mx-auto">


            <div className="col-12 col-md-6 col-lg-4 ml-5 d-flex flex-column justify-content-center" data-aos="fade-right">
            <h1 className='display-4 pt-5 mt-2 ml-5 mb-5 container'>Web</h1>
                <p className='ml-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, optio tempore repudiandae enim eius ipsum fugit repellendus itaque! Cum dolore vitae dolorem ea blanditiis perspiciatis illo id quas voluptatum itaque.</p>
            </div>

            <div className="col-12 col-md-6 col-lg-6 mt-5 d-flex justify-content-end" data-aos="fade-left">
                <img src={web} alt="" className='corporativeimg' />
            </div>
            </div>


            <div className="row mx-auto">
            <div className="col-12 col-md-6 col-lg-4 ml-5 mt-5  d-flex justify-content-center" data-aos="fade-right">
                    <img src={digitalMarketing} alt="" className='corporativeimg' />
            </div>

            <div className="col-12 col-md-6 col-lg-6 p-5 mt-5" data-aos="fade-left">
                <h1 className='text-right display-4 mb-5'>Digital Marketing</h1>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, ullam totam officiis perspiciatis, laudantium earum voluptatibus, obcaecati repellendus exercitationem dolorum saepe dignissimos quae. Alias corrupti adipisci soluta odit nulla. Nisi impedit iure nulla cumque modi corporis, ipsam maiores repellendus quae illum maxime, alias laudantium. Sunt labore perspiciatis mollitia culpa totam.</p>
            </div>
            </div>

<div className="row mx-auto">


            <div className="col-12 col-md-6 col-lg-4 ml-5 d-flex flex-column justify-content-center" data-aos="fade-right">
            <h1 className='display-4 pt-5 mt-2 ml-5 mb-5 container'>Graphic and motion design</h1>
                <p className='ml-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, optio tempore repudiandae enim eius ipsum fugit repellendus itaque! Cum dolore vitae dolorem ea blanditiis perspiciatis illo id quas voluptatum itaque.</p>
            </div>

            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-end" data-aos="fade-left">
                <img src={graphic} alt="" className='corporativeimg' />
            </div>
            </div>

            <div className="row mx-auto">
            <div className="col-12 col-md-6 col-lg-4 ml-5 mt-5  d-flex justify-content-center" data-aos="fade-right">
                    <img src={helpdesk} alt="" className='corporativeimg mt-5' />
            </div>

            <div className="col-12 col-md-6 col-lg-6 p-5 mt-5" data-aos="fade-left">
                <h1 className='text-right display-4 mb-5'>Helpdesk Technician</h1>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, ullam totam officiis perspiciatis, laudantium earum voluptatibus, obcaecati repellendus exercitationem dolorum saepe dignissimos quae. Alias corrupti adipisci soluta odit nulla. Nisi impedit iure nulla cumque modi corporis, ipsam maiores repellendus quae illum maxime, alias laudantium. Sunt labore perspiciatis mollitia culpa totam.</p>
            </div>
            </div>

          
    </div>
  )
}

export default CorporativeServices