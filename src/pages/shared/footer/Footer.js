import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-3">
      <Container>
        <Row className="row-cols-1 row-cols-md-3 py-5">
          <Col>
            <h3> Chasmish Hero Limited.</h3>
            <p>
              {" "}
              BNS Center 11th Floor Uttara, Dhaka-1230 Bangladesh. <br />
              Mobile: +8801775 00 60 00 <br />
              Email: care@chasmishhero.com{" "}
            </p>
          </Col>
          <Col>
            <h3>Help Desk</h3>
            <ul>
              <li>Buying Guide</li>
              <li>Exchange & Return</li>
              <li>Delivery and Shipping</li>
              <li>Product Guarantee</li>
              <li>FAQs</li>
            </ul>
          </Col>
          <Col>
            <h3>Care For You</h3>
            <ul>
              <li>Tips for Buying glasses</li>
              <li>Style Advice</li>
              <li>Glasses For Your Face </li>
              <li>Lens Care</li>
              <li>School Eye Screening</li>
            </ul>
          </Col>
        </Row>
        <p className="text-center pt-5">
          Copyright &copy; Chasmish Hero Limited All Right Reserved.Developed By
          Mahabub Emon
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
