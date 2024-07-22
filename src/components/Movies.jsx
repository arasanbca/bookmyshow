import React from "react";

export default function Movies() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <img src="src/assets/10001.jpg" class="d-block" />
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img src="src/assets/10002.jpg" class="d-block" />
          </div>
        </div>
      </div>
      <div className="movies">
        <div>
          <a href="/le">
            <img src="src/assets/imgm/Leo.jpg" class="dblock" />
            <h2>Leo</h2>
          </a>
          <h6>Action/Drama/Thriller</h6>
        </div>
        <div>
          <a href="/jw">
            <img src="src/assets/imgm/Jawan.jpg" class="dblock" />
            <h2>Jawan</h2>
          </a>
          <h6>Action/Drama/Thriller</h6>
        </div>
        <div>
          <a href="/ja">
            <img src="src/assets/imgm/jailer.jpg" class="dblock" />
            <h2>Jailer</h2>
          </a>
          <h6>Action/Drama/Thriller</h6>
        </div>
        <div>
          <a href="/de">
            <img src="src/assets/imgm/Devara.jpg" class="dblock" />
            <h2>Devara</h2>
          </a>
          <h6>Action/Drama/Thriller</h6>
        </div>
        <div>
          <a href="/sa">
            <img src="src/assets/imgm/Salaar.jpg" class="dblock" />
            <h2>Salaar</h2>
          </a>
          <h6>Action/Drama/Thriller</h6>
        </div>
      </div>
      <div className="movies">
        <div>
          <a href="/kok">
            <img src="src/assets/imgm/img2.jpg" class="dblock" />
            <h2>King Of Kotha</h2>
          </a>
          <h6>Action/Drama/Thriller</h6>
        </div>
        <div>
          <a href="/pa">
            <img src="src/assets/imgm/img4.jpg" class="dblock" />
            <h2>Partner</h2>
          </a>
          <h6>Action/Drama/Thriller</h6>
        </div>
        <div>
          <a href="/ad">
            <img src="src/assets/imgm/adiye.jpg" class="dblock" />
            <h2>Adiye</h2>
          </a>
          <h6>Action/Drama/Thriller</h6>
        </div>
        <div>
          <a href="/hs">
            <img src="src/assets/imgm/Hidden Strike.jpg" class="dblock" />
            <h2>Hidden Strike</h2>
          </a>
          <h6>Action/Drama/Thriller</h6>
        </div>
        <div>
          <a href="/d2">
            <img src="src/assets/imgm/dream2.jpg" class="dblock" />
            <h2>Dream 2</h2>
          </a>
          <h6>Action/Drama/Thriller</h6>
        </div>
      </div>
      <a href="/">
        <button type="submit">Back</button>
      </a>
    </div>
  );
}
