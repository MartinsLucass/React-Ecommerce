import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

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

  const searchProducts = async ({ category }) => {
    let products = [];

    try {
      const searchPromises = category.map(async (category) => {
        const response = await axios.get(
          `https://api.mercadolibre.com/sites/MLB/search?category=${category}`
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
    const promotionProducts = products.filter(
      (product) => product.original_price > product.price
    ).slice(0, 20);
    setPromotionProducts(promotionProducts);
  };

  return (
    <ProductContext.Provider value={{ allProducts, searchProducts, promotionProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext deve ser usado dentro de um ProductContextProvider');
  }
  return context;
};

export { ProductContextProvider, useProductContext };
