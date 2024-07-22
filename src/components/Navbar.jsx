import React from "react";

export default function navbar() {
  return (
    <div className="nav">
      <img src="src/assets/bmslogo.png" alt="Logo" className="img" />
      <form>
        <input
          type="search"
          placeholder="Search for Movies,Events,Plays,Sports and Activites"
          aria-label="Search"
        />
        <i class="fa fa-search" aria-hidden="true"></i>
        
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Select Location &#x25BE;
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
    <div class="modal-header">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search for Location" />
              </div>
              <div class="modal-body">
                <a href="#">
                  <img src="src/assets/location/Mumbai.png" />
                  Mumbai
                </a>
                <a href="#">
                  <img src="src/assets/location/Delhi-NCR.png" />
                  Delhi
                </a>
                <a href="#">
                  <img src="src/assets/location/Bengaluru.png" />
                  Bengaluru
                </a>
                <a href="#">
                  <img src="src/assets/location/Hyderabad.png" />
                  Hyderabad
                </a>
                <a href="#">
                  <img src="src/assets/location/Ahmedabad.png" />
                  Ahmedabayderabadd <br />
                </a>
                <a href="#">
                  <img src="src/assets/location/Chandigarh.png" />
                  Chandigarh
                </a>
                <a href="#">
                  <img src="src/assets/location/Chennai.png" />
                  Chennai
                </a>
                <a href="#">
                  <img src="src/assets/location/Pune.png" />
                  Pune <br />
                </a>
                <a href="#">
                  <img src="src/assets/location/Kolkata.png" />
                  Kolkata
                </a>
                <a href="#">
                  <img src="src/assets/location/Kochi.png" />
                  Kochi
                </a>
              </div>
    </div>
  </div>
</div>
        <button className="si"><a href="/login"> LogIn</a></button>
        <p>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </p>
      </form>
      <div className="navbar">
        <ul>
          <li>
            <a href="/movies">Movies Trailer</a>
          </li>
          <li>
            <a href="#">Stream</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Plays</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
          <li>
            <a href="#">Activites</a>
          </li>
          <li>
            <a href="#">Buzz</a>
          </li>
          <li>
            <a href="#">ListYourShow</a>
          </li>
          <li>
            <a href="#">Corporates</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
        </ul>
      </div>
      <div
        id="carouselExampleInterval"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <img
              src="src/assets/imgc/carimg1.jpg"
              class="d-block"
            />
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img
              src="src/assets/imgc/carimg2.jpg"
              class="d-block"
            />
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img
              src="src/assets/imgc/carimg3.jpg"
              class="d-block"/>
          </div>
        </div>
      </div>
      <a href="/movie"><h2 className="h2">Movie Booking</h2></a>
            <div className="movies" >
              <div>
                <a href="/leo">
                  <img src="src/assets/imgm/Leo.jpg" class="dblock" />
                  <h2>Leo</h2>
                </a>
                <h6>Action/Drama/Thriller</h6>
              </div>
              <div>
                <a href="/jawan">
                  <img src="src/assets/imgm/Jawan.jpg" class="dblock" />
                  <h2>Jawan</h2>
                </a>
                <h6>Action/Drama/Thriller</h6>
              </div>
              <div>
                <a href="/jailer">
                  <img src="src/assets/imgm/jailer.jpg" class="dblock" />
                  <h2>Jailer</h2>
                </a>
                <h6>Action/Drama/Thriller</h6>
              </div>
              <div>
                <a href="/devara">
                  <img src="src/assets/imgm/Devara.jpg" class="dblock" />
                  <h2>Devara</h2>
                </a>
                <h6>Action/Drama/Thriller</h6>
              </div>
              <div>
                <a href="/salaar">
                  <img src="src/assets/imgm/Salaar.jpg" class="dblock" />
                  <h2>Salaar</h2>
                </a>
                <h6>Action/Drama/Thriller</h6>
              </div>
            </div>
      
      <div className="bar">
        <img src="src/assets/bmslogo.png" />
        <h3>STREAM</h3>
        <h2>Endless Entertainment Anytime.Anywhere!</h2>
      </div>

      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div className="carousel-item active">
            <div className="events" id="event">
              <div>
                <img src="src/assets/imge/ev1.png" className="eblock" />
              </div>
              <div>
                <img src="src/assets/imge/ev2.png" className="eblock" />
              </div>
              <div>
                <img src="src/assets/imge/ev3.png" className="eblock" />
              </div>
              <div>
                <img src="src/assets/imge/ev4.png" className="eblock" />
              </div>
              <div>
                <img src="src/assets/imge/ev5.png" className="eblock" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="events" id="event">
              <div>
                <img src="src/assets/imge/ev4.png" className="eblock" />
              </div>
              <div>
                <img src="src/assets/imge/ev5.png" className="eblock" />
              </div>
              <div>
                <img src="src/assets/imge/ev6.png" className="eblock" />
              </div>
              <div>
                <img src="src/assets/imge/ev7.png" className="eblock" />
              </div>
              <div>
                <img src="src/assets/imge/ev8.png" className="eblock" />
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="premiere">
        <img src="src/assets/1000.jpg" />
        <h2>Premieres</h2>
        <h4>Brand new releases every friday</h4>
        <img className="ig" src="src/assets/10002..jpg"  />
        <img className="ig" src="src/assets/10003.jpg"  />
        <img className="ig" src="src/assets/10004.jpg"  />
        <img className="ig" src="src/assets/10005.jpg"  />
      </div>
    </div>
  );
}
