import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../images/Logo.jpg'
import { Stack }  from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Background from '../images/cutting-board.jpg';


const LoginCard = () => {
  return (
    <div className="d-flex align-self-center justify-content-center">
       <Container>
        <Row id="startPageBg" style={{ backgroundImage: `url(${Background})`}}>
          <Col className="d-flex align-self-center justify-content-center">
            <Card style={{ width: '18rem', height: '20rem', padding: '20px' }}>
              <Card.Img variant="top" src={Logo} />
                <Card.Body className='col-8 d-flex align-self-center'>
                  <Stack gap={2} className="justify-content-center">
                      <Button id='LogInBtn' onClick="./HomePage.js" variant="primary" size='lg'>Login</Button>
                          <Button id='SignUpBtn' variant="primary" size='lg'>Sign Up</Button>
                </Stack>
              </Card.Body>      
            </Card>   
          </Col>
        </Row>
    </Container>
    </div>
   
  )
}

export default LoginCard