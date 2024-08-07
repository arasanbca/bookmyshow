import React from "react";

export default function D2() {
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

        <button
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Select Location &#x25BE;
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
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
                  Delhi{" "}
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
        <button className="si">Sign In</button>
        <p>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </p>
      </form>
      <div className="navbar">
        <ul>
          <li>
            <a href="/movie">Movies</a>
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
      <div class="movie_item">
      <img className="im" src="src/assets/imgc/dream2.jpg"/>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dlC1tNsr-n8?si=CeFycxcWaKH5mhuN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <br />
        <br />
        <a href="/movies">
          <button type="submit">Back</button>
        </a>
      </div>
    </div>
  );
}
