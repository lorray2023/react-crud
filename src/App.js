import React, {useState} from 'react'
import {Container, Row, Col,Button,Form, Card} from 'react-bootstrap'
import Forms from './Components/Forms';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Cards from './Components/Cards';
import CardContent from './Components/CardContent';


const App = () => {
  const [applicants, newApplicant] = useState([
    { name: "Abla", 
      email: "email",
      password: "",
      gen: 12,
      id:uuidv4 (),
    },
    { name: "James",
      email: "email",
      password: "", 
      gen: 23,
      id: uuidv4 (),
    },
    
    { name: "Getty",
      email: "email",
      password: "",
      gen: 26,
      id:uuidv4 (),
    },
    
  ]);

  function addApplicant (applicant) {
newApplicant([...applicants, applicant])
  }
    
  
    

     
  return (
  
    <Container>
      <Row>
        <Col>
        <Forms addApplicant = {addApplicant}/>
        </Col>
        
        <Col>
        <Cards applicants = { applicants }/>
        </Col>
      </Row>
    </Container>
  )    
  
}; 

export default App;
