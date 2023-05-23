import React from 'react';
import {Row,Col} from 'react-bootstrap';
import CardContent from './CardContent';

 const Cards = (props) => {
  console.log(props);
    return (
    <div>
        
            {props.applicants.map((item, index) => {
              return (
              <div key= {item.id}>
                
                  <Col>
                  <CardContent applicant={item}/>
                  </Col>
                
              </div>
             
              );
            })};
          
            

            
        
        
        
        </div>
  )
};
export default Cards;