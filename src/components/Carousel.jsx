import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../common/assets/images/tab.png";
import image2 from "../common/assets/images/watch.png";
import image3 from "../common/assets/images/cell.png";

const Carousel = () => {
  const images = [
    {
      src: image3,
      alt: "Imagem 1",
    },
    {
      src: image2,
      alt: "Imagem 2",
    },
    {
      src: image1,
      alt: "Imagem 3",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    
    <Slider {...settings} className="border border-zinc-300 shadow-xl ">
      {images.map((image) => (
        <div
          key={image.src}
          className=" bg-white p-4 flex justify-center items-start z-0 w-ful"
        >
          <div className="flex flex-row items-center justify-between">
            <div className="w-1/2 pr-8">
              <p className="text-2xl font-extrabold">
                50% OFF For Your First Shopping
              </p>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                alias recusandae similique tenetur unde veritatis.
              </p>
            </div>
            <div className="w-2/5">
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
