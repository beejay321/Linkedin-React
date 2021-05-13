import React, { Component } from "react"
// import { Modal } from "react-responsive-modal";
import {
  Modal,
  Button,
  Form,
  FormControl,
  Col,
  Row,
  InputGroup,
} from "react-bootstrap"

class ModalInClassComponents extends Component {
  state = {
    post: "",
    show: false,
  }
  onClickButton = (e) => {
    e.preventDefault()
    this.setState({ openModal: true })
  }
  onCloseModal = () => {
    this.setState({ openModal: false })
  }

  uploadImage = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    // formData.append("file", myFileInput.files[0]);

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${this.props.id}`,
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDliYzRmMDkwNTY0YTAwMTU4OGU3M2YiLCJpYXQiOjE2MjA4MjEyMzMsImV4cCI6MTYyMjAzMDgzM30.SbwSggBFs6g6jZgb3C710s3gG93tcV5Fupko2NkKc-w",
          },
        }
      )

      if (response.ok) {
        alert("your image has been saved")
        this.setState({
          text: "",
        })
      } else {
        alert("something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.onClickButton}
          // id="postbutton"
          variant="outline"
          size="md"
          className="addpostfooterbtn mx-1 text-muted "
        >
          <Row>
            <Col>
              <i className="bi bi-card-image"></i>
            </Col>
            {/* <Col className=" addposttext">
              <span> Photo</span>
            </Col> */}
          </Row>
        </Button>

        <Modal show={this.state.openModal} onHide={this.onCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="selectimages">
              {/* <Form>
                <Form.Group>
                  <Form.Control type="file" />
                </Form.Group>
              </Form> */}
              <form enctype="multipart/form-data" method="post" name="fileinfo">
                <input type="file" name="file" required />
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer className=" addpostfooterbtn-section d-flex justify-content-between ">
            <div>
              <Button type="submit" variant="primary">
                Back
              </Button>
              <Button
                onClick={this.uploadImage}
                type="submit"
                variant="primary"
              >
                Done
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ModalInClassComponents
