import { Card, Button } from "react-bootstrap"
import "../JumboProfile.css"

const JumboProfile = (props) => {
  return (
    <Card>
      <div className="img-container"></div>
      <Card.Body>
        <img
          className="avatar"
          src="https://arced.it/wp-content/uploads/2018/10/portrait-square-03.jpg"
        />
        <Card.Title className="mt-5">Aaron Benwell</Card.Title>
        <Card.Text>
          <p>
            Web developer
            <br />
            Creating synergy between clint expectations and product delivery
          </p>
          <p className="location-line">
            Vercelli, Italy •{" "}
            <span className="text-primary">
              <b>75 Connections • Contact info</b>
            </span>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default JumboProfile
