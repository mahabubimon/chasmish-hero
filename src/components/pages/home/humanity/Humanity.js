import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Humanity = () => {
  return (
    <section id="humanity">
      <Container className="text-center">
        <h3>BUSINESS FOR HUMAN</h3>
        <h5>BUY ONE l GIVE ONE</h5>
        <Row className="row-cols-1 row-cols-md-2">
          <Col>
            <img
              className="img-fluid"
              src="https://i.ibb.co/k17WF8B/humanity-1.gif"
              alt=""
            />
          </Col>
          <Col>
            <img
              className="img-fluid"
              src="https://i.ibb.co/N6CVt6s/humanity-2.gif"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Humanity;
