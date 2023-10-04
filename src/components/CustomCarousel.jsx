import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import phoy from "../assets/bag1.avif";
import croy from "../assets/ter.jpg";
import roy from "../assets/caro3.jpg";
import bomb from "../assets/caro7.jpg";
import boom from "../assets/Carousel1.jpg";

import CustomCarouselImage from "./CustomCarouselImage";

const CustomCarousel = () => {
  return (
    <Carousel
      infiniteLoop
      autoFocus
      autoPlay
      showThumbs={false}
      width={"100vw"}
    >
      <CustomCarouselImage imgName={phoy} />
      <CustomCarouselImage imgName={croy} />
      <CustomCarouselImage imgName={roy} />
      <CustomCarouselImage imgName={bomb} />
      <CustomCarouselImage imgName={boom} />
    </Carousel>
  );
};

export default CustomCarousel;
