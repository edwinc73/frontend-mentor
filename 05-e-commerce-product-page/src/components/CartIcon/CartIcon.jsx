import { useContext } from "react";
import "./CartIcon.scss";
import cart from "/src/assets/images/icon-cart.svg";
import { CartContext } from "../../context/cartContext";

export default function CartIcon() {
  const cartContext = useContext(CartContext);
  return (
    <div className="cart">
      <button>
        <img src={cart} alt="open cart" className="cart-icon" />
      </button>
      <div className="cart-number">{cartContext.cart.length}</div>
    </div>
  );
}
