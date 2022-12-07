import React from "react";
import { Link } from "react-router-dom";

//camera accessories items
function Accor({ product, image, link }) {
  return (
    <div>
      {" "}
      <Link to={`/category/cameras/accessories/${link}`}>
        <img src={image} alt={product} />
      </Link>
    </div>
  );
}

export default Accor;
