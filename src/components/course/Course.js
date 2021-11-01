import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const Course = ({ course }) => {
  const history = useHistory();
  const { _id, img, title, details, price } = course;

  const { addToCart, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;
  return (
    <Col sm={12} md={6} lg={4}>
      <div className="my-2">
        <Card className="mx-auto" style={{ width: "21rem" }}>
          <Card.Img variant="top" style={{ minHeight: "220px" }} src={img} />
          <Card.Body className="my-1 py-1">
            <Card.Title>{title.slice(0, 25)}</Card.Title>
            <Card.Text>{details.slice(0, 180)}...</Card.Text>
          </Card.Body>
          <Card.Body className="my-1 py-1">
            <h4>USD : {price}</h4>
          </Card.Body>
          <Card.Body className="my-1 py-1"></Card.Body>
          <Card.Body className="d-flex">
            <NavLink
              to={`/courses/${_id}`}
              className="btn btn-primary w-100 me-1"
            >
              Book Now
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Course;
