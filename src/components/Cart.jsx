import React, { useState } from "react";

const Cart = () => {
  // Sample cart items (you can pass props or connect with Add to Cart later)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Domino's Pizza",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      price: 299,
      quantity: 1,
    },
    {
      id: 2,
      name: "Chicken Biryani",
      image: "https://cdn.dummyjson.com/recipe-images/11.webp",
      price: 199,
      quantity: 2,
    },
    {
      id: 3,
      name: "Chicken Biryani",
      image: "https://cdn.dummyjson.com/recipe-images/11.webp",
      price: 150,
      quantity: 2,
    },{
      id: 4,
      name: "Chicken Biryani",
      image: "https://cdn.dummyjson.com/recipe-images/20.webp",
      price: 200,
      quantity: 2,
    },
  ]);

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Total Price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-orange-600">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden shadow-lg bg-white p-4 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">₹{item.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center mt-2 space-x-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 font-bold hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Cart Summary */}
      {cartItems.length > 0 && (
        <div className="mt-6 p-6 rounded-2xl shadow-lg bg-white">
          <h2 className="text-lg font-semibold mb-2">Cart Summary</h2>
          <p className="text-gray-700 font-medium">
            Total: <span className="text-orange-600">₹{totalPrice}</span>
          </p>
          <button className="mt-4 w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
