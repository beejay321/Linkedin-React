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
      <div onClick={handleShow}>
        {" "}
        <i id="aboutpencil" class="bi bi-pencil fs-8"></i>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reorder skills & endorsements</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label className="text-muted">
              Reorder your skills within a category or choose up to 3 skills to
              feature in your top skills.
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-muted">Top Skills</Form.Label>
            <Form.Control as="textarea" rows={1} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SkillsModal;
