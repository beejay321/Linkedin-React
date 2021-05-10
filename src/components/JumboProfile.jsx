import { Jumbotron, Button } from "react-bootstrap"

const JumboProfile = (props) => {
  return (
    <Jumbotron className="bg-warning">
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="secondary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

export default JumboProfile
