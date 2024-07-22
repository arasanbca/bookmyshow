import React from 'react'

 function card() {
  return (
<div>
<h2 className='h2'>Recommended Movies</h2>
<div id="carouselExampleControls" class="carousel carousel-primary slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="movies" id='movie'>
          <div><a href="/"><img src="src/assets/images m/Leo..jpg" class="dblock"/><h2>Leo</h2></a><h6>Action/Drama/Thriller</h6></div>
          <div><a href="/"><img src="src/assets/images m/Jawan.jpg" class="dblock"/><h2>Jawan</h2></a><h6>Action/Drama/Thriller</h6></div>
          <div><a href="/"><img src="src/assets/images m/Mamannan.jpg" class="dblock"/><h2>Mamannan</h2></a><h6>Action/Drama/Thriller</h6></div>
          <div><a href="/"><img src="src/assets/images m/Devara.jpg" class="dblock"/><h2>Devara</h2></a><h6>Action/Drama/Thriller</h6></div>
          <div><a href="/"><img src="src/assets/images m/Salaar.jpg" class="dblock"/><h2>Salaar</h2></a><h6>Action/Drama/Thriller</h6></div>
        
      </div>
    </div>
   
  </div>
</div>
<div className='bar'>
  <img src='src/assets/carousel img/bms.png'/>
  <h3>STREAM</h3>
  <div><h2>Endless Entertainment Anytime.Anywhere!</h2></div>
</div>




<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
  <div className="carousel-item active">
      <div className="events" id='event'>
        <div><img src="src/assets/Events img/ev1.png" className='eblock'/></div>
        <div><img src="src/assets/Events img/ev2.png" className='eblock'/></div>
        <div><img src="src/assets/Events img/ev3.png" className='eblock'/></div>
        <div><img src="src/assets/Events img/ev4.png" className='eblock'/></div>
        <div><img src="src/assets/Events img/ev5.png" className='eblock'/></div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="events" id='event'>
        <div><img src="src/assets/Events img/ev4.png" className="eblock" /></div>
        <div><img src="src/assets/Events img/ev5.png" className="eblock" /></div>
        <div><img src="src/assets/Events img/ev6.png" className="eblock" /></div>
        <div><img src="src/assets/Events img/ev7.png" className="eblock" /></div>
        <div><img src="src/assets/Events img/ev8.png" className="eblock" /></div>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

  )
}
export default card