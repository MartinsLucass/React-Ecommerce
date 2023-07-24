import React, { useEffect, useState } from "react";
import { useProductContext } from "../common/ProductContext";
import CardProduct from "./CardProduct";

const ListProducts = ({categories}) => {
    const { searchProducts, allProducts } = useProductContext();

    useEffect(() => {
      searchProducts({ category: categories, searchTerm: "" })
      }, []);    

      return (
        <div className="w-screen h-screen">
          {allProducts.map((product) => (
            <div key={product.id}>
              <CardProduct product={product} />
            </div>
          ))}
        </div>
      );
    };
    
    export default ListProducts;
    