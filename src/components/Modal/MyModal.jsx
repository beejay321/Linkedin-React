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

// const url = `https://striveschool-api.herokuapp.com/${api}/profile/${id}/experience/${id}`;
//delete
//post
//edit

export default function Example() {


  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <i class="bi bi-plus fs-3" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Experience (make prop)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>
          <br />
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Employment Type</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
          <br />
          <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="mb-2 text-muted"
            label="I am currently working in this role"
          />
          <br />
          <Row>
            <Form.Label>Start Date</Form.Label>
            <Col xs={3}>
              <Form.Control as="select">
                <option>Month</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Col>
            <Col xs={3}>
              <Form.Control as="select">
                <option>Year</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Col>

            <Form.Label>End Date</Form.Label>
            <Col xs={3}>
              <Form.Control as="select">
                <option>Month</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Col>
            <Col xs={3}>
              <Form.Control as="select">
                <option>Year</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Col>
          </Row>
          <br />
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <br />
          <Form.Group>
            <Row>
              <Col xs={6}>
                <Button className="w-100">Upload</Button>
              </Col>
              <Col xs={6}>
                <Button className="w-100 ">Link</Button>
              </Col>
            </Row>
            <br />
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Add</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
