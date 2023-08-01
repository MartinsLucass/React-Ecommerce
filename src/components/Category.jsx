import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../common/assets/images/headset.jpg";
import img2 from "../common/assets/images/tab.jpg";
import img3 from "../common/assets/images/watch.jpg";
import img4 from "../common/assets/images/cell.jpg";
import img5 from "../common/assets/images/tv.jpg";

const Category = () => {
  const category = [
    {
      name: "Cell Phone",
      path: "/Category/CellPhone",
      image: img4,
    },
    {
      name: "Tablet",
      path: "/Category/Tablet",
      image: img2,
    },
    {
      name: "Smart Watch",
      path: "/Category/SmartWatch",
      image: img3,
    },
    {
      name: "HeadFone",
      path: "/Category/HeadFone",
      image: img1,
    },
    {
      name: "Television",
      path: "/Category/Television",
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

  return (
    <div className="flex h-full w-full">
      <Slider {...settings} className="w-full bg-transparent">
        {category.map((categoryItem) => (
          <div key={categoryItem.name} className="px-2 shadow-lg">
            <Link
              className="flex flex-col items-center justify-center h-64 w-full rounded-lg cursor-pointer shadow-lg transition-all duration-200 bg-cover bg-center hover:opacity-100"
              style={{
                backgroundImage: `url(${categoryItem.image})`,
              }}
              to={categoryItem.path}
            >
              <span className="text-white opacity-80 text-3xl font-bold shadow-md">
                {categoryItem.name}
              </span>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
