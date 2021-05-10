import React from "react"
import JumboProfile from "./JumboProfile"
import { Container, Row, Col } from "react-bootstrap"
import Sidebar from "./Sidebar/Sidebar"

class Home extends React.Component {
  state = {}

  render() {
    return (
      <Container>
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>
            <Row>
              <Col xs={8}>
                <JumboProfile />
              </Col>
              <Col xs={4}>
                <Sidebar />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
