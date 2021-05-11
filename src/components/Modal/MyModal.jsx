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

function ModalShow() {
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
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="role..." />
          </Form.Group>
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
