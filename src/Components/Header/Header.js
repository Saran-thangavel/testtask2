import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" style={{ padding: "2%" }}>
        <Container style={{ display: "flex" }}>
          <Navbar.Brand className="navbar-brand" href="#">
            ToDo App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Item>
                <NavLink
                  to="#"
                  className="text-muted"
                  style={{ textDecoration: "none" }}
                >
                  Profile
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/home"
                  className="text-muted"
                  style={{ textDecoration: "none", marginLeft: "20%" }}
                >
                  Home
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
