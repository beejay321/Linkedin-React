import { Card } from "react-bootstrap";
import "../Post.css";

export default function RightColumnTwo() {
  return (
    <Card className="RightColumn-card">
      <Card.Header className="bg-white">
        <span>Today's most viewed courses</span>
        <i class="bi bi-info-square-fill"></i>
      </Card.Header>
      <Card.Text className="m-0 p-0  px-3">
        <Card.Text>
          <p>1. Only available for a limited time</p>
        </Card.Text>
        <Card.Text>
          <p>2. Only available for a limited time</p>
        </Card.Text>
        <Card.Text>
          <p>3. Only available for a limited time</p>
        </Card.Text>
        <Card.Text>
          <span className="text-muted">
            Show more LinkedIn Learning <i class="bi bi-arrow-right"></i>
          </span>
        </Card.Text>
      </Card.Text>
    </Card>
  );
}
