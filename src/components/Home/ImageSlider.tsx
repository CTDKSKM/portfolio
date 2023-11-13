import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://via.placeholder.com/800x800',
  'https://via.placeholder.com/800x800',
  'https://via.placeholder.com/800x800',
  'https://via.placeholder.com/800x800',
  'https://via.placeholder.com/800x800'
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} className="w-full h-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
