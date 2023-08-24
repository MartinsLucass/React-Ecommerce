import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../common/assets/images/brand-01.png";
import img2 from "../common/assets/images/brand-03.png";
import img3 from "../common/assets/images/brand-06.png";
import img4 from "../common/assets/images/brand-07.png";
import img5 from "../common/assets/images/brand-04.png";
import { useProductContext } from "../common/ProductContext";

const Brand = () => {
  const { setSearchTerm } = useProductContext();

  const categories = [
    {
      name: "Samsung",
      path: "/Category/Samsung",
      image: img4,
    },
    {
      name: "Xaiomi",
      path: "/Category/Xaiomi",
      image: img2,
    },
    {
      name: "LG",
      path: "/Category/LG",
      image: img3,
    },
    {
      name: "Apple",
      path: "/Category/Apple",
      image: img1,
    },
    {
      name: "Motorola",
      path: "/Category/Motorola",
      image: img5,
    },
  ];

  const settings = {
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleLinkClick = (name) => {  
    window.scrollTo(0, 0);   
    setSearchTerm(name);
  };

  return (
    <div className="flex h-full w-full">
      <Slider {...settings} className="w-full bg-transparent ">
        {categories.map((category) => (
          <div key={category.path} className="px-2 bg-transparent">
            <Link
            
              to={category.path}
              className="flex flex-col items-center justify-center border-2 bg-gradient-to-b from-zinc-100 to-zinc-50 border-gray-300 rounded-md h-64 w-full cursor-pointer duration-200 bg-cover bg-center hover:opacity-100 hover:scale-95 transition-all"
              onClick={() => handleLinkClick(category.name)}
            >
              <img src={category.image} alt={category.name} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brand;
