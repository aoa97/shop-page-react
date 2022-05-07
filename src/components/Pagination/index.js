import { useStore } from "../../context/AppContext";
import { IconArrowLeft, IconArrowRight } from "../SVG/IconSvg";
import "./styles.css";

const Pagination = () => {
  const { currentPage, setCurrentPage, productsPerPage, totalProducts } =
    useStore();

  // No of pages
  const pageNumbers = [];
  const size = totalProducts.length;
  for (let i = 1; i <= Math.ceil(size / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pag">
      {/* Move to Last Page */}
      <div
        className={currentPage == 1 ? "pag-arrow disabled" : "pag-arrow"}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <IconArrowLeft />
      </div>

      {/* Pages List */}
      <ul className="pag-pages">
        {pageNumbers.map((n) => (
          <li
            key={n}
            className={currentPage == n ? "active" : ""}
            onClick={() => setCurrentPage(n)}
          >
            {n}
          </li>
        ))}
      </ul>

      {/* Move to Next Page */}
      <div
        className={
          currentPage == pageNumbers.length ? "pag-arrow disabled" : "pag-arrow"
        }
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <IconArrowRight />
      </div>
    </div>
  );
};

export default Pagination;
