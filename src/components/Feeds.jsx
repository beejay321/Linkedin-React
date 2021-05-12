import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../CardProfile.css";
import AddPost from "./AddPost";
import GetPost from "./AddPost";
import React from "react";

class Feeds extends React.Component {
  state = {
    user: {},
    userExperiences: [],
  };
  
  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ user: data });
        console.log(this.state.user);
      }
    } catch (error) {
      console.log(error);
    }


  };

  render() {
    console.log(this.state);
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col xs={3}>{/* <h1>first column</h1> */}</Col>
            <Col xs={6}>
              <AddPost image={this.state.user.image} />
              {/* <GetPost /> */}
            </Col>
            <Col xs={3}>{/* <h1>third column</h1> */}</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Feeds;