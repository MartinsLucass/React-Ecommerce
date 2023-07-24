import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProduct from "./CardProduct";

const CarouselProducts = ({products, title}) => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold mb-4 pr-4">{title}</h3> 
      <Slider {...settings} className="w-full bg-zinc-100 shadow">
        {products.map((product) => (
          <div key={product.id}>
            <CardProduct product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselProducts;
