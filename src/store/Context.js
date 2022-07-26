import React, { createContext, useReducer } from "react";
import { reducer, filterReducer } from "./Reducer";
import { Products } from "./AllData";
export const AppContext = createContext();

const Context = (props) => {

  const [state, dispatch] = useReducer(reducer, {
    Products: Products,
    cart: []
  })

  const [filterProd, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byFastDeliver: false,
    searchQuery: ""
  })

  return (
    <AppContext.Provider value={{state, dispatch, filterProd, filterDispatch}}>
        {props.children}
    </AppContext.Provider>
  );
};

export default Context;
