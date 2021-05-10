import {
  InputGroup,
  Container,
  Form,
  Col,
  Row,
  FormControl,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../Nav.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class MyNav extends React.Component {
  render() {
    return (
      // <h1>Linked in </h1>
      <>
        <Navbar bg="light" variant="white">
          <Container className="mx-auto">
            <Nav className="mr-auto mb-3">
              <Navbar.Brand href="#home">
                <h1>
                  <i className="bi bi-linkedin fs-1 "></i>
                </h1>
              </Navbar.Brand>

              <Form className="mt-2">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i class="bi bi-search"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                </InputGroup>
              </Form>
            </Nav>

            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <i className="bi bi-house-door-fill"></i>
                <p>Home</p>
              </Nav.Link>
              <Nav.Link href="#mynetwork">
                {" "}
                <i className="bi bi-people-fill"></i>
                <p>My Network</p>
              </Nav.Link>
              <Nav.Link href="#jobs">
                <i className="bi bi-briefcase-fill"></i> <p>Jobs</p>
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <i className="bi bi-chat-dots-fill"></i>
                <p>Messaging</p>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <i className="bi bi-bell-fill"></i>
                <p>Notifications</p>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <i className="bi bi-person-circle"></i> <p> Me</p>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <i className="bi bi-grid-3x3-gap-fill"></i> <p> Work</p>
              </Nav.Link>

              {/* <NavDropdown title="Work" id="basic-nav-dropdown">
                    <i className="bi bi-grid-3x3-gap-fill"></i>
                  </NavDropdown> */}
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withRouter(MyNav);
