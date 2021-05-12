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
import "../ExpEduCard.css";

function EditExperience(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>
        {" "}
        <i id="exp-pencil" class="bi bi-pencil fs-7"></i>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.handleSubmit}>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                id="role"
                type="text"
                placeholder="Role..."
                value={props.role}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                id="company"
                type="text"
                placeholder="Company Name..."
                value={props.company}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start date</Form.Label>
              <Form.Control
                id="startDate"
                type="datetime-local"
                placeholder="Start date..."
                value={props.startDate}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>description</Form.Label>
              <Form.Control
                id="description"
                type="text-area"
                placeholder="description..."
                value={props.description}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Area</Form.Label>
              <Form.Control
                id="area"
                type="text"
                placeholder="Area..."
                value={props.area}
                onChange={props.handleChange}
              />
            </Form.Group>
            <div className="d-flex justify-content-between my-3">
              <Button
                as="input"
                type="submit"
                value="Delete"
                variant="outline-primary"
              />
              <Button
                as="input"
                type="submit"
                value="Submit"
                variant="outline-primary"
              />
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditExperience;
