import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "./../../assets/images/img1.jpg";
import img2 from "./../../assets/images/img2.jpg";

const Testmonial = () => {
  return (
    <Container className="border mt-5 pt-2 rounded">
      <div>
        <h1> Testimonial </h1>
        <hr className="text-danger mb-3" />
        <h6>What our customers say about us</h6>
      </div>
      <Row>
        <Col className="d-flex mt-2">
          <div>
            <img className="img-fluid rounded" src={img1} alt="" />
          </div>

          <div className="mx-3">
            <h5>Antony Robert</h5>
            <p>From Spain</p>
            <p>
              She meant new their sex could defer child. An lose at quit to life
              do dull. Moreover end horrible endeavor entrance any families.
              Income appear extent on of thrown in admire.
            </p>
          </div>
        </Col>
        <Col className="d-flex mt-3">
          <div>
            <img className="img-fluid  rounded" src={img2} alt="" />
          </div>
          <div className="mx-2">
            <h5>Mohammed Salem</h5>
            <p>From Turkey</p>
            <p>
              Consider now provided laughter boy landlord dashwood. Often voice
              and the spoke. No shewing fertile village equally prepare up
              females sentiments increasing particular.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Testmonial;
