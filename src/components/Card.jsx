import React from 'react'


const Card = ({name,desc}) => {
  return (
    <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s" data-scroll-reveal-id="1" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
    <div class="features-small-item">
        <div class="icon">
            <i><img src="assets/images/featured-item-01.png" alt="" /></i>
        </div>
        <h5 class="features-title">{name}</h5>
        <p>{desc}</p>
    </div>
</div>
  )
}

export default Card