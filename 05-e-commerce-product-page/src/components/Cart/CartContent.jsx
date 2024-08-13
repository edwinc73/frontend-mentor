import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { productInfo } from "../../productInfo";
import deleteIcon from "/src/assets/images/icon-delete.svg";
import { AnimatePresence, motion } from "framer-motion";

export const CartContent = ({ cart }) => {
  const { dispatch } = useContext(CartContext);
  const handleClick = (e) => {
    console.log("delete");
    dispatch({ type: "removeItem", payload: e.currentTarget.dataset.id });
  };
  return (
    <div className="cart-content">
      {cart.map((item) => {
        const cartItem = productInfo.find(
          (product) => product.id === item.productId
        );
        const price = cartItem.price * cartItem.discount;
        return (
          <AnimatePresence key={item.productId}>
            <motion.div
              initial={{ transform: "translateX(100px)", opacity: 0 }}
              animate={{ transform: "translateX(0)", opacity: 1 }}
              exit={{ transform: "translateX(100px)", opacity: 0 }}
            >
              <div className="item">
                <div className="img-container">
                  <img
                    src={cartItem.image[0].thumbnail}
                    alt={cartItem.image[0].alt}
                  />
                </div>
                <div className="description">
                  <p>{cartItem.name}</p>
                  <p>
                    ${price} x {item.quantity}
                    <span className="bold">${price * item.quantity}</span>
                  </p>
                </div>
                <button
                  aria-label="remove item"
                  className="delete"
                  onClick={handleClick}
                  data-id={item.productId}
                >
                  <img src={deleteIcon} alt="delete item from cart" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        );
      })}
      <button className="checkout bold">Checkout</button>
    </div>
  );
};
