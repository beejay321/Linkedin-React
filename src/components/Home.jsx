import React from "react"
import JumboProfile from "./JumboProfile"
import { Container, Row, Col } from "react-bootstrap"
import Sidebar from "./Sidebar/Sidebar"
import CardProfile from "./CardProfile"
import About from "./AboutProfile"
import ExperienceContent from "./ExperienceContent"
import EducationContent from "./EducationContent"
import SkillsContent from "./SkillsContent"
import AccomplishmentsContent from "./AccomplishmentsContent"
import InterestsContent from "./InterestsContent"

class Home extends React.Component {
  state = {
    user: {},
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
          },
        }
      )
      if (response.ok) {
        const data = await response.json()
        this.setState({ user: data })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>
            <Row>
              <Col xs={8}>
                <JumboProfile
                  name={this.state.user.name}
                  surname={this.state.user.surname}
                  title={this.state.user.title}
                  area={this.state.user.area}
                  image={this.state.user.image}
                />
                <CardProfile
                  title="About"
                  content={<About bio={this.state.user.bio} />}
                />
                <CardProfile
                  title="Experience"
                  content={<ExperienceContent />}
                />
                <CardProfile title="Education" content={<EducationContent />} />
                <CardProfile
                  title={"Skills & Endorsements"}
                  content={<SkillsContent />}
                />
                <CardProfile
                  title="Accomplishments"
                  content={<AccomplishmentsContent />}
                />
                <CardProfile title="Interests" content={<InterestsContent />} />
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
