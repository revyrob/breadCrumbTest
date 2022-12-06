import React from "react";
import { Link } from "react-router-dom";

function CameraItems({ product, image, link }) {
  return (
    <div className="cameraItems">
      {" "}
      <Link to={`/category/cameras/${link}`}>
        <img className="cameraItems__img" src={image} alt={product} />
      </Link>
    </div>
  );
}

export default CameraItems;
