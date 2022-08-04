import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import CartDetail from "./CartDetail";
import Form from "../Form/Form";
import s from "./Cart.module.css";

const Cart = () => {
  const { cart, totalCart, clearCart, deleteOne, restarCart, sumarCart } =
    useContext(CartContext);
  // eslint-disable-next-line
  const [idCompra, setIdCompra] = useState("");

  const handleId = (param) => {
    setIdCompra(param);
    console.log("id: ", param);
  };

  if (cart.length === 0) {
    return (
      <div className={s.cartContainer}>
        <h1>Tu carrito esta vacio.</h1>
        <Link to="/">
          <button className={s.buttonhome}>Volver a la tienda</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className={s.cartContainer}>
        {cart.map((prod) => (
          <CartDetail
            key={prod.id}
            prod={prod}
            deleteOne={deleteOne}
            restarCart={restarCart}
            sumarCart={sumarCart}
          />
        ))}
        <div>
          <button className={s.vaciar} onClick={clearCart}>
            Vaciar carrito
          </button>
          <h2>Total: ${totalCart} </h2>
        </div>
        <Form
          cart={cart}
          clearCart={clearCart}
          totalCart={totalCart}
          handleId={handleId}
        />
      </div>
    </>
  );
};

export default Cart;
