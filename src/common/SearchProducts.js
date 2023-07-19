import axios from 'axios';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const SearchProducts = async () => {
  let allProducts = [];

  try {
    const categories = ["MLB1055", "MLB11172", "MLB99889", "MLB135384",];
    const searchPromises = categories.map(async (category) => {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${category}`);
      return response.data.results;
    });
    const categoryResults = await Promise.all(searchPromises);

    allProducts = categoryResults.flat();

    // Embaralhar os resultados antes de retorná-los
    allProducts = shuffleArray(allProducts);
  } catch (error) {
    console.error("Error:", error);
  }

  return allProducts;
}

export default SearchProducts;
