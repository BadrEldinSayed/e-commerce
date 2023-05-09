import { useContext, createContext, useReducer } from "react";

let ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempstate = state.filter((pro) => action.payload.id == pro.id);
        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "INCREASE":
        const tempstate2 = state.map((item) => {
          if (item.id == action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return tempstate2;

      case "DECREASE":
        const tempstate3 = state.map((item) => {
          if (item.id == action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempstate3;

        case "REMOVE":
          const tempstate4 = state.filter((item) => item.id !== action.payload.id );
          return tempstate4;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, []);

  const info = { state, dispatch };

  return (
    <ShoppingCartContext.Provider value={info}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
