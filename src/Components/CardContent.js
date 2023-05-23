import React from "react";
import { Card } from "react-bootstrap";

 const CardContent = (props) => {
  console.log(props.applicant);
  
  return (
    
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.applicant.name}
          </Card.Subtitle>
        <Card.Title>Email</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
        {props.applicant.email}
        </Card.Subtitle>
        <Card.Title>Password</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
    
          </Card.Subtitle>
        <Card.Title>Gen</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
        {props.applicant.id}
          </Card.Subtitle>

        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    
  )
};
export default CardContent;
