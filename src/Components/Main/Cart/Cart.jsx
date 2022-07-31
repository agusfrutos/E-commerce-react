import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import CartDetail from "./CartDetail";
import s from "./Cart.module.css";
// import Form from '../Form/Form'

const Cart = () => {
  const { cart, clearCart, deleteOne, restarCart, sumarCart } = useContext(CartContext);

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
          <CartDetail key={prod.id} prod={prod} deleteOne={deleteOne} restarCart={restarCart} sumarCart={sumarCart} />
        ))}
        <div>
          <button className={s.vaciar} onClick={clearCart}>
            Vaciar carrito
          </button>
          <h2>Total: $ </h2>
        </div>
      </div>
      {/* <Form /> */}
    </>
  );
};

export default Cart;
