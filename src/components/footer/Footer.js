import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "./../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-dark text-white container-fluid mt-5  footer ">
      <Container className="mt-5">
        <Row>
          <Col className="py-5 " xs={12} md={4} lg={4}>
            <div className="container">
              <h2>Our Office</h2>
              <p className="w-50">
                324 Yarang Road, T.Chabangtigo, Muanng Pattani 9400
              </p>
              <p className="w-50">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>{" "}
                </span>
                +662-547-2223
              </p>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-fill "
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                  {"  "}
                  travel-forest[at]gmail.com
                </span>
              </p>
            </div>
          </Col>
          <Col className="text-center py-5 mt-3" xs={12} md={4} lg={4}>
            <div className="container">
              <h1>Travel Forest</h1>

              <img src={logo} alt="" width="60 px" />
            </div>
          </Col>
          <Col className="py-5" xs={12} md={4} lg={4}>
            <div className="container">
              <h2>Links</h2>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} className=" container-fluid ">
            <h6 className="text-center w-100">
              &copy; Copyright Travel Forest. 2022 All Rights Reserved
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
