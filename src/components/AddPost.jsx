import { Card, Image, Form, Button, Badge } from "react-bootstrap";
import "../CardProfile.css";
import AddPostModal from "./AddPostModal";
import ModalForm from "./MyModal";
import React from "react";

class AddPost extends React.Component {
  state = {
    text: "",
  };
  submitPost = async (e) => {
    // let's prevent the default browser behavior
    e.preventDefault();
    console.log(this.state.reservation);
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
        this.setState({
          text: "",
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
    console.log(this.props);

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
            />
          </Card.Body>
          <Card.Body className="d-flex justify-content-between">
            <Button variant="secondary" size="md">
              <span class="badge badge-dark">Photo</span>
            </Button>{" "}
            <Button variant="secondary" size="md">
              <span class="badge badge-light">Video</span>
            </Button>{" "}
            <Button variant="secondary" size="md">
              <span class="badge badge-light">Event</span>
            </Button>{" "}
            <Button variant="secondary" size="md">
              <span class="badge badge-light">Write article</span>
            </Button>{" "}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AddPost;