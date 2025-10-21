// import React, { createContext, useContext, useReducer, ReactNode } from "react";

// type CartItem = {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// };

// type State = {
//   items: CartItem[];
// };

// type Action =
//   | { type: "ADD_ITEM"; payload: { id: string; name: string; price: number } }
//   | { type: "REMOVE_ITEM"; payload: { id: string } }
//   | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
//   | { type: "CLEAR_CART" };

// const initialState: State = { items: [] };

// function cartReducer(state: State, action: Action): State {
//   switch (action.type) {
//     case "ADD_ITEM": {
//       const { id, name, price } = action.payload;
//       const existing = state.items.find((i) => i.id === id);
//       if (existing) {
//         return {
//           items: state.items.map((i) =>
//             i.id === id ? { ...i, quantity: i.quantity + 1 } : i
//           ),
//         };
//       } else {
//         return {
//           items: [...state.items, { id, name, price, quantity: 1 }],
//         };
//       }
//     }
//     case "REMOVE_ITEM": {
//       return {
//         items: state.items.filter((i) => i.id !== action.payload.id),
//       };
//     }
//     case "UPDATE_QUANTITY": {
//       const { id, quantity } = action.payload;
//       return {
//         items: state.items
//           .map((i) => (i.id === id ? { ...i, quantity } : i))
//           .filter((i) => i.quantity > 0),
//       };
//     }
//     case "CLEAR_CART": {
//       return { items: [] };
//     }
//     default:
//       return state;
//   }
// }

// const CartStateContext = createContext<State | undefined>(undefined);
// const CartDispatchContext = createContext<React.Dispatch<Action> | undefined>(
//   undefined
// );

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [state, dispatch] = useReducer(cartReducer, initialState);
//   return (
//     <CartStateContext.Provider value={state}>
//       <CartDispatchContext.Provider value={dispatch}>
//         {children}
//       </CartDispatchContext.Provider>
//     </CartStateContext.Provider>
//   );
// }

// export function useCartState() {
//   const context = useContext(CartStateContext);
//   if (context === undefined) {
//     throw new Error("useCartState must be used within a CartProvider");
//   }
//   return context;
// }

// export function useCartDispatch() {
//   const context = useContext(CartDispatchContext);
//   if (context === undefined) {
//     throw new Error("useCartDispatch must be used within a CartProvider");
//   }
//   return context;
// }

// context/CartContext.tsx
"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

type CartState = {
  items: CartItem[];
};

type Action =
  | { type: "ADD"; payload: CartItem }
  | { type: "REMOVE"; payload: number }
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number };

const CartContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<React.Dispatch<Action> | undefined>(
  undefined
);

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };

    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0),
      };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });
  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (!context)
    throw new Error("useCartDispatch must be used inside CartProvider");
  return context;
}
