import React from "react";
import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Course from "../components/course/Course.js";
import Newsletter from "../components/Newsletter/Newsletter.js";
import Testmonial from "../components/Testmonial/Testmonial.js";
import useAuth from "../hooks/useAuth.js";
import About from "./About.js";

const Home = () => {
  const { courses } = useAuth();
  return (
    <div>
      <div className="bg-img">
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <div>
                <h1 className="text-white">Tour with Tour Forest</h1>
              </div>

              <div>
                <p className="my-4 text-white fs-5">
                  Visit Europe, America, Asia, Africa or beyond!
                </p>
              </div>

              <div>
                <NavLink
                  to="/courses"
                  className="rounded btn btn-primary fs-5 py-2 px-4"
                >
                  Book Now
                </NavLink>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div id="feature" className="py-5 container">
        <div className="text-start ">
          <h1>Our Top Packages</h1>
          <hr className="text-danger " />
        </div>

        <Container>
          <div className="my-3 d-flex flex-wrap justify-content-between">
            <Row>
              {courses.slice(0, 6)?.map((course) => (
                <Course key={course.key} course={course} />
              ))}
            </Row>
          </div>{" "}
          <div className="mt-5">
            <About></About>
          </div>
          <div className="mt-5">
            <Testmonial></Testmonial>
          </div>
          <div className="mt-5">
            <Newsletter></Newsletter>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
