import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../images/Logo.jpg'
import { Stack }  from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


const LoginCard = () => {
  return (
    <Container>
      <Row style={{ height: '100vh' }}>
        <Col className="d-flex align-self-center justify-content-center">
          <Card style={{ width: '18rem', height: '25rem' }}>
            <Card.Img variant="top" src={Logo} />
              <Card.Body className='col-8 d-flex align-self-center'>
                <Stack gap={2} className="justify-content-center">
                    <Button id='LogInBtn' onClick="./HomePage.js" variant="primary">Log In</Button>
                        <Button id='SignUpBtn' variant="primary">Sign Up</Button>
               </Stack>
            </Card.Body>      
          </Card>   
        </Col>
      </Row>
    </Container>
  )
}

export default LoginCard