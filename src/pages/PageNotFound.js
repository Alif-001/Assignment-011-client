import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img404 from "./../assets/images/404.gif";

const PageNotFound = () => {
  return (
    <div className="container mb-5">
      <div className=" container mb-5">
        {" "}
        <img
          className=" d-flex justify-content-center mx-auto "
          src={img404}
          alt=""
          width="50%"
        />
        <div className="mb-5">
          <button className="btn btn-danger fw-bold notFound-btn mx-auto  d-flex justify-content-center">
            <Nav.Link as={NavLink} to="/home" className="text-white ">
              Back to home
            </Nav.Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
