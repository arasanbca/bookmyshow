import React from 'react'

const Carousel = () => {
return(

<div>
<div
        id="carouselExampleInterval"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <img src="src/assets/carousel img/carimg1.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img src="src/assets/carousel img/carimg2.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img src="src/assets/carousel img/carimg3.jpg" class="d-block w-100" />
          </div>
        </div>
    
      </div>
</div>

  
)


}
export default Carousel
