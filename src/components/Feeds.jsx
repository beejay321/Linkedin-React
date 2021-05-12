import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../CardProfile.css";
import ModalForm from "./MyModal";
import GetPost from "./FeedPage/GetPost";
const Feeds = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={3}>
            <h1>first column</h1>
          </Col>
          <Col xs={6}>
            {/* <AddPost /> */}
            <GetPost />
          </Col>
          <Col xs={3}>
            <h1>third column</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Feeds;
