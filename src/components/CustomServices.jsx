import './CustomServices.css'
import sebeke from '../assets/undraw/services/system.svg'
import web from '../assets/undraw/services/web.svg'
import digitalMarketing from '../assets/undraw/services/digital-marketing.svg'
import graphic from '../assets/undraw/services/graphic.svg'
import helpdesk from '../assets/undraw/services/helpdesk.svg'
const CustomServices = () => {
  return (
    <div className='corporative my-5 custom-services' id='custom'>
        <h1 className='display-1 p-5 text-center custom-text'>Custom services</h1>
        <div className="row mx-auto">
            <div className="col-12 col-md-6 col-lg-4 ml-5 mt-5  d-flex justify-content-center" data-aos="fade-right">
                    <img src={sebeke} alt="" className='corporativeimg mt-5' />
            </div>

            <div className="col-12 col-md-6 col-lg-6 p-5 mt-5" data-aos="fade-left">
                <h1 className='text-right display-4 mb-5'>System and Network</h1>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo atque recusandae porro, accusamus in rerum asperiores quis odit dicta praesentium mollitia fugiat a quibusdam officiis saepe sed deserunt voluptas facilis consequuntur commodi! Quisquam aspernatur laudantium atque nam voluptatem officia quibusdam praesentium ut doloremque eius quia impedit nobis, culpa pariatur repellendus molestiae natus accusamus earum? Vero molestias consequuntur iure quae nulla quia ipsam quo, ex cupiditate eaque laudantium, provident, nesciunt architecto neque excepturi suscipit quod assumenda! Assumenda placeat voluptatem expedita aliquid porro distinctio, corrupti fugiat vero autem quos maiores veritatis molestias sapiente error totam quam ipsa voluptate laborum at neque!</p>
            </div>
            </div>

<div className="row mx-auto">


            <div className="col-12 col-md-6 col-lg-4 ml-5 d-flex flex-column justify-content-center" data-aos="fade-right">
            <h1 className='display-4 pt-5 mt-2 ml-5 mb-5 container'>Web</h1>
                <p className='ml-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa non iste fugiat? Voluptate, excepturi ipsa. Molestias rem accusamus ipsa aut placeat eveniet sed minus blanditiis aspernatur? Dignissimos minima explicabo, assumenda sed repellendus a ducimus itaque magnam esse incidunt velit blanditiis? Harum enim maiores tenetur voluptates, fugiat asperiores ipsa laborum sit iste, assumenda, incidunt aspernatur veniam eius aut tempore corrupti aliquam ipsam explicabo omnis quo laboriosam. Quaerat ipsa, reprehenderit distinctio voluptate optio corrupti sequi voluptatibus ducimus! Architecto earum vero in incidunt, eligendi quaerat quia mollitia iste harum iusto nesciunt quidem, fuga, sint perferendis consectetur blanditiis velit voluptate ipsa molestias laboriosam.</p>
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

export default CustomServices