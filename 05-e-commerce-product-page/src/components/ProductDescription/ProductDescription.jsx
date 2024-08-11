import "./ProductDescription.scss";
import cartIcon from "/src/assets/images/icon-cart.svg";
import plusIcon from "/src/assets/images/icon-plus.svg";
import minusIcon from "/src/assets/images/icon-minus.svg";
import { useState } from "react";

export default function ProductDescription({
  description,
  discount,
  name,
  price,
  finalPrice,
}) {
  const [quantity, setQuantity] = useState(1);
  return (
    <form id="product-description">
      <div className="title-small small bold">Sneaker Company</div>
      <label className="bold title">
        <h1>{name}</h1>
      </label>
      <p className="body-text">{description}</p>
      <div className="price-container">
        <div className="price">
          <div className="bold">
            <h2>${finalPrice}</h2>
          </div>
          {discount > 0 ? (
            <div className="discount">{`${discount * 100}%`}</div>
          ) : null}
        </div>
        <small className="strike-off small">${price}</small>
      </div>
      <div className="input-container">
        <div className="number-input">
          <button id="increment">
            <img src={plusIcon} alt="" />
          </button>
          <input type="number" name="quantity" id="quantity" value={quantity} />
          <button id="decrement">
            <img src={minusIcon} alt="" />
          </button>
        </div>
        <button type="submit">
          <img src={cartIcon} alt="add to cart icon" />
          Add to cart
        </button>
      </div>
    </form>
  );
}
