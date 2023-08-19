import React, { useState } from "react";
import { useProductContext } from "../common/ProductContext";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, setCart, subTotal, setSubTotal } = useProductContext();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };

  const clearCart = () => {
    setCart([]);
    setSubTotal(0);
  };

  const renderCartItems = () => {
    if (cart.length === 0) {
      return (
        <p className="h-3/4 flex items-center justify-center text-gray-600">
          Seu carrinho está vazio.
        </p>
      );
    }

    return (
      <div className="h-3/4">
        <ul className="h-full overflow-y-auto ">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}
        </ul>
        <div className="fixed py-4 px-8 bottom-0 left-0 w-full bg-zinc-100 border-t-2 border-zinc-300 space-y-4">
          <div className="flex justify-between">
            <p className="text-black text-lg font-semibold">Subtotal:</p>{" "}
            <span className="text-black text-lg font-semibold">
              ${subTotal.toFixed(2)}
            </span>
          </div>

          <div className="flex space-x-4">
            <button
              className="block w-2/5 bg-zinc-600 text-white text-sm px-4 py-2 rounded-md hover:bg-zinc-800"
              onClick={clearCart}
            >
              CLEAR CART
            </button>
            <button
              className="block w-3/5 bg-zinc-600 text-white text-lg px-4 py-2 rounded-md hover:bg-zinc-800"
              onClick={clearCart}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex justify-center items-center">
      <button
        className="flex items-center justify-center rounded-full border-zinc-300 h-10 w-10 bg-zinc-200"
        onClick={toggleCart}
        aria-expanded={isCartOpen}
        aria-controls="cartDropdown"
      >
        < AiOutlineShoppingCart size={20}/>
      </button>

      <div
        className={`fixed top-0 bottom-0 right-0 md:w-96 sm:w-72 w-full h-full overflow-auto text-center bg-white border-l-2 border-zinc-400 z-50 transition-all duration-300 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-16 w-full flex justify-between items-center  px-4">
          <h3 className="font-bold text-xl">SHOPPING CART</h3>
          <button
            className="items-center text-black right-4 flex space-x-2"
            onClick={toggleCart}
          >
            <AiOutlineClose className="mr-2" />
            CLOSE
          </button>
        </div>

        {renderCartItems()}
      </div>
    </div>
  );
};

export default Cart;
