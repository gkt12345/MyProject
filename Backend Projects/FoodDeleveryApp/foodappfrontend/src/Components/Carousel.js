import React from "react";

function Carousel() {
  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div class="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <div class="carousel-item active">
            <img src="https://source.unsplash.com/random/300×300/?burger" class="d-block w-100" style={{ filter: "brightness(30%)", height:"500px" }} alt="..."/>
          </div>
          <div class="carousel-item active">
            <img src="https://source.unsplash.com/random/300×300/?pastry" class="d-block w-100" style={{ filter: "brightness(30%)", height:"500px" }} alt="..." />
          </div>
          <div class="carousel-item active">
            <img src="https://source.unsplash.com/random/300×300/?samosa" class="d-block w-100" style={{ filter: "brightness(30%)", height:"500px" }} alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
