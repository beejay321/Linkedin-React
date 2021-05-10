import { Card, Button } from "react-bootstrap"
import "../CardProfile.css"

const CardProfile = (props) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <div className="section-title mb-3">{props.title}</div>
        <div className="text-size">{props.content}</div>
      </Card.Body>
    </Card>
  )
}

export default CardProfile
