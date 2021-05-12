import { Card, Button } from "react-bootstrap";
import "../CardProfile.css";
import AboutModal from "./AboutModal";
import ModalForm from "./MyModal";

const AboutCard = (props) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <div className=" d-flex justify-content-between">
          <div className="section-title mb-3">{props.title}</div>
          <div className=" d-flex justify-content-between">
            <span > {props.modal}</span>
            <span> {props.editSkill}</span>
          </div>
        </div>
        <div className="text-size">{props.content}</div>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
