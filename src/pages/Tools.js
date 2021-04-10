import "./style.css";
import React, { useState } from "react";
import Slider from "react-slick";
import temp from "./photos/tool-img.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [temp, temp, temp, temp];

function Tools() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (

    <>
    <div className="text">
      <h2>
        We provide governments and global lending institutions with technical consulting services supported by disruptive technologies
      </h2>
    </div>

    <div className="tools">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
}

export default Tools;