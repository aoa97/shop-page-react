import { useStore } from "../../context/AppContext";
import Pagination from "../Pagination";
import ProductListItem from "../ProductListItem";
import "./styles.css";

const ProductList = () => {
  const { filters, filteredProducts, productView, totalProducts } = useStore();

  return (
    <>
      <div className={`productList ${productView == "list" ? "lv" : ""}`}>
        {filteredProducts.map((p) => (
          <ProductListItem key={p.id} product={p} view={productView} />
        ))}
      </div>

      {totalProducts.length != 0 && <Pagination />}
    </>
  );
};

export default ProductList;
