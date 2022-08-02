import React from "react";
import { Link } from "react-router-dom";
import s from "./CartDetail.module.css";

const CartDetail = ({ prod, deleteOne, sumarCart, restarCart }) => {

  return (
    <div className={s.containerCartDetail}>
      <div className={s.infoCartDetail}>
        <button className={s.botonDelete} onClick={() => deleteOne(prod.id)}>
          ×
        </button>
        <img src={prod.img} alt={prod.name} />
        <article>
          <Link to={`/detail/${prod.id}`}>{prod.name}</Link>
          <div className={s.subtotal}>
            <h4>${prod.price}</h4>
            <div className={s.cantidadbutton}>
              <button
                className={s.boton}
                onClick={() => restarCart(prod.id)}
                disabled={prod.cantidad === 1}
              >
                -
              </button>
              <h4>{prod.cantidad} </h4>
              <button
                className={s.boton}
                onClick={() => sumarCart(prod.id)}
                disabled={prod.cantidad === prod.stock}
              >
                +
              </button>
            </div>
            <h4> ${prod.price * prod.cantidad}</h4>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CartDetail;
