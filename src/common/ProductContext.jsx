import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ProductContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [promotionProducts, setPromotionProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });
  const [subTotal, setSubTotal] = useState(() => {
    const localSubTotal = localStorage.getItem("subTotal");
    return localSubTotal ? JSON.parse(localSubTotal) : 0;
  });

  const searchProducts = async ({ category, searchTerm }) => {
    let products = [];

    try {
      const searchPromises = category.map(async (category) => {
        const response = await axios.get(
          `https://api.mercadolibre.com/sites/MLB/search?q=${searchTerm}&category=${category}`
        );
        return response.data.results;
      });

      const categoryResults = await Promise.all(searchPromises);
      products = categoryResults.flat();

      // Embaralhar os resultados antes de retorná-los
      products = shuffleArray(products);
    } catch (error) {
      console.error("Error:", error);
    }

    setAllProducts(products);
    const promotionProducts = products
      .filter((product) => product.original_price > product.price)
      .slice(0, 20);
    setPromotionProducts(promotionProducts);

    const newProducts = products
      .filter((product) => product.condition === "new")
      .slice(0, 20);
    setNewProducts(newProducts);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("subTotal", JSON.stringify(subTotal));
  }, [cart, subTotal]);

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        searchProducts,
        promotionProducts,
        newProducts,
        searchTerm,
        cart,
        setCart,
        setSearchTerm,
        subTotal,
        setSubTotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductContext deve ser usado dentro de um ProductContextProvider"
    );
  }
  return context;
};

export { ProductContextProvider, useProductContext };
