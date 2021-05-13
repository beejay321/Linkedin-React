import { Card, Image, Form, Button, Row, Col } from "react-bootstrap";
import "../CardProfile.css";
import AddPostModal from "./AddPostModal";
import MediaModal from "./MediaModal";
import ModalForm from "./MyModal";
import React from "react";

class AddPost extends React.Component {
  state = {
    text: "",
    post: "",
  };
  submitPost = async (e) => {
    // let's prevent the default browser behavior
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(this.state.text),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDliYzRmMDkwNTY0YTAwMTU4OGU3M2YiLCJpYXQiOjE2MjA4MjEyMzMsImV4cCI6MTYyMjAzMDgzM30.SbwSggBFs6g6jZgb3C710s3gG93tcV5Fupko2NkKc-w",
          },
        }
      );

      if (response.ok) {
        alert("your post was successful");
        const post = await response.json();
        console.log(post._id);
        this.setState({
          text: "",
          post: post._id,
        });
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    let id = e.target.id;
    this.setState({
      text: { [id]: e.target.value },
    });
  };

  render() {
    // console.log(this.props);

    return (
      <>
        <Card>
          <Card.Body className="d-flex ">
            <Image src={this.props.image} height="40" roundedCircle />

            {/* <Button variant="secondary" size="md" block>
            Start a Post
          </Button> */}
            <AddPostModal
              handleChange={this.handleChange}
              submitPost={this.submitPost}
              text={this.state.text}
              id={this.state.post}
            />
          </Card.Body>
          <Card.Body>
            <div className="addpostfooterbtn-section d-flex justify-content-between ">
              {/* <MediaModal submitPost={this.props.submitPost} /> */}

              {/* <Button className="addpostfooterbtn mx-1">
                <Row>
                  <Col> */}
              <MediaModal id={this.state.post} />

              {/* <i className="bi bi-card-image"></i> */}
              {/* </Col>
                  <Col className=" addposttext">
                    <span> Photo</span>
                  </Col>
                </Row>
              </Button> */}

              <Button className="addpostfooterbtn mx-1">
                <Row>
                  <Col>
                    <i className="bi bi-camera-video-fill"></i>
                  </Col>
                  <Col className=" addposttext">
                    <span> Video</span>
                  </Col>
                </Row>
              </Button>

              <Button className="addpostfooterbtn mx-1">
                <Row>
                  <Col>
                    <i className="bi bi-calendar-event"></i>
                  </Col>
                  <Col className=" addposttext">
                    <span> Event</span>
                  </Col>
                </Row>
              </Button>

              <Button className="addpostfooterbtn mx-1">
                <Row>
                  <Col>
                    <i className="bi bi-blockquote-right"></i>
                  </Col>
                  <Col className=" addposttext">
                    <span> Article</span>
                  </Col>
                </Row>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AddPost;
