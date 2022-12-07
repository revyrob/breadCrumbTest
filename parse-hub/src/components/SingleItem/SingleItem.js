import React from "react";
import "./SingleItem.scss";
function SingleItem({ lense }) {
  return (
    <>
      <h1 className="title">{lense.product}</h1>
      <div className="singleItem">
        {" "}
        <img
          className="singleItem__img"
          src={lense.image}
          alt={lense.product}
        />
      </div>
    </>
  );
}

export default SingleItem;
