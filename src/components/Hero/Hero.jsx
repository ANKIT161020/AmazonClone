import Slider from "react-slick";
import "./Hero.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const images = [
    { id: 1, src: "./src/assets/hero_banner1.png", alt: "Image 1" },
    { id: 2, src: "./src/assets/hero_banner1.png", alt: "Image 2" },
    { id: 3, src: "./src/assets/hero_banner1.png", alt: "Image 3" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="heroElement">
      <Slider {...settings} className="sliderz">
        {images.map((image) => (
          <div key={image.id} className="heroImg">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
