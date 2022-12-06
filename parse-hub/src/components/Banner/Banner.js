import React from "react";
import "./Banner.scss";
import camera from "../../assets/images/camera.png";
import christmas from "../../assets/images/christmas.png";
import headphones from "../../assets/images/headphone.png";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

function Banner() {
  return (
    <section className="banner">
      <div className="banner__wrapper">
        <img
          className="banner__img--xmas"
          src={christmas}
          alt="christmas sales"
        />

        <div className="banner__lower">
          <img className="banner__img--lower" src={camera} alt="camera sales" />

          <Link to={"/home/cameras"}>
            {" "}
            <Button variant="warning" className="btn-camera">
              Press Here
            </Button>{" "}
          </Link>
          <img
            className="banner__img--lower"
            src={headphones}
            alt="headphones sales"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
