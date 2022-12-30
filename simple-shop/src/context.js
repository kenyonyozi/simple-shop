import React, { useState } from "react";
import { data, detail } from "./data";

const ProductContext = React.createContext();
// provider
// consumer

const ProductProvider = ({ children }) => {
  const [state, setState] = useState({
    products: data,
    detail: detail,
    cart: [],
  });

  // adding grand total in cart
 
  const totalCartAmount = state.cart
    .reduce((total, product) => (total = total + product.price * product.count), 0) ;
    
   
  

  // adding items
  const addToCart = (product) => {
    setState({
      ...state,
      cart: state.cart.find((item) => item.id === product.id)
        ? state.cart.map((item) =>
            item.id === product.id ? { ...item, count: item.count + 1 } : item
          )
        : [...state.cart, { ...product, count: 1 }], 
      
    });  
    
  };

  //   removing items
  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== id),
    });

  // increasing items
  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ),
    });
  };
  //reducing quatity
  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((item) =>
        item.id === id
          ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
          : item
      ),
    });
  };

  
  return (
    <ProductContext.Provider
      value={{ state, addToCart, removeFromCart, increase, decrease ,totalCartAmount }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// create a consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
