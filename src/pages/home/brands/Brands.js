import React from "react";
import { Container, Row } from "react-bootstrap";

const Brands = () => {
  const brandLogo = [
    { logo: "https://i.ibb.co/6vnnpw6/Raybannn.png" },
    { logo: "https://i.ibb.co/RNNfv65/rolex.png" },
    { logo: "https://i.ibb.co/mByJ06q/Sil-Logo.png" },
    { logo: "https://i.ibb.co/9gW4bR4/Chopard-Logo-300x113.jpg" },
    { logo: "https://i.ibb.co/2s2pMHm/omegalogo-300x150.jpg" },
    { logo: "https://i.ibb.co/DQDQNqR/cartier.jpg" },
    { logo: "https://i.ibb.co/Q9v9ngy/dunhil.jpg" },
    { logo: "https://i.ibb.co/Sc4CRSm/charman-logo-1.jpg" },
  ];
  return (
    <section id="brands" className="bg-light">
      <Container className="text-center py-5">
        <h1 className="text-info pb-5">SHOP OUR TOP BRAND</h1>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {brandLogo.map((logo) => (
            <img
              key={logo.logo}
              src={logo.logo}
              className="img-fluid"
              style={{ cursor: "pointer" }}
              alt="logo"
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Brands;
