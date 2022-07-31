import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cantidad) => {
    // console.log(item);
    // console.log(cantidad);
    //...item => name: 'producto 1', stock: 30, price: 200
    //console.log({ ...item, cantidad });
    if (isInCart(item.id)) {
      //sumar la cantidad
      alert("Ya está en el carrito, sumale la cantidad");
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const deleteOne = (id) => {
    const productosFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(productosFiltrados);
  };

  const clearCart = () => {
    setCart([]);
  };

  const sumarCart = (id) => { 
    setCart(cart.map((prod) => {
      const cantidad = prod.cantidad+1
      return prod.id === id ? 
       {...prod, cantidad } : {...prod}
    }))
  };

  const restarCart = (id) => {
    setCart(cart.map((prod) => {
      const cantidad = prod.cantidad-1
      return prod.id === id ? 
       {...prod, cantidad } : {...prod}
    }))
  };

  return (
    <>
      <CartContext.Provider
        value={{ cart, addToCart, clearCart, deleteOne, sumarCart, restarCart }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
