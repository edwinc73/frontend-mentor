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
  const { cart, dispatch, setOpenCart } = useContext(CartContext);

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
      const inCart = cart.find((item) => item.productId == id);
      dispatchQuantity({ type: "update", payload: 1 });
      setOpenCart(true);
      if (inCart) {
        return {
          type: "updateCart",
          payload: { productId: id, quantity: quantity },
        };
      } else {
        return {
          type: "addToCart",
          payload: { productId: id, quantity: quantity },
        };
      }
    };

    dispatch(action());
  };

  return (
    <div id="product-description" noValidate onSubmit={handleSubmit}>
      <div className="title-small small bold">Sneaker Company</div>
      <div className="bold title">
        <h1>{name}</h1>
      </div>
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
      <form className="input-container" aria-label="add to cart">
        <div className="number-input">
          <button
            id="decrement"
            type="button"
            onClick={handleClick}
            aria-label="remove 1 item"
          >
            <img src={minusIcon} alt="decrement quantity icon" />
          </button>
          <input
            aria-label="Quantity"
            className="bold"
            type="number"
            autoComplete="off"
            name="quantity"
            id="update"
            max={10}
            min={1}
            value={quantity}
            onChange={handleClick}
          />
          <button
            id="increment"
            type="button"
            onClick={handleClick}
            aria-label="add 1 more item"
          >
            <img src={plusIcon} alt="increment quantity icon" />
          </button>
        </div>
        <div aria-live="assertive" className="error-message">
          {error && <small>{error}</small>}
        </div>
        <button type="submit" className="bold" aria-label="Add to cart">
          <img src={cartIcon} alt="add to cart icon" />
          Add to cart
        </button>
      </form>
    </div>
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
