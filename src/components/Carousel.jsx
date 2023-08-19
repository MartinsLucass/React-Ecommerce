import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image2 from "../common/assets/images/tab.png";
import image1 from "../common/assets/images/watch.png";
import image3 from "../common/assets/images/cell.png";

const Carousel = () => {
  const images = [
    {
      src: image1,
      alt: "Imagem 1",
    },
    {
      src: image3,
      alt: "Imagem 3",
    },
    {
      src: image2,
      alt: "Imagem 2",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    
    <Slider {...settings} className=" shadow-xl shadow-zinc-300 ">
      {images.map((image) => (
        <div
          key={image.src}
          className="bg-gradient-to-b from-zinc-100 to-zinc-300 p-4 flex  justify-center items-start z-0 "
        >
          <div className="flex flex-col-reverse sm:flex-row sm:items-center items-center justify-between">
            <div className="sm:w-1/2 p-8 px-14 space-y-4">
              <p className="text-2xl font-extrabold">
                50% OFF For Your First Shopping
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est sed vero provident deleniti, ratione tenetur minus at perferendis nemo odit esse earum praesentium accusantium a quibusdam libero, inventore distinctio sequi.
              </p>
              <button className="bg-zinc-900 text-white p-4 rounded-xl">
                Collection
              </button>
            </div>
            <div className="sm:w-2/5 w-2/3 sm:p-8 p-4">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
