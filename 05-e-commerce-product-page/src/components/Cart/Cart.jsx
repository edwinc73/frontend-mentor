import { useContext } from "react";
import "./Cart.scss";
import { CartContext } from "../../context/cartContext";
import { EmptyCart } from "./EmptyCart";
import { CartContent } from "./CartContent";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div id="cart-pop-up">
        <div className="title">
          <p className="bold">Cart</p>
        </div>
        {cart.length == 0 ? <EmptyCart /> : <CartContent cart={cart} />}
      </div>
    </>
  );
}
