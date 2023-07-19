import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchProducts from "../common/SearchProducts";
import CardProduct from "./CardProduct";

const Deals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await SearchProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

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

  const promotionProducts = products.filter(
    (product) => product.original_price > product.price
  ).slice(0, 20); // Limita para mostrar até 20 itens

  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold mb-4 pr-4">Daily Deal</h3> 
      <Slider {...settings} className="w-full bg-zinc-100 shadow">
        {promotionProducts.map((product) => (
          <div key={product.id}>
            <CardProduct product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Deals;
