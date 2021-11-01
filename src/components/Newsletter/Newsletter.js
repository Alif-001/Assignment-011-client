import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Newsletter = () => {
  return (
    <Container fluid="md " className="border rounded p-2">
      <Row>
        <Col className="d-flex py-5 ">
          <div className="col text-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-envelope-fill  mb-2
              "
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
            </svg>
          </div>
          <div className=" col-4">
            <h5>Signup for Newsletter</h5>
            <p className="container p-0 m-0 ">
              Affronting everything discretion men now own did. Still round
              match we to. Frankness pronounce daughters remainder extensive has
              but.
            </p>
          </div>
          <div className="col-7 ms-3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <div className="d-flex">
                  <Form.Control type="email" placeholder="Enter email" />
                  <Button
                    className="btn btn-primary mx-2 text-nowrap"
                    type="button"
                  >
                    SIGN-IN
                  </Button>
                </div>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Newsletter;
