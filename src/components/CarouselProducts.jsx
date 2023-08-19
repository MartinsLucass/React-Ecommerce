import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProduct from "./CardProduct";
import { FaShoppingBag } from "react-icons/fa";

const CarouselProducts = ({products, title}) => {

  const settings = {
    arrows: false,
    dots: false,
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
    <div className="w-full h-full">
      <h3 className="flex space-x-12 text-2xl font-semibold pl-4 pb-2 text-zinc-700">
        {title}
        <FaShoppingBag className="ml-2" />
      </h3>
      <Slider {...settings} className="w-full ">
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
