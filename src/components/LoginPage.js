import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Logo from "../images/Logo.jpg";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const LoginPage = () => {
  return (
    <Container>
      <Row style={{ height: "100vh" }}>
        <Col className="d-flex align-self-center justify-content-center">
          <Card style={{ width: "18rem", height: "25rem" }}>
            <Card.Img variant="top" src={Logo} />
            <Card.Body className="col-8 d-flex align-self-center"></Card.Body>
            <Col>
              <Button id="LogInBtn" onClick="./HomePage.js" variant="primary">
                Log In
              </Button>
            </Col>
            <Col>
              <Button id="SignUpBtn" variant="primary">
                Sign Up
              </Button>
            </Col>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
