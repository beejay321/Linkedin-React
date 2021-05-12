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
import Example from "./MyModal"
import ModalForm from "./MyModal"
import AboutModal from "./AboutModal"
import SkillsModal from "./SkillsModal"
import SkillsEditModal from "./SkillsEditModal"
import AboutCard from "./AboutCard"
import EducationCard from "./EducationCard"

class Home extends React.Component {
  state = {
    user: {},
    userExperiences: [],
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.match.params.id}`,
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

    const userId =
      this.props.match.params.id === "me"
        ? this.state.user._id
        : this.props.match.params.id

    try {
      const xpResponse = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
          },
        }
      )
      if (xpResponse.ok) {
        const xpData = await xpResponse.json()
        this.setState({ userExperiences: xpData })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Row>
              <Col xs={8} className="mt-5">
                <JumboProfile
                  name={this.state.user.name}
                  surname={this.state.user.surname}
                  title={this.state.user.title}
                  area={this.state.user.area}
                  image={this.state.user.image}
                />
                <AboutCard
                  title="About"
                  content={<About bio={this.state.user.bio} />}
                  modal={<AboutModal />}
                />
                <CardProfile
                  title="Experience"
                  user={this.state.user._id}
                  content={
                    <ExperienceContent
                      experiences={this.state.userExperiences}
                    />
                  }
                  // modal={<ModalForm />}
                />
                <EducationCard
                  title="Education"
                  content={<EducationContent />}
                />
                <AboutCard
                  title={"Skills & Endorsements"}
                  content={<SkillsContent />}
                  modal={<SkillsModal />}
                  editSkill={<SkillsEditModal />}
                />
                <CardProfile
                  user={this.state.user._id}
                  title="Accomplishments"
                  content={<AccomplishmentsContent />}
                />
                <CardProfile
                  user={this.state.user._id}
                  title="Interests"
                  content={<InterestsContent />}
                />
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
