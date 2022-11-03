import './Counter.css'

import CountUp from 'react-countup/build'
const Counter = () => {
  return (
    <section class="facts-area py-5 py-lg y-tangerine-border" id="facts">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center gap-2 mb-4 m-md-0 aos-init aos-animate" data-aos="" data-aos-duration="1000">
                <span class="display-1 fw-bold"><CountUp end={84} duration={5} /></span>
                <p class="mb-0">Lorem, ipsum.</p>
            </div>
            <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center gap-2 my-4 m-md-0 aos-init aos-animate" data-aos="" data-aos-duration="1000">
                <span class="display-1 fw-bold"><CountUp end={9} duration={1} /></span>
                <p class="mb-0">Lorem, ipsum.</p>
            </div>
            <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center gap-2 my-4 my-md-0 mt-md-5 m-lg-0 aos-init aos-animate" data-aos="" data-aos-duration="1000">
                <span class="display-1 fw-bold"><CountUp end={327} duration={1} /></span>
                <p class="mb-0">Lorem, ipsum.</p>
            </div>
            <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center gap-2 mt-4 my-md-0 mt-md-5 m-lg-0 aos-init aos-animate" data-aos="" data-aos-duration="1000">
                <span class="display-1 fw-bold"><CountUp end={149} duration={10} /></span>
                <p class="mb-0">Lorem, ipsum.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Counter