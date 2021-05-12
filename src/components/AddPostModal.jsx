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

const AddPostModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} variant="secondary" size="md" block>
        Start a Post
      </Button>
      <h1>{this.props.title}</h1>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              id="createpost"
              //   value={this.props.text}
              //   onChange={this.props.handleChange}
              as="textarea"
              rows={3}
              placeholder="What do you want to talk about?"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            // onClick={this.props.submitPost}
            type="submit"
            variant="primary"
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPostModal;
