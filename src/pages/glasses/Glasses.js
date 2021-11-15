import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";
import SingleGlass from "./SingleGlass";

const Glasses = () => {
  const { glasses } = useAuth().glassesData;
  return (
    <>
      <Header />
      <section className="py-5">
        <Container className="text-center py-5">
          <h2 className="text-info pb-4">Chose Your Favorite Glass</h2>
          <CardGroup className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {glasses.map((glass) => (
              <SingleGlass key={glass._id} glass={glass}></SingleGlass>
            ))}
          </CardGroup>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Glasses;
