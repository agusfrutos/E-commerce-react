import React from "react";
import { useParams } from "react-router-dom";
import s from './Checkout.module.css'


const Checkout = () => {
  const {idCompra} = useParams()
  
    return (
      <div className={s.checkout}>
        <h2>
          Aquí tienes la orden de compra para seguir el
          envio: {idCompra}, gracias por comprar en CDA Tienda!
        </h2>
      </div>
  );
};

export default Checkout;
