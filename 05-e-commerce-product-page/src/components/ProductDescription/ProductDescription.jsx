import "./ProductDescription.scss";
import cartIcon from "/src/assets/images/icon-cart.svg";
import plusIcon from "/src/assets/images/icon-plus.svg";
import minusIcon from "/src/assets/images/icon-minus.svg";
import { useContext, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../context/cartContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "update":
      return action.payload;
    default:
      break;
  }
};

const rangeError = () => {
  throw new Error("Please enter a number between 1-10");
};

export default function ProductDescription({
  id,
  description,
  discount,
  name,
  price,
  finalPrice,
}) {
  const [quantity, dispatchQuantity] = useReducer(reducer, 1);
  const [error, setError] = useState(null);
  const { cart, dispatch } = useContext(CartContext);

  const handleClick = (e) => {
    const id = e.currentTarget.id;

    try {
      // validate update
      let value = Number(e.target.value);
      if (id == "update") {
        if (value > 10) {
          value = 10;
          return rangeError();
        }
        if (value <= -1) {
          value = 0;
          return rangeError();
        }
      }

      // validate increment / decrement
      if (id == "decrement" && quantity - 1 < 1) return rangeError();
      if (id == "increment" && quantity + 1 > 10) return rangeError();

      // dispatch
      if (id === "update") {
        setError(null);
        return dispatchQuantity({ type: id, payload: value });
      }
      if (id === "increment" || id === "decrement") {
        setError(null);
        return dispatchQuantity({ type: e.target.id });
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = () => {
      if (cart.find((item) => item.id == id)) {
        return { type: "updateCart", payload: { id: id, quantity: quantity } };
      } else {
        return { type: "addToCart", payload: { id: id, quantity: quantity } };
      }
    };

    dispatch(action());
  };

  return (
    <form id="product-description" noValidate onSubmit={handleSubmit}>
      <div className="title-small small bold">Sneaker Company</div>
      <label className="bold title">
        <h1>{name}</h1>
      </label>
      <p className="body-text">{description}</p>
      <div className="price-container">
        <div className="price">
          <div className="bold">
            <h2>${finalPrice}.00</h2>
          </div>
          {discount > 0 ? (
            <div className="discount">
              <span className="bold">{`${discount * 100}`}</span>
              <span>%</span>
            </div>
          ) : null}
        </div>
        <small className="strike-off bold">${price}.00</small>
      </div>
      <div className="input-container">
        <div className="number-input">
          <button id="increment" type="button" onClick={handleClick}>
            <img src={plusIcon} alt="increment quantity icon" />
          </button>
          <input
            className="bold"
            type="number"
            name="quantity"
            id="update"
            max={10}
            min={1}
            value={quantity}
            onChange={handleClick}
          />
          <button id="decrement" type="button" onClick={handleClick}>
            <img src={minusIcon} alt="decrement quantity icon" />
          </button>
        </div>
        {error && <small className="error-message">{error}</small>}
        <button type="submit" className="bold">
          <img src={cartIcon} alt="add to cart icon" />
          Add to cart
        </button>
      </div>
    </form>
  );
}

ProductDescription.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  discount: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  finalPrice: PropTypes.number,
};
