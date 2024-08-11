import "./CartIcon.scss";
import cart from "/src/assets/images/icon-cart.svg";

export default function CartIcon() {
  return (
    <div className="cart">
      <button>
        <img src={cart} alt="open cart" className="cart-icon" />
      </button>
      <div className="cart-number">12</div>
    </div>
  );
}
