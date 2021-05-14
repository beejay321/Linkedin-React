import React from "react";
import "../Post.css";
import { Card, Col, Row, Image, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const LeftColumnTwo = (props) => {
  return (
    <Card className="feedLeft-card">
      <Card.Header className="p-0">
        <Image
          className="feedLeft-cover-img img-fluid"
          src="https://via.placeholder.com/400x80/0000FF/808080/"
        />
        <Image className="feedLeft-profile-img" src={props.image} />
      </Card.Header>
      <Card.Body>
        <span>
          Hello
          {props.name}
          {props.lastname}
        </span>
        <p className="text-muted">{props.title}</p>
      </Card.Body>
      <Card.Body>
        <p>aaaaaaaaaaaaaa</p>
        <p>{props.name}</p>
        <hr />
        <p>Connections</p>
        <hr />
        <p>Connections</p>
        <hr />
        <p>Connections</p>
      </Card.Body>
    </Card>
  );
};
export default LeftColumnTwo;
