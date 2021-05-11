import "./Sidebar.css"
import { Accordion, Card, Button } from "react-bootstrap"
import SidebarPerson from "./SidebarPerson.jsx"
import { useState, useEffect } from "react"

const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTNmYjYxOWU1ZDAwMTUxZjhmODUiLCJpYXQiOjE2MjA2NDQ4NTksImV4cCI6MTYyMTg1NDQ1OX0.fm075zxqUowsPdcnZmh_76d_SkR-rUgg6MQK86gOvm0"

async function getAllProfiles(auth) {
  const url = "https://striveschool-api.herokuapp.com/api/profile/"
  const response = await fetch(url, { headers: { Authorization: auth } })
  const data = await response.json()
  if (response.ok) {
    return data
  }
}

export default function Sidebar() {
  const [profilesData, updateProfilesData] = useState([])
  useEffect(async () => {
    updateProfilesData(await getAllProfiles(auth))
  }, [])
  function mapProfiles(limit) {
    return profilesData.slice(-20, limit).map((profile) => {
      return (
        <SidebarPerson
          key={profile._id}
          id={profile._id}
          image={profile.image}
          name={profile.name}
          surname={profile.surname}
          title={profile.title}
        />
      )
    })
  }
  return (
    <div className="p-3 my-2 border bg-white round-border">
      <h5 className="mt-2 text-left">People also viewed</h5>
      <div className="d-flex flex-column my-4">
        {mapProfiles(80)}
        <Accordion defaultActiveKey="0">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Show More
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body> {mapProfiles(90)}</Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </div>
  )
}

// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTNmYjYxOWU1ZDAwMTUxZjhmODUiLCJpYXQiOjE2MjA2NDQ4NTksImV4cCI6MTYyMTg1NDQ1OX0.fm075zxqUowsPdcnZmh_76d_SkR-rUgg6MQK86gOvm0
