import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ResponsiveText = () => {
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="text-center">
        <Col sm={12} md={6}>
          <h1>Text 1</h1>
        </Col>
        <Col sm={12} md={6}>
          <h1>Text 2</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ResponsiveText;
