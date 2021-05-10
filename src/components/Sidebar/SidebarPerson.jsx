import React, { useState } from "react";
import "./Sidebar.css";
import { Image, Row, Col, Button } from "react-bootstrap";

function SidebarPerson() {
  return (
    <>
      <Col xs={4}>
        <Image
          className="sidebar-img"
          src="https://placeimg.com/640/480/people"
          roundedCircle
        />
      </Col>
      <Col xs={8}>
        <span>Person 1 </span>
        <span className="text-muted">{"\u2022"}</span>
        <span className="text-muted"> 2nd</span>
        <p className="text-muted">Cras justo odio</p>
        <Button
          className="sidebar-btn text-muted"
          variant="outline-dark"
          size="sm"
        >
          Message
        </Button>
      </Col>
    </>
  );
}

export default SidebarPerson;
// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTNmYjYxOWU1ZDAwMTUxZjhmODUiLCJpYXQiOjE2MjA2NDQ4NTksImV4cCI6MTYyMTg1NDQ1OX0.fm075zxqUowsPdcnZmh_76d_SkR-rUgg6MQK86gOvm0
