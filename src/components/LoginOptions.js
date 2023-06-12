import React from "react";
import Accordion from "react-bootstrap/Accordion";

const LoginOptions = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Language</Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Cooking Experience Level</Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Preferred Units</Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Recipe Preferences</Accordion.Header>
        <Accordion.Body>
            
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default LoginOptions;
