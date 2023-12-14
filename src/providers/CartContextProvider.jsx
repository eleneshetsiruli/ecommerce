import { useState } from "react";
import useLocalStorage from "../Hooks/UseLocalStorage";
import { CartContext } from "../contexts/CartContextProvider";

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cart", []);
  const [count, setCount] = useState(0);

  function addToCart(product) {
    const isProductInCart = cartItems.find((item) => item.id === product.id);
    if (!isProductInCart) {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    } else {
      {
        cartItems.map((item) => {
          if (item.id === product.id) return { ...item, qty: item.qty + 1 };
        });
      }
    }
  }
  const removeCart = (id) => {
    const deleteItems = cartItems.filter((el) => el.id !== id);
    setCartItems(deleteItems);
  };
  return (
    <div>
      <CartContext.Provider
        value={{
          addToCart,
          removeCart,
          count,
          setCount,
          cartItems,
          setCartItems,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};
