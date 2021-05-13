import React from "react";
import {
  Modal,
  Button,
  Form,
  FormControl,
  Col,
  Row,
  InputGroup,
} from "react-bootstrap";
import { useState } from "react";
import "../CardProfile.css";
import MediaModal from "./MediaModal";

const AddPostModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        id="postbutton"
        variant="outline"
        size="md"
        className="text-muted "
      >
        Start a Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              id="text"
              // value={props.text}
              onChange={props.handleChange}
              as="textarea"
              rows={3}
              placeholder="What do you want to talk about?"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Body className="d-flex justify-content-between ">
          <div className="addpostfooterbtn-section d-flex justify-content-between ">
            <Button className="addpostfooterbtn mx-1">
              <Row>
                <Col>
                  <MediaModal id={props.id} />
                </Col>
              </Row>
            </Button>

            <Button className="addpostfooterbtn mx-1">
              <Row>
                <Col>
                  <i className="bi bi-camera-video-fill"></i>
                </Col>
              </Row>
            </Button>

            <Button className="addpostfooterbtn mx-1">
              <Row>
                <Col>
                  <i className="bi bi-calendar-event"></i>
                </Col>
              </Row>
            </Button>

            <Button className="addpostfooterbtn mx-1">
              <Row>
                <Col>
                  <i className="bi bi-blockquote-right"></i>
                </Col>
              </Row>
            </Button>
          </div>
          <div>
            <Button onClick={props.submitPost} type="submit" variant="primary">
              Post
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddPostModal;
