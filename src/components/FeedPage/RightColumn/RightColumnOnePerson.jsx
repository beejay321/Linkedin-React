import React from "react";
import "../../Sidebar/Sidebar.css";
import { Image, Row, Col, Button, Card } from "react-bootstrap";
import "../Post.css";

const RightColumnOnePerson = (props) => {
  return (
    <>
      <Row>
        <Col xs={3}>
          <Image className="sidebar-img" src={props.image} />
        </Col>
        <Col xs={9} className="align-text-bottom">
          <Card.Link className="sidebar-person-name">
            {props.name} {props.surname}
          </Card.Link>
          <span className="sidebar-span text-muted">{" \u2022 "}</span>
          <span className="sidebar-span text-muted">2nd</span>
          <p className="sidebar-p text-muted">{props.title}</p>
        </Col>
        <Col xs={3}></Col>
        <Col xs={9}>
          <Button
            id="RightColumn-follow-btn"
            className="sidebar-btn text-muted mb-3 mt-1"
            variant="outline-dark"
            size="sm"
          >
            <span class="bi bi-plus"></span>
            <span id="follow-text">Follow</span>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default RightColumnOnePerson;
