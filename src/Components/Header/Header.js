import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Spinner from "react-bootstrap";

const Header = () => {
  const [loading, setLoading] = useState(false);
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
                <Nav.Link href="#">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
