import { Component } from "react"
import "./Sidebar.css"
import { Button, ListGroup } from "react-bootstrap"

class Sidebar extends Component {
  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </>
    )
  }
}
export default Sidebar
