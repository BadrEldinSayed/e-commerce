import { useContext, createContext, useReducer } from "react";


let ItemsLoveContext = createContext({});

const ItemsLoveProvider = ({ children }) => {

  const reducer = (state, action)=> {
    switch (action.type) {
      case "ADD":
        const tempstate2 = state.filter((pro)=> action.payload.id == pro.id);
        if (tempstate2.length > 0) {
          return state;
        }else {
          return [...state, action.payload]
        }
        
        
      default:
        return state;
    }
  }

 const [state, dispatch] = useReducer(reducer, []);

const info2 = {state, dispatch}


  return (
    <ItemsLoveContext.Provider value={info2}>
      {children}
    </ItemsLoveContext.Provider>
  );
};

export default ItemsLoveProvider;

export const useItemsLove = () => {
  return useContext(ItemsLoveContext);
};
