import React, { useState, useEffect } from "react";
import { useProductContext } from "../common/ProductContext";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, setCart } = useProductContext();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [subtotal, setSubtotal] = useState(0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateSubtotalAndTotal = () => {
    let subtotalValue = 0;

    cart.forEach((item) => {
      subtotalValue += item.price * item.quantity;
    });

    setSubtotal(subtotalValue);
  };

  useEffect(() => {
    calculateSubtotalAndTotal();
  }, [cart]);

  return (
    <div className="relative">
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        onClick={toggleCart}
        aria-expanded={isCartOpen}
        aria-controls="cartDropdown"
      >
        Carrinho ({cart.length})
      </button>

      {isCartOpen && (
        <div className="fixed top-0 bottom-0 right-0 md:w-96 sm:w-72 w-full h-full overflow-auto text-center opacity-95 bg-white border-l-2 border-zinc-400 z-50 transition-all duration-500 transform">
          <div className="h-20 w-full flex justify-between items-center border-b-2 px-4">
            <h3 className="font-bold text-xl">SHOPPING CART</h3>
            <button
              className="items-center text-black right-4 flex space-x-2"
              onClick={toggleCart}
            >
              <AiOutlineClose className="mr-2" />
              CLOSE
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="h-3/4 flex items-center justify-center text-gray-600">
              Seu carrinho está vazio.
            </p>
          ) : (
            <div className="h-3/4">
              <ul className="h-full overflow-y-auto">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} onRemove={removeFromCart} />
                ))}
              </ul>

              <div className="fixed py-4 px-8 bottom-0 left-0 w-full bg-zinc-100 border-t-2 border-zinc-300 space-y-4">
                <div className="flex justify-between">
                  <p className="text-black text-lg font-semibold">Subtotal:</p>{" "}
                  <span className="text-black text-lg font-semibold">
                    ${subtotal.toFixed(2)}
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
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
