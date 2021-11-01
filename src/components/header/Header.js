import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth.js";
import logo from "./../../assets/images/logo.png";
import "./header.css";

const Header = () => {
  const { AllContexts } = useAuth();
  const { user, logOut } = AllContexts;
  const { displayName, photoURL, email, uid } = user;
  return (
    <div className="">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} className="text-white" to="/home">
            <img width="40px" src={logo} alt="Logo" />{" "}
            <span className="title fw-bold">Travel Forest</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/home" className="text-white">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about" className="text-white">
                About
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact" className="text-white">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/courses" className="text-white">
                Packages
              </Nav.Link>

              {!displayName ? (
                <>
                  <Nav.Link className="text-white" as={NavLink} to="/login">
                    Log in
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={HashLink} to="/admin" className="text-white">
                    Manage All Booking
                  </Nav.Link>
                  <Nav.Link
                    as={HashLink}
                    to="/dashboard"
                    className="text-white"
                  >
                    My Booking
                  </Nav.Link>
                  <Nav.Link>
                    {" "}
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                      }}
                      src={photoURL}
                      alt=""
                    />
                  </Nav.Link>{" "}
                  <Nav.Link className="text-white px-2  fw-bold">
                    {displayName}
                  </Nav.Link>
                  <span className="text-center">
                    <button
                      onClick={logOut}
                      className="btn btn-secondary rounded"
                    >
                      Log Out
                    </button>{" "}
                  </span>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
