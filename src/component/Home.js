import React from "react";
import Shop from "../Photo/Shop.jpg";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="Hero">
        <div className="card text-bg-dark border-0">
          <img
            src={Shop}
            className="card-img"
            alt="Background"
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-colum">
            <div className="container"></div>
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text">CHECH OUT ALL TRENDS</p>
          </div>
        </div>
        <Product />
      </div>
    </>
  );
}

export default Home;
