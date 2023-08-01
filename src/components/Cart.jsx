import React, { useState } from "react";
import { useProductContext } from "../common/ProductContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, setCart } = useProductContext();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  const handleQuantityChange = (itemToUpdate, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === itemToUpdate.id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const { subTotal, total } = cart.reduce(
    (acc, item) => {
      acc.subTotal += item.original_price
        ? item.original_price * item.quantity
        : item.price * item.quantity;
      acc.total += item.price * item.quantity;
      return acc;
    },
    { subTotal: 0, total: 0 }
  );

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
          {cart.length === 0 ? (
            <p className="text-center text-gray-600 h-1/4 flex items-center justify-center">
              Seu carrinho está vazio.
            </p>
          ) : (
            <>
              <div className="h-20 w-full flex justify-start items-center border-b-2">
                <button className="absolute text-black right-4" onClick={toggleCart}>
                  X
                </button>
              </div>
              <div className="h-5/6">
                <ul className="h-5/6 overflow-y-auto">
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onRemove={removeFromCart}
                      onQuantityChange={handleQuantityChange}
                    />
                  ))}
                </ul>

                <div className="fixed bottom-0 left-0 w-full bg-zinc-100 border-t-2 border-zinc-300">
                  <div className="p-4">
                    <p className="text-black">Subtotal</p>{" "}
                    <span className="text-black">${subTotal.toFixed(2)}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-black">Total</p>{" "}
                    <span className="text-black">${total.toFixed(2)}</span>
                  </div>
                  <button
                    className="block mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800"
                    onClick={clearCart}
                  >
                    Esvaziar Carrinho
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
