import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {v4 as uuidv4} from 'uuid';


const Forms = (props)=> {
  const [name, setName] = useState ('')
  const [email, setEmail] = useState ('')
  const [password, setPassword] =useState ('')
  const [gen, setGen] =useState ('')
  

  const handleSubmit = (e) => {
    e.preventDefault()

    let newApplicant = {
        name: name,
        email:email,
        password:password,
        gen:gen,
        id:uuidv4(),
    };

      props.addApplicant (newApplicant);
    
        
  };
     
  return (
           
    <Form onSubmit ={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>{setName(e.target.value);}}/>
                        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value);}}/>
                        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value);}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicgen">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="text" placeholder="gen" value={gen} onChange={(e)=>{setGen(e.target.value);}}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    
      
      
    </Form>
     
    
  );
  
}

export default Forms
        

