import Card from "../Card";
import { IconEcommerce, IconWishlist, IconStar } from "../SVG/IconSvg";
import "./styles.css";
import "./styles-list.css";

const ProductListItem = ({ product, view }) => {
  return (
    <>
      {/* Grid View Scenario */}
      {view === "grid" && (
        <Card className="product">
          {/* Product Image */}
          <div className="product__imgWrapper">
            <img src={product.img} alt="Product Image" />
          </div>

          {/* Product Detils [Rating, Price, Name, Description] */}
          <div className="product-details">
            <div className="product_rating__price">
              <div className="product__rating">
                {Array(product.rating)
                  .fill()
                  .map((x, i) => (
                    <IconStar key={i} size={16} filled="true" />
                  ))}
                {Array(5 - product.rating)
                  .fill()
                  .map((x, i) => (
                    <IconStar size={16} key={i} />
                  ))}
              </div>

              <h5 className="product__price">${product.price}</h5>
            </div>

            <h4 className="product__name">{product.name}</h4>
            <p className="product__desc">{product.discription}</p>
          </div>

          {/* Buttons [Wishlist, ViewInCart */}
          <button className="wishlist__btn">
            <IconWishlist size={14} /> Wishlist
          </button>

          <button className="cart__btn">
            <IconEcommerce size={14} /> View In Cart
          </button>
        </Card>
      )}

      {/* List View Scenario */}
      {view === "list" && (
        <Card className="product plv">
          {/* Left Side */}
          <div className="plv__left">
            <img src={product.img} alt="Product Image" />
          </div>

          {/* Center */}
          <div className="plv__center">
            {/* Name */}
            <h4 className="plv__name">{product.name}</h4>

            {/* Brand */}
            <div className="plv__brand">
              By<a href="#">{product.brand}</a>
            </div>

            {/* Stars */}
            <div className="plv__rating">
              {Array(product.rating)
                .fill()
                .map((x, i) => (
                  <IconStar key={i} filled="true" />
                ))}
              {Array(5 - product.rating)
                .fill()
                .map((x, i) => (
                  <IconStar key={i} />
                ))}
            </div>

            {/* Desctiption */}
            <p className="plv__desc">{product.discription}</p>
          </div>

          {/* Right Side */}
          <div className="plv__right">
            {/* Price */}
            <h2 className="plv__price">${product.price}</h2>

            {/* Buttons */}
            <div className="plv__buttons">
              <button className="wishlist__btn">
                <IconWishlist size={14} /> Wishlist
              </button>
              <button className="cart__btn">
                <IconEcommerce size={14} /> View In Cart
              </button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ProductListItem;
