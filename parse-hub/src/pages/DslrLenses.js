import { Link } from "react-router-dom";
import cameras from "../assets/images/cameras.png";

function DslrLenses() {
  //this is the parent therefore i want to call to the backend and get the
  //information and pass it on through children

  //fill in the path with the data I get from the backend
  return (
    <>
      <div className="path">
        <Link to={"/"}>Home</Link> - Cameras -
      </div>
      <section className="cameras">
        <h1>Cameras Catelog</h1>
        <div className="cameras__cat">
          <Link to={"/"}>
            <img src={cameras} alt="camera1" />
          </Link>
          <img src={cameras} alt="camera2" />
          <img src={cameras} alt="camera3" />
        </div>
      </section>
    </>
  );
}

export default DslrLenses;
