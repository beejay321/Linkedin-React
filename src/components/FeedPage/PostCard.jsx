import React from "react";
import "./Post.css";
import {
  Card,
  Col,
  Row,
  Image,
  InputGroup,
  FormControl,
  Button,
  Accordion,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import MediaModal from "../MediaModal";

function PostCard(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Card className="mt-2 mb-3">
        <Card.Header className="bg-white border-0">
          <Row>
            <Col className="float-left" xs={2}>
              <Image className="getPost-img" src={props.image} />
            </Col>
            <Col xs={8} className="align-text-bottom">
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
            <Col className="float-right" xs={1}>
              <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-none-secondary"
                title={<i class="bi bi-three-dots"></i>}
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <Button className="bg-white border-0"></Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="py-0">
          <p>{props.text}</p>
          <hr className="text-muted m-0 p-0" />
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <Col className="getPost-comment-section">
              <Button className="getPost-like-btn mx-1">
                <Row>
                  <span>
                    <i class="bi bi-hand-thumbs-up"></i> Like
                  </span>
                </Row>
              </Button>

              <Button className="getPost-comment-btn mx-1">
                <Row>
                  <span>
                    <i class="bi bi-chat-right-dots"></i> Comment
                  </span>
                </Row>
              </Button>

              <Button className="getPost-share-btn mx-1">
                <Row>
                  <span>
                    <i class="bi bi-folder-symlink"></i> Share
                  </span>
                </Row>
              </Button>

              <Button className="getPost-send-btn mx-1">
                <Row>
                  <span>
                    <i class="bi bi-cursor"></i>
                    Send
                  </span>
                </Row>
              </Button>
            </Col>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Row className="mt-3">
              <Col xs={2}>
                <Image className="getPost-comment-img" src={props.image} />
              </Col>
              <Col xs={10} className="align-text-bottom">
                <InputGroup className="mb-3">
                  <FormControl
                    className="getPost-commentInput"
                    aria-label="Text input with checkbox"
                    placeholder="Add a comment..."
                  />
                  <MediaModal id = {props.id} />

                  <Button
                    className="getPost-commentSend-btn mx-1"
                    type="submit"
                    disabled
                  >
                    <i class="bi bi-reply"></i>
                  </Button>
                </InputGroup>
              </Col>
            </Row>
          </Accordion.Collapse>
        </Card.Body>
      </Card>
    </Accordion>
  );
}

export default PostCard;
