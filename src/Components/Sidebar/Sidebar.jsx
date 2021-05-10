import React, { useState } from "react";
import "./Sidebar.css";
import { Row, Col, ListGroup, Collapse } from "react-bootstrap";
import SidebarPerson from "./SidebarPerson.jsx";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          <h4 id="sidebar-heading">People also viewed</h4>
          <Row>
            <SidebarPerson />
            <SidebarPerson />
            <SidebarPerson />
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Show More
          </h4>
          <Collapse in={open}>
            <Row id="example-collapse-text">
              <SidebarPerson />
              <SidebarPerson />
            </Row>
          </Collapse>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default Sidebar;
// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTNmYjYxOWU1ZDAwMTUxZjhmODUiLCJpYXQiOjE2MjA2NDQ4NTksImV4cCI6MTYyMTg1NDQ1OX0.fm075zxqUowsPdcnZmh_76d_SkR-rUgg6MQK86gOvm0
