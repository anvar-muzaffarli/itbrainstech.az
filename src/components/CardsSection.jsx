import './CardsSection.css'
import Card from './Card'
import serviceData from './services.json'

const CardsSection = () => {
  return (
    <section class="section home-feature">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
                    {
                        serviceData.map((data,index)=> (
                            <Card index={index} name={data.service_name} desc={data.description} />
                        ))
                    }
           
                  
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default CardsSection