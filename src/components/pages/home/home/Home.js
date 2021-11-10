import React from "react";
import Glasses from "../../glasses/Glasses";
import Banner from "../banner/Banner";
import Humanity from "../humanity/Humanity";
import Reviews from "../reviews/Reviews";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Glasses></Glasses>
      <Reviews></Reviews>
      <Humanity></Humanity>
    </main>
  );
};

export default Home;
