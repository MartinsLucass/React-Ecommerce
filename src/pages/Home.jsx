import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import CarouselProducts from "../components/CarouselProducts";
import { useProductContext } from "../common/ProductContext";
import Brand from "../components/Brand";

const Home = () => {
  const { searchProducts, promotionProducts, newProducts, setSearchTerm} = useProductContext();
  const categories = ["MLB1055"/*cellphone*/, "MLB99889"/*tablet*/,"MLB1002"/*television*/, "MLB135384"/*smartwatch*/,"MLB196208"/*headfone*/];
 
  useEffect(() => {
    setSearchTerm("")
    searchProducts({ category: categories, searchTerm: "" });
  }, []);
  return (
    <main className="flex flex-col items-center justify-start space-y-24 overflow-hidden mt-20">
      <div className="sm:container flex flex-col sm:flex-row justify-center items-start w-full sm:space-x-6 bg-gradient-to-b- ">
        <div className="w-screen h-full">
          <Carousel />
        </div>
      </div>
      <div className="h-full w-11/12 flex justify-center">
        <Category />
      </div>
      <div className="w-11/12 flex justify-center h-full">
        <CarouselProducts products={promotionProducts} title={"Daily Deal"} />
      </div>
      <div className="h-full w-11/12 flex justify-center">
        <Brand />
      </div>
      <div className=" w-11/12 flex justify-center h-full">
        <CarouselProducts products={newProducts} title={"New Products"}/>
      </div>
    </main>
  );
};

export default Home;
//
