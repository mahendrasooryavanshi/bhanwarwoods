"use client";
import { useCart, useCartDispatch } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items } = useCart();
  const dispatch = useCartDispatch();

  const handleRemove = (id: number) =>
    dispatch({ type: "REMOVE", payload: id });
  const handleIncrement = (id: number) =>
    dispatch({ type: "INCREMENT", payload: id });
  const handleDecrement = (id: number) =>
    dispatch({ type: "DECREMENT", payload: id });

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto mt-20 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 mb-4">Your cart is currently empty.</p>
          <Link
            href="/"
            className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 text-sm mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>

              <div className="text-right">
                <p className="font-medium">
                  Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="border-t pt-4 mt-4 text-right">
            <h2 className="text-xl font-bold">Total: ₹{total.toFixed(2)}</h2>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
