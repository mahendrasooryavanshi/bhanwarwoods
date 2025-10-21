// "use client";
// import { useCart, useCartDispatch } from "@/context/CartContext";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// interface CartDrawerProps {
//   open: boolean;
//   onClose: () => void;
// }

// export default function CartDrawer({ open, onClose }: CartDrawerProps) {
//   const { items } = useCart();
//   const dispatch = useCartDispatch();

//   const handleRemove = (id: number) =>
//     dispatch({ type: "REMOVE", payload: id });
//   const handleIncrement = (id: number) =>
//     dispatch({ type: "INCREMENT", payload: id });
//   const handleDecrement = (id: number) =>
//     dispatch({ type: "DECREMENT", payload: id });

//   const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

//   return (
//     <>
//       {open && (
//         <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>
//       )}

//       <div
//         className={`fixed top-0 right-0 w-80 h-full bg-white shadow-xl transform transition-transform duration-300 z-50
//           ${open ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-lg font-semibold">Your Cart</h2>
//           <button onClick={onClose}>
//             <XMarkIcon className="h-6 w-6" />
//           </button>
//         </div>

//         <div className="p-4 overflow-y-auto h-[calc(100%-160px)]">
//           {items.length === 0 ? (
//             <p className="text-gray-500 text-center mt-10">Cart is empty</p>
//           ) : (
//             items.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center border-b py-2"
//               >
//                 <div>
//                   <h3 className="text-sm font-medium">{item.name}</h3>
//                   <p className="text-gray-600 text-sm">₹{item.price}</p>

//                   <div className="flex items-center gap-2 mt-1">
//                     <button
//                       onClick={() => handleDecrement(item.id)}
//                       className="px-2 border rounded"
//                     >
//                       −
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => handleIncrement(item.id)}
//                       className="px-2 border rounded"
//                     >
//                       +
//                     </button>
//                   </div>

//                   <button
//                     onClick={() => handleRemove(item.id)}
//                     className="text-red-500 text-xs mt-1 hover:underline"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="p-4 border-t">
//           <p className="text-lg font-semibold">Total: ₹{total}</p>
//           <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
