import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const bannerContents = [
    {
      name: "First Slide",
      img: "https://i.ibb.co/G2d4xZK/banner-1.jpg",
      caption: "First slide label",
    },
    {
      name: "Second Slide",
      img: "https://i.ibb.co/tXFkZdR/banner-2.jpg",
      caption: "First slide label",
    },
    {
      name: "Third Slide",
      img: "https://i.ibb.co/mBygyW5/banner-3.jpg",
      caption: "First slide label",
    },
    {
      name: "Fourth Slide",
      img: "https://i.ibb.co/3FHhv29/banner-4.jpg",
      caption: "First slide label",
    },
  ];
  return (
    <section className="pb-5">
      <Carousel variant="dark">
        {bannerContents.map((banner) => (
          <Carousel.Item interval={1000} key={banner.name}>
            <img className="d-block w-100" src={banner.img} alt={banner.name} />
            <Carousel.Caption>
              <h5>{banner.caption}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
