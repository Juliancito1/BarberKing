import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../img/Banner1.jpg";
import Banner2 from "../img/Banner2.jpg";
import Banner3 from "../img/Banner3.jpg";
const Banner = () => {
  return (
    <Carousel className="carousel" fade>
      <Carousel.Item>
        <img
          className="carouselImg img-fluid"
          src={Banner1}
          text="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg img-fluid"
          src={Banner2}
          text="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg img-fluid"
          src={Banner3}
          text="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
