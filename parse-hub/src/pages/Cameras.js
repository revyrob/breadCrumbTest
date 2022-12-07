import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CameraItems from "../components/CameraItems/CameraItems";
import chevron from "../assets/icons/chevron.svg";

function Cameras() {
  //state to hold backend electronic data
  const [path, setPath] = useState("unknown");
  const [options, setOptions] = useState("Empty");
  const [isLoading, setLoading] = useState(true);

  //get the info from the backedn
  //set the path for component
  //set the info with setOption
  //set the loading while we wait for the info from the backend
  useEffect(() => {
    axios.get("http://localhost:8080/electronics").then((response) => {
      setPath(Object.keys(response.data));
      setOptions(response.data.Cameras);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <>
      <div className="path">
        <Link to={"/"}>Home</Link> <img src={chevron} alt="chevron" /> {path}{" "}
      </div>
      <section className="cameras">
        <h1 className="title">Cameras Catelog</h1>
        <div className="cameras__cat">
          {/* div that maps through the CameraItems and has a link that goes through
              the appropriate path */}

          {options.map((item) => (
            <CameraItems
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

export default Cameras;
