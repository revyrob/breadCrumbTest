import React from "react";
import { Link } from "react-router-dom";

//lense item for when listing all the lenses on the lenses page
function LenseItem({ id, image, product }) {
  return (
    <div className="LenseItems">
      {" "}
      <Link to={`/category/cameras/accessories/lenses/${id}`}>
        <img className="LenseItems__img" src={image} alt={product} />
      </Link>
    </div>
  );
}

export default LenseItem;
