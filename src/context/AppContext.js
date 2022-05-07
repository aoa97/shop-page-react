import { createContext, useContext, useEffect, useState } from "react";
import { filterSidebar } from "../utils/helperFunctions";
import productJson from "../assets/data/products.json";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const { products } = productJson;

  // App states
  const [productView, setProductView] = useState("grid");
  const [filters, setFilters] = useState({});
  const [totalProducts, setTotalProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(totalProducts);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination Stuff
  const productsPerPage = 9;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  useEffect(() => {
    const arr = totalProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    setFilteredProducts(arr);
  }, [totalProducts]);

  useEffect(() => {
    if (Object.entries(filters).length > 0) {
      const arr = filterSidebar(products, filters);
      setTotalProducts(arr);
    }
  }, [filters, currentPage]);

  const store = {
    products,
    productView,
    setProductView,
    filters,
    setFilters,
    filteredProducts,
    setFilteredProducts,
    currentPage,
    setCurrentPage,
    productsPerPage,
    totalProducts,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useStore = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
