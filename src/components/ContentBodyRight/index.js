import { useState } from "react";
import { useStore } from "../../context/AppContext";
import { IconArrowDown, IconDrawer, IconGrid, IconList } from "../SVG/IconSvg";
import ProductList from "../ProductList";
import ButtonGroup from "../ButtonGroup";
import Button from "../Button";
import Search from "../Search";
import "./styles.css";

const ContentBodyRight = () => {
  const { productView, setProductView, totalProducts } = useStore();
  const [featuredDropOpen, setFeaturedDropOpen] = useState(false);

  const handleShowFilter = () => {
    const filter = document.querySelector("#filter-sidebar");
    filter.classList.add("show");
  };

  return (
    <div className="contentBody__right">
      <div className="contentBody__right__header">
        {/* Mobile Drawer */}
        <div
          className="filter-sidebar-drawer"
          onClick={handleShowFilter}
          style={{ display: "none" }}
        >
          <IconDrawer />
        </div>

        {/* Number of results */}
        <h5 className="filter-resultsNo">{totalProducts.length} results found</h5>

        <div className="filter-options">
          {/* Featured Dropdown Button */}
          <div
            className="dropdown"
            onClick={() => setFeaturedDropOpen(!featuredDropOpen)}
          >
            <Button outline icon={<IconArrowDown />}>
              Featured
            </Button>
            {/* Featured Dropdown Menu */}
            {featuredDropOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">Featured</li>
                <li className="dropdown-item">Lowest</li>
                <li className="dropdown-item">Highest</li>
              </ul>
            )}
          </div>

          {/* View Button Group */}
          <ButtonGroup>
            <button
              className={productView === "grid" ? "active" : ""}
              onClick={() => setProductView("grid")}
            >
              <IconGrid />
            </button>

            <button
              className={productView === "list" ? "active" : ""}
              onClick={() => setProductView("list")}
            >
              <IconList />
            </button>
          </ButtonGroup>
        </div>
      </div>

      {/* Searach Bar */}
      <Search />

      {/* Product List */}
      <ProductList />
    </div>
  );
};

export default ContentBodyRight;
