import React from "react";
import Slider from "react-slick";
// import "./ImageTextSlider.css"; // Optional: for custom styling

const ImageTextSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Sample data for slides
  const slides = [
    {
      image: "../../Images/hero-img.png",
      text: "This is the first slide text.",
    },
    {
      image: "../../Images/phone-06.jpg",
      text: "This is the second slide text.",
    },
    {
      image: "../../Images/double-sofa-01.png",
      text: "This is the third slide text.",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          <div className="slide-content">
            <div className="slide-image">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
            <div className="slide-text">
              <p>{slide.text}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageTextSlider;
