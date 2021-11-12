import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import SingleGlass from "./SingleGlass";

const Glasses = () => {
  const { glasses } = useAuth().glassesData;
  return (
    <section>
      <Container className="text-center py-5">
        <h2>Chose Your Favorite  Glass</h2>
        <CardGroup className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {glasses.map((glass) => (
            <SingleGlass key={glass._id} glass={glass}></SingleGlass>
          ))}
        </CardGroup>
      </Container>
    </section>
  );
};

export default Glasses;
