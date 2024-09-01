import "./Homeservice.css";
import { Link } from "react-router-dom";
const Homeservice = () => {
  return (
    <>
      <div className="homeservicemainfinalframe">
        <h1 className="homeserviceh3">Our Services</h1>
        <div className="Homeservicemaincoontainer">
          <div className="homeserviceframes">
            <div className="homeservice hs1">
              <div className="homeservicetitleend">
                <Link to="/services" className="homeservicetitleendLink">web Development </Link>
              </div>
              <div className="homeservicedetailcontainer">
                <p className="homeservip">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur, minus? Facilis quos omnis expedita optio officia
                  numquam debitis, saepe esse ipsum magnam similique.
                </p>
                <img
                  src="src/assets/homeserviceimg/web.jpeg"
                  alt=""
                  className="homeserviceimg"
                />
              </div>
            </div>
          </div>
          <div className="homeserviceframes">
            <div className="homeservice hs2">
              <div className="homeservicetitle">
                <Link to="/services" className="homeservicetitleendLink">Mobile App Development </Link>
              </div>
              <div className="homeservicedetailcontainer">
                <img
                  src="src/assets/homeserviceimg/mobile.jpeg"
                  alt=""
                  className="homeserviceimg"
                />
                <p className="homeservip">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur, minus? Facilis quos omnis expedita optio officia
                  numquam debitis, saepe esse ipsum magnam similique.
                </p>
              </div>
            </div>
          </div>
          <div className="homeserviceframes">
            <div className="homeservice hs1">
              <div className="homeservicetitleend">
                <Link to="/services" className="homeservicetitleendLink">Graphics Designing </Link>
              </div>
              <div className="homeservicedetailcontainer">
                <p className="homeservip">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur, minus? Facilis quos omnis expedita optio officia
                  numquam debitis, saepe esse ipsum magnam similique.
                </p>
                <img
                  src="src/assets/homeserviceimg/graphics.jpeg"
                  alt=""
                  className="homeserviceimg"
                />
              </div>
            </div>
          </div>
          <div className="homeserviceframes">
            <div className="homeservice hs2">
              <div className="homeservicetitle">
                <Link to="/services" className="homeservicetitleendLink">Photography </Link>
              </div>
              <div className="homeservicedetailcontainer">
                <img
                  src="src/assets/homeserviceimg/photography.jpeg"
                  alt=""
                  className="homeserviceimg"
                />
                <p className="homeservip">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur, minus? Facilis quos omnis expedita optio officia
                  numquam debitis, saepe esse ipsum magnam similique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeservice;
