import React from "react"
import {
  Modal,
  Button,
  Form,
  FormControl,
  Col,
  Row,
  InputGroup,
} from "react-bootstrap"
import { useState } from "react"

function ModalShow(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div onClick={handleShow}>
        {" "}
        <i class="bi bi-plus fs-3"></i>{" "}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
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
                type="text"
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
            <Button
              as="input"
              type="submit"
              value="Submit"
              variant="outline-primary"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Delete</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

class ModalForm extends React.Component {
  state = {}

  render() {
    return <ModalShow />
  }
}

export default ModalForm
