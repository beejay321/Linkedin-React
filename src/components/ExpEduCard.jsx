import { Row, Col } from "react-bootstrap"
import "../ExpEduCard.css"
import ModalForm from "./MyModal"
import React from "react"

class ExpEduCard extends React.Component {
  state = {
    expId: this.props.id,
    userId: this.props.userId,
    experience: { ...this.props.experience },
    formRequest: "",
  }

  handleEdit = async (e) => {
    e.preventDefault()
    console.log("ciaociao")
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.state.userId}/experiences/${this.state.expId}`,
        {
          method: "PUT",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.experience),
        }
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  handleDelete = async (e) => {
    e.preventDefault()
    console.log("ciaociao")
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.state.userId}/experiences/${this.state.expId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.experience),
        }
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    console.log("stuff changing")
    let id = e.target.id
    this.setState({
      experience: { ...this.state.experience, [id]: e.target.value },
    })
    console.log(this.state.experience)
  }

  // handleDelete =  async(e) => {
  //   e.preventDefault()
  //   console.log("ciaociao")
  //   try {
  //     const response = await fetch(
  //       `https://striveschool-api.herokuapp.com/api/profile/${this.state.userId}/experiences/${this.state.expId}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(this.state.experience),
  //       }
  //     )
  //     if (response.ok) {
  //       const data = await response.json()
  //       console.log(data)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }

  render() {
    return (
      <Row className="my-4">
        <Col xs={2}>
          <img className="img-fluid px-3" src={this.props.img} />
        </Col>

        <Col xs={8}>
          <span className="title">{this.props.jobOrSchool}</span>
          <br />
          {this.props.companyOrSubject}
          <br />
          <span className="subtitle">
            {this.props.duration}
            <br />
            {this.props.location}
            <br />
          </span>
          {this.props.description}
        </Col>
        <Col xs={2} className="d-flex justify-content-center edit-icon">
          <ModalForm
            formType="edit"
            handleDelete={this.handleDelete}
            handleSubmit={this.handleEdit}
            handleChange={this.handleChange}
            role={this.state.experience.role}
            company={this.state.experience.company}
            startDate={this.state.experience.startDate}
            description={this.state.experience.description}
            area={this.state.experience.area}
          />
        </Col>
      </Row>
    )
  }
}

export default ExpEduCard
