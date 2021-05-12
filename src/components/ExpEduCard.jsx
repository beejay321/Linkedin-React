import { Row, Col } from "react-bootstrap";
import "../ExpEduCard.css";
import EditExperience from "./EditExperience";
import ModalForm from "./MyModal";

const ExpEduCard = (props) => {
  return (
    <Row className="my-4">
      <Col xs={2}>
        <img className="img-fluid px-3" src={props.img} />
      </Col>

      <Col xs={9}>
        <span className="title">{props.jobOrSchool}</span>
        <br />
        {props.companyOrSubject}
        <br />
        <span className="subtitle">
          {props.duration}
          <br />
          {props.location}
          <br />
        </span>
        {props.description}
      </Col>
      <Col xs={1}>
        <EditExperience />
      </Col>
    </Row>
  );
};

export default ExpEduCard;
