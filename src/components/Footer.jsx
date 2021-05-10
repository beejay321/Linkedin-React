import { Button, Container, Row, Navbar, Nav, Col } from "react-bootstrap";
import React from "react";
import { Link, withRouter } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ul>
              <li>About</li>
              <li>Community Guidelines</li>
              <li>Privacy & Terms </li>
              <li>Sales Solutions</li>
              <li>Safety Center</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Accessibility</li>
              <li>Careers</li>
              <li>Ad Choices</li>
              <li>Mobile</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>About</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>About</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>About</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Footer);