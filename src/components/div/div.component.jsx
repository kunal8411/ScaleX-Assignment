import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './div.styles.css'
const Div = ()=>{
    return(
        <Container className="div">
        <Row className='row'>
          <Col className="colone"><h3>Active Users</h3><div><h3>568</h3></div></Col>
          <Col className="coltwo"><h3>Inactive Users</h3><div><h3>789</h3></div></Col>
        </Row>
        
      </Container>
    )
}

export default Div;


