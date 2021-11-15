import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Humanity = () => {
  return (
    <section id="humanity" className="py-5">
      <Container className="text-center">
        <h2 className="text-info">BUSINESS FOR HUMAN</h2>
        <h5>BUY ONE l GIVE ONE</h5>
        <Row className="row-cols-1 row-cols-md-2 pt-5 g-4">
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
