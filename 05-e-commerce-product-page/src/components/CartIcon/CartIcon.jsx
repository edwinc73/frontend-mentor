import { useContext } from "react";
import "./CartIcon.scss";
import cart from "/src/assets/images/icon-cart.svg";
import { CartContext } from "../../context/cartContext";
import Cart from "../Cart/Cart";
import { AnimatePresence, motion } from "framer-motion";
import { easeIn } from "framer-motion/dom";

export default function CartIcon() {
  const cartContext = useContext(CartContext);

  const OpenCart = () => {
    cartContext.setOpenCart((prev) => !prev);
  };
  return (
    <div className="cart">
      <button onClick={OpenCart}>
        <img src={cart} alt="open cart" className="cart-icon" />
      </button>
      <AnimatePresence>
        {cartContext.cart.length !== 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: easeIn }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="cart-number">{cartContext.cart.length}</div>
          </motion.div>
        ) : null}

        {cartContext.openCart ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Cart></Cart>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
