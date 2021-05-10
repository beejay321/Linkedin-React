import {
  Button,
  Container,
  Form,
  FormControl,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import React from "react";
import { Link, withRouter } from "react-router-dom";

class MyNav extends React.Component {
  render() {
    return (
      // <h1>Linked in </h1>
      <Navbar bg="light" variant="white">
        <Container>
          <Nav className="mr-auto">
            <Navbar.Brand href="#home">
              <i className="bi bi-linkedin"></i>
            </Navbar.Brand>
            <Form>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#mynetwork">My Network</Nav.Link>
            <Nav.Link href="#jobs">Jobs</Nav.Link>
            <Nav.Link href="#pricing">Messaging</Nav.Link>
            <Nav.Link href="#pricing">Notifications</Nav.Link>
            <NavDropdown title="Me" id="basic-nav-dropdown"></NavDropdown>
            <NavDropdown title="Work" id="basic-nav-dropdown"></NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(MyNav);
