import { useRef } from "react";
import { useStore } from "../../context/AppContext";
import { IconClose } from "../SVG/IconSvg";
import { filtersVals } from "../../utils/helperValues";
import Card from "../Card";
import "./styles.css";

const FilterSidebar = () => {
  const minRef = useRef();
  const maxRef = useRef();
  const { filters, setFilters, products } = useStore();
  const minPrice = Math.min(...products.map((p) => p.price));
  const maxPrice = Math.max(...products.map((p) => p.price));

  // Default checks for filters
  document.querySelectorAll("[value='All']")?.forEach((x) => {
    x.setAttribute("checked", "true");
  });

  // Default min & max
  minRef.current?.setAttribute("value", minPrice);
  maxRef.current?.setAttribute("value", maxPrice);

  const handleFilters = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, [e.target.name]: value });
  };

  const handleCloseMenu = () => {
    const sidebar = document.querySelector("#filter-sidebar");
    sidebar.classList.remove("show");
  };

  return (
    <div className="filter-sidebar" id="filter-sidebar">
      <h5 className="filter-sidebar__heading">Filters</h5>
      <Card>
        {/* Prices Multi-range Filter */}
        <div className="filter-sidebar__item">
          <div className="sidebar__heading">
            <h5>Multi Range</h5>

            {/* Mobile Close menu */}
            <div className="menu__close__icon" onClick={handleCloseMenu}>
              <IconClose />
            </div>
          </div>

          <div className="radio-group">
            {filtersVals.multiRange.map((title, i) => (
              <label key={i} className="radio">
                <input
                  type="radio"
                  name="priceMulti"
                  value={title}
                  onChange={handleFilters}
                />
                {title}
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="filter-sidebar__item">
          <h5>Price Range</h5>

          <div className="range-minmax">
            ${minRef.current?.value} - ${maxRef.current?.value}
          </div>

          <div className="range-input">
            <input
              ref={minRef}
              type="range"
              min={minPrice}
              max={maxPrice}
              name="min"
              onChange={handleFilters}
            />
            <input
              ref={maxRef}
              type="range"
              min={minPrice}
              max={maxPrice}
              name="max"
              onChange={handleFilters}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="filter-sidebar__item">
          <h5>Categories</h5>
          <div className="radio-group">
            {filtersVals.categories.map((item, i) => (
              <label key={i} className="radio">
                <input
                  type="radio"
                  name="category"
                  value={item}
                  onChange={handleFilters}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Brands Filter */}
        <div className="filter-sidebar__item">
          <h5>Brands</h5>
          <div className="radio-group">
            {filtersVals.brands.map((item, i) => (
              <label key={i} className="radio">
                <input
                  type="radio"
                  name="brand"
                  value={item}
                  onChange={handleFilters}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FilterSidebar;
