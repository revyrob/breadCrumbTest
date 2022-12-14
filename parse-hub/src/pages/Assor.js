import React from "react";
import { Link } from "react-router-dom";
import Accor from "../components/CameraAccor/Accor";
import { useState, useEffect } from "react";
import axios from "axios";
import chevron from "../assets/icons/chevron.svg";

function CameraAssor() {
  //states for path, info from backend, and loading
  const [path, setPath] = useState("unknown");
  const [options, setOptions] = useState("Empty");
  const [isLoading, setLoading] = useState(true);

  //call backend, get info, set states
  useEffect(() => {
    axios.get("http://localhost:8080/electronics").then((response) => {
      setOptions(response.data.Cameras[2].Accessories);
      setPath(Object.keys(response.data.Cameras[2])[0]);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <>
      <div className="path">
        <Link to={"/"}>Home</Link> <img src={chevron} alt="chevron" />{" "}
        <Link to={"/home/cameras"}>Cameras</Link>{" "}
        <img src={chevron} alt="chevron" /> {path}
      </div>
      <section className="cameras">
        <h1 className="title">Cameras Accessories</h1>
        <div className="cameras__cat">
          {/* div that maps through the CameraItems and has a link that goes through
              the appropriate path */}

          {options.map((item) => (
            <Accor
              id={item.id}
              key={item.id}
              product={item.product}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default CameraAssor;
