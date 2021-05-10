import { Button, Container, Row, Navbar, Form, Col } from "react-bootstrap";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class Footer extends React.Component {
  render() {
    return (
        
      <Container fluid="md">
        <hr />
        <Row>
          <Col className="mr-2">
            <i class="bi bi-question-circle-fill fs-5"></i>{" "}
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <ul>
              <li className="footerlist">About</li>
              <li className="footerlist">Community Guidelines</li>
              <li className="footerlist">Privacy & Terms </li>
              <li className="footerlist">Sales Solutions</li>
              <li className="footerlist">Safety Center</li>
            </ul>
          </Col>
          <Col xs={2}>
            <ul>
              <li className="footerlist">Accessibility</li>
              <li className="footerlist">Careers</li>
              <li className="footerlist">Ad Choices</li>
              <li className="footerlist">Mobile</li>
            </ul>
          </Col>
          <Col xs={2}>
            <ul>
              <li className="footerlist">Talent Solutions</li>
              <li className="footerlist">Marketing Solutions</li>
              <li className="footerlist">Advertising</li>
              <li className="footerlist">Small Business</li>
            </ul>
          </Col>

          <Col xs={3}>
            <ul>
              <li className="footerlist">
                {/* <i class="bi bi-question-circle-fill fs-5"></i>{" "} */}
                <span>
                  <a>Questions</a> <br />
                  <p className="text-muted">Visit our Help Center</p>
                </span>
              </li>
              <li className="footerlist">
                {" "}
                {/* <i class="bi bi-gear-fill fs-5"></i>{" "} */}
                <span>
                  <a>Manage your account and Privacy</a>
                  <p className="text-muted">Go to your Settings</p>{" "}
                </span>
              </li>
            </ul>
          </Col>
          <Col xs={3}>
            <ul>
              <li className="selectlanguage">
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Select Language</Form.Label>
                  <Form.Control as="select">
                    <option>English</option>
                    <option>Deutsch</option>
                    <option>French</option>
                    <option>Arabic</option>
                    <option>Italian</option>
                  </Form.Control>
                </Form.Group>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Footer);
