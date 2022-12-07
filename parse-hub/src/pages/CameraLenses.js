import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import chevron from "../assets/icons/chevron.svg";
import { useParams } from "react-router-dom";
import LenseItem from "../components/LenseItem/LenseItem";
import SingleItem from "../components/SingleItem/SingleItem";

function CameraLenses() {
  //states for path, loading, options, lenses and useParams for the item
  const [path, setPath] = useState("unknown");
  const [options, setOptions] = useState("Empty");
  const [isLoading, setLoading] = useState(true);
  const [lense, setLense] = useState("");
  const { lenseId } = useParams(); // from url param

  const getOptions = () => {
    axios
      .get("http://localhost:8080/electronics")
      .then((response) => {
        setOptions(response.data.Cameras[2].Accessories[0].Lenses);
        setPath(Object.keys(response.data.Cameras[2].Accessories[0])[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  //function for get the info from the id for each lense
  const getLenseById = (id) => {
    axios
      .get(`http://localhost:8080/electronics/${id}`)
      .then((response) => {
        console.log(response.data);
        setLense(response.data);
      })
      .catch((err) => console.log(err));
  };

  //useEffect for if there is a lenseId in params
  //if no params sset the options of lenses
  useEffect(() => {
    if (lenseId !== undefined) {
      getLenseById(lenseId);
    } else {
      getOptions();
    }
  }, [lenseId]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  //have a tenary statement in the return so that if we have a param
  //we are shown just the one item
  //if there is no param then show all the lenses
  return (
    <>
      {lenseId !== undefined ? (
        <div className="path">
          <Link to={"/"}>Home</Link> <img src={chevron} alt="chevron" />{" "}
          <Link to={"/home/cameras"}>Cameras</Link>{" "}
          <img src={chevron} alt="chevron" />{" "}
          <Link to={"/home/cameras/accessories"}>Accessories</Link>{" "}
          <img src={chevron} alt="chevron" />{" "}
          <Link to={"/home/cameras/accessories/lenses"}>Lenses</Link>
          <img src={chevron} alt="chevron" /> {lense.product}
          <SingleItem lense={lense} />
        </div>
      ) : (
        <div className="path">
          <Link to={"/"}>Home</Link> <img src={chevron} alt="chevron" />{" "}
          <Link to={"/home/cameras"}>Cameras</Link>{" "}
          <img src={chevron} alt="chevron" />{" "}
          <Link to={"/category/cameras/accessories"}>Accessories</Link>{" "}
          <img src={chevron} alt="chevron" /> {path}
          <section className="cameras">
            <h1 className="title">Cameras Lenses</h1>
            <div className="cameras__cat">
              {options.map((item) => (
                <LenseItem
                  id={item.id}
                  key={item.id}
                  product={item.product}
                  image={item.image}
                  link={item.link}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default CameraLenses;
