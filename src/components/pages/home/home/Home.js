import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";
import SingleGlass from "../../glasses/SingleGlass";
import Banner from "../banner/Banner";
import Brands from "../brands/Brands";
import Humanity from "../humanity/Humanity";
import Reviews from "../reviews/Reviews";

const Home = () => {
  const { glasses } = useAuth().glassesData;
  return (
    <main>
      <Banner></Banner>
      <section>
        <Container className="text-center py-5">
          <h2>Chose Your Favorite Glass.</h2>
          <CardGroup className="row row-cols-1 row-cols-md-2 g-4">
            {glasses.slice(0, 6).map((glass) => (
              <SingleGlass key={glass._id} glass={glass}></SingleGlass>
            ))}
          </CardGroup>
        </Container>
      </section>
      <Reviews></Reviews>
      <Brands></Brands>
      <Humanity></Humanity>
    </main>
  );
};

export default Home;
