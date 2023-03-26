import React from "react";
import "./Style.css";


function Resturant() {
  const image = "imhhgv";
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-auther subtle">Breakfast</span>
            <h2 className="card-title">Maggi</h2>
            <span className="card-description subtle">
              hi hsdds sdasd asdsasd asdas asd asd asd asd asd asdsas asd asd
              ads sdasd asdsasd asdas asd asd sdasd asdsasd asdas asd asd 
              sdasd asdsasd asdas asd asd sdasd asdsasd asdas asd asd.
            </span>
            <div className="card-read">Read</div>
          </div>
          <img src={image} alt="images" className="card-media" />
          <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
    </>
  );
}

export default Resturant;
