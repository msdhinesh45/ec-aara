import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import "./Global.css";

function UncontrolledExample() {

  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="top-Carousel" style={{ backgroundColor: "#8a2b6d", color: "white" }}>
      <Carousel controls={false} indicators={false} interval={3000} pause={false}>
        <Carousel.Item>
          <p className="text-center mt-2">Welcome to our store</p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="text-center mt-2">
            Fashion frenzy: Upto 60% off on all styles
          </p>
        </Carousel.Item>
      </Carousel>
{/* <button  className="button btn-close btn-close-white"  aria-label="Close" onClick={() => setShow(false)}>
      </button>  */}
    </div>
  );
}

export default UncontrolledExample;
