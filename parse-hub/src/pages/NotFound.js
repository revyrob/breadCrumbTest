import React from "react";
import chevron from "../assets/icons/chevron.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="title">
        Sorry this page has no data. The route you want to take is Home{" "}
        <img src={chevron} alt="chevron" /> 'Press Here'{" "}
        <img src={chevron} alt="chevron" /> Accessories{" "}
        <img src={chevron} alt="chevron" /> Camera Lenses{" "}
        <img src={chevron} alt="chevron" /> Choose any
      </div>
      <div className="title">
        <Link to={"/"}>
          {" "}
          <Button variant="warning">Go Home</Button>{" "}
        </Link>
      </div>
    </>
  );
}

export default NotFound;
