import React from "react";
import { Link } from "react-router-dom";
import Accor from "../components/CameraAccor/Accor";
import { useState, useEffect } from "react";
import axios from "axios";
import chevron from "../assets/icons/chevron.svg";

function CameraAssor() {
  //this is the parent therefore i want to call to the backend and get the
  //information and pass it on through children

  const [path, setPath] = useState("unknown");
  const [options, setOptions] = useState("Empty");
  const [isLoading, setLoading] = useState(true);

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
        <h1>Cameras Accessories</h1>
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
