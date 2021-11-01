import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./../hooks/useAuth.js";

const Details = () => {
  const history = useHistory();
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const { addToCart, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;

  useEffect(() => {
    fetch(`https://morning-everglades-39414.herokuapp.com/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?._id) {
          setCourse(data);
        } else {
          // history.push("/home");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  }, [id]);

  return (
    <div className="my-4">
      {course?.title ? (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={12}>
              <h2 className="mt-5">{course.title}</h2>
              <hr className="text-danger mb-5" />
              <img className="img-fluid rounded" src={course.img} alt="" />
            </Col>
            <Col
              md={12}
              className="d-flex justify-content-center flex-column container"
            >
              <p className="my-4 w-50 ">{course.details}</p>
              <Row>
                <Col>
                  <h1>USD:{course.price}</h1>
                  <div className="my-2">
                    <button
                      onClick={() => {
                        if (uid) {
                          addToCart(course);
                          history.push("/dashboard");
                        } else {
                          history.push("/login");
                        }
                      }}
                      className="btn btn-primary  my-4"
                    >
                      Add To Cart
                    </button>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">No Package Found</h1>
        </div>
      )}
    </div>
  );
};

export default Details;
