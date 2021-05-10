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
                <CardProfile title="About" content={<About />} />
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
                <CardProfile title="Interests" />
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
