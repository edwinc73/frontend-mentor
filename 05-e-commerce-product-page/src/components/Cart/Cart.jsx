import { useContext, useEffect } from "react";
import "./Cart.scss";
import { CartContext } from "../../context/cartContext";
import { EmptyCart } from "./EmptyCart";
import { CartContent } from "./CartContent";
import closeIcon from "/src/assets/images/icon-close.svg";

export default function Cart() {
  const { cart, setOpenCart } = useContext(CartContext);

  return (
    <>
      <div id="cart-pop-up" aria-live="polite">
        <div className="title">
          <p className="bold">Cart</p>
          <button
            className="close"
            onClick={() => {
              setOpenCart(false);
            }}
          >
            <img
              role="presentation"
              src={closeIcon}
              alt="close light box icon"
            />
          </button>
        </div>
        {cart.length == 0 ? <EmptyCart /> : <CartContent cart={cart} />}
      </div>
    </>
  );
}
