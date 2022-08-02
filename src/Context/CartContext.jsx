import React from "react";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });
  const [totalCart, setTotalCart] = useState(0);
  const [totalUnidades, setTotalUnidades] = useState(0);

  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      sumarCantidad(item, cantidad);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const sumarCantidad = (item, cantidad) => {
    const productsUpdate = cart.map((prod) => {
      if (prod.id === item.id) {
        const newProduct = {
          ...prod,
          cantidad: prod.cantidad + cantidad,
        };
        return newProduct;
      } else {
        return prod;
      }
    });
    setCart(productsUpdate);
  };

  const deleteOne = (id) => {
    const productosFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(productosFiltrados);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("items");
  };

  const sumarCart = (id) => {
    setCart(
      cart.map((prod) => {
        const cantidad = prod.cantidad + 1;
        return prod.id === id ? { ...prod, cantidad } : { ...prod };
      })
    );
  };

  const restarCart = (id) => {
    setCart(
      cart.map((prod) => {
        const cantidad = prod.cantidad - 1;
        return prod.id === id ? { ...prod, cantidad } : { ...prod };
      })
    );
  };

  const total = () => {
    /* return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0); */
    const copia = [...cart];
    let count = 0;
    copia.forEach((prod) => {
      count = count + prod.price * prod.cantidad;
    });
    return setTotalCart(count);
  };

  const unidades = () => {
    /* return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0); */
    const copia = [...cart];
    let count = 0;
    copia.forEach((prod) => {
      count = count + prod.cantidad;
    });
    return setTotalUnidades(count);
  };

  useEffect(() => {
    total();
    unidades();
    localStorage.setItem("items", JSON.stringify(cart));
    // eslint-disable-next-line
  }, [cart]);

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          totalCart,
          totalUnidades,
          addToCart,
          clearCart,
          deleteOne,
          sumarCart,
          restarCart,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
