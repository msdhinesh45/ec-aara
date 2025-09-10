import React from "react";
import AboutAara from "./About";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./Home.css";
function MyCarousel() {
  return (
    <>
      <Carousel fade interval={1000} indicators={false} pause={false} controls={false}>
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="mask flex-center">
            <Container>
              <Row className="align-items-center">
                <Col md={7} xs={12} className="order-md-1 order-2">
                  <span className="carousel-title display-4">
                    <strong>
                      <span style={{ color: "#761c5a" }}>Welcome Aara-</span> <br />
                      The Designer Studio </strong>
                  </span>
                  <p className="mt-2">
                    Best Quality Fabrics - Classy Designs - Affordable Pricing
                  </p>
                  <a className="btn img-btn p-3" href="#">Shop Collection</a>
                </Col>
                <Col md={5} xs={12} className="order-md-2 order-1">
                  <img
                    id="img"
                    src="https://captionstags.com/wp-content/uploads/2024/05/traditional-kurti-captions-for-instagram.webp"
                    className="img-fluid  mx-auto d-block mt-4 "
                    alt="slide1"
                    height={"100"}
                    width={"600"}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        {/* <Carousel.Item>
        <div className="mask flex-center">
          <Container>
            <Row className="align-items-center">
              <Col md={7} xs={12} className="order-md-1 order-2">
                <span className="carousel-title display-4">
                  <strong>
                  <span style={{color:"#761c5a"}}>Welcome Aara-</span> <br />
                  The Designer Studio </strong>
                </span>
                <p className="mt-2">
                  Best Quality Fabrics - Classy Designs - Affordable Pricing
                </p>
                <a className="btn img-btn p-3" href="#">Shop Collection</a>
              </Col>
              <Col md={5} xs={12} className="order-md-2 order-1">
                <img
                id="img"
                  src="https://captionstags.com/wp-content/uploads/2024/05/traditional-kurti-captions-for-instagram.webp"
                  className="img-fluid mx-auto d-block mt-4"
                  alt="slide2"
                  height={"100"}
                  width={"600"}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item> */}

        {/* Slide 3 */}
        {/* <Carousel.Item>
        <div className="mask flex-center">
          <Container>
            <Row className="align-items-center">
              <Col md={7} xs={12} className="order-md-1 order-2">
                <span className="carousel-title display-4">
                  <strong>
                  <span style={{color:"#761c5a"}}>Welcome Aara-</span> <br />
                  The Designer Studio </strong>
                </span>
                <p className="mt-2">
                  Best Quality Fabrics - Classy Designs - Affordable Pricing
                </p>
                <a className="btn img-btn p-3" href="#">Shop Collection</a>
              </Col>
              <Col md={5} xs={12} className="order-md-2 order-1">
                <img
                id="img"
                  src="https://captionstags.com/wp-content/uploads/2024/05/traditional-kurti-captions-for-instagram.webp"
                  className="img-fluid mx-auto d-block mt-4"
                  alt="slide3"
                  height={"100"}
                  width={"600"}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item> */}
      </Carousel>
      <AboutAara />
    </>
  );
}

export default MyCarousel;
