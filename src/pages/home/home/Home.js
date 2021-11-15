import React from "react";
import { CardGroup, Container, Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import SingleGlass from "../../glasses/SingleGlass";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import Banner from "../banner/Banner";
import Brands from "../brands/Brands";
import Humanity from "../humanity/Humanity";
import Reviews from "../reviews/Reviews";

const Home = () => {
  const { glassesData } = useAuth();
  const { glasses } = glassesData;

  if (glasses.length === 0) {
    return (
      <div className="text-center mt-5 p-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Banner />
        <section>
          <Container className="text-center py-5">
            <h2 className="text-info">Chose Your Favorite Glass.</h2>
            <CardGroup className="row row-cols-1 row-cols-md-2 g-4">
              {glasses.slice(0, 6).map((glass) => (
                <SingleGlass key={glass._id} glass={glass}></SingleGlass>
              ))}
            </CardGroup>
          </Container>
        </section>
        <Reviews />
        <Brands />
        <Humanity />
      </main>
      <Footer />
    </>
  );
};

export default Home;
