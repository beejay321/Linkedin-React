import React from "react"
import JumboProfile from "./JumboProfile"
import { Container, Row, Col } from "react-bootstrap"

class Home extends React.Component {
  state = {}

  render() {
    return (
      <Container>
        <Row>
          <Col xs={8}>
            <JumboProfile />
          </Col>
          <Col xs={4}></Col>
        </Row>
      </Container>
    )
  }
}

export default Home
