import { createContext, useReducer, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "updateCart":
      return state.map((item) => {
        const { quantity, productId } = action.payload;
        if (item.productId !== productId) return item;
        return {
          ...item,
          quantity: quantity,
        };
      });
    case "removeItem": {
      return state.filter((item) => item.productId == action.payload.productId);
    }
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, []);
  const [openCart, setOpenCart] = useState(false);

  return (
    <CartContext.Provider value={{ dispatch, cart, openCart, setOpenCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.array,
};
