import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CameraItems from "../components/CameraItems/CameraItems";
import chevron from "../assets/icons/chevron.svg";

function CameraLenses() {
  const [path, setPath] = useState("unknown");
  const [options, setOptions] = useState("Empty");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/electronics").then((response) => {
      setOptions(response.data.Cameras[2].Accessories[0].Lenses);
      setPath(Object.keys(response.data.Cameras[2].Accessories[0])[0]);
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
        <img src={chevron} alt="chevron" />{" "}
        <Link to={"/category/cameras/accessories"}>Accessories</Link>{" "}
        <img src={chevron} alt="chevron" /> {path}
      </div>
      <section className="cameras">
        <h1>Cameras Lenses</h1>
        <div className="cameras__cat">
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

export default CameraLenses;
