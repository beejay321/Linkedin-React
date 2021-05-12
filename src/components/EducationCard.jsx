import { Card, Button } from "react-bootstrap";
import "../CardProfile.css";
import EducationModal from "./EducationModal";

const CardProfile = (props) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <div className=" d-flex justify-content-between">
          <div className="section-title mb-3">{props.title}</div>
          <div>
            <EducationModal />
          </div>
        </div>
        <div className="text-size">{props.content}</div>
      </Card.Body>
    </Card>
  );
};

export default CardProfile;
