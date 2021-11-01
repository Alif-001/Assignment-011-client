import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth.js";

const Cart = () => {
  const { selectedCourse, remove, setSelectedCourse, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;

  const history = useHistory();
  const totalPrice = selectedCourse.reduce(
    (total, course) => total + course.price,
    0
  );

  return (
    <div className="my-4">
      <Container>
        {selectedCourse.length ? (
          <Row>
            <Col className="" md={8}>
              {selectedCourse.map((course) => {
                const { img, _id, title, details, price } = course;

                return (
                  <Row className="my-2 " key={_id}>
                    <Col className="p-0 mt-5" sm={5}>
                      <img className="img-fluid " src={img} alt="" />
                    </Col>
                    <Col className="mt-5" sm={7}>
                      <h4>{title}</h4>
                      <p className="mb-0 py-2">{details}</p>
                      <h4>Price: {price}</h4>
                      <Row>
                        <Col sm={8}>
                          <div className="d-flex">
                            <NavLink
                              to={`/home`}
                              className="btn btn-primary w-100 me-2"
                            >
                              Home
                            </NavLink>

                            <button
                              onClick={() => remove(_id)}
                              className="btn btn-danger  w-100"
                            >
                              Remove
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
            </Col>
            <Col className="text-center container m-auto " md={4}>
              <h4>Total {selectedCourse.length} Package selected</h4>
              <h6>Total Price: {totalPrice.toFixed(2)}</h6>

              <button
                onClick={() => {
                  fetch(
                    `https://morning-everglades-39414.herokuapp.com/purchase/${uid}`,
                    {
                      method: "delete",
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.deletedCount > 0) {
                        Swal.fire(
                          "Good job!",
                          "You booked this Package Successfully!",
                          "success"
                        );
                        setSelectedCourse([]);
                      }
                    });
                }}
                className="btn btn-primary"
              >
                Check Out
              </button>
            </Col>
          </Row>
        ) : (
          <div className="text-center my-5 py-5">
            <h1> Package Not Selected!</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
