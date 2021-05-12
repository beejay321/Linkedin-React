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

function SkillsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Add New Skill
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Skills</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label className="text-muted">Top Skills</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              placeholder=" Skill ( ex: Data Analysis)"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SkillsModal;
