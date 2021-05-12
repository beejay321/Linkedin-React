import React from "react";
import "./Post.css";
import { Card, Col, Row, Image } from "react-bootstrap";

function PostCard(props) {
  return (
    <Card>
      <Card.Header>
        <Col xs={3}>
          <Image className="sidebar-img" src={props.image} />
        </Col>
        <Col xs={9} className="align-text-bottom">
          <span className="getPost-person-name font-weight-bold">
            {props.firstname} {props.lastname}{" "}
            <span className="sidebar-span text-muted">{" \u2022 "}</span>
          </span>{" "}
          <span className="sidebar-span text-muted">2nd</span>
          <br />
          <span className="text-muted">{props.title}</span>
          <br />
          <span className="text-muted">{props.updatedDate}</span>
        </Col>
      </Card.Header>
      <Card.Body>
        <p>{props.text}</p>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
