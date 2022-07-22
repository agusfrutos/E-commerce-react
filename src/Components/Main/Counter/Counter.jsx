import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import s from "./Counter.module.css";

const Counter = ({ add, stock, initial }) => {
  const [count, setCount] = useState(initial);
  const navigate = useNavigate();

  const Sumar = () => {
    // count >= stock ? console.log('No hay mas stock') : setCount(count + 1);
    count < stock && setCount(count + 1);
  };

  const Restar = () => {
    // count < 2 ? console.log('por favor seleccione al menos un producto') : setCount(count - 1);
    initial < count && setCount(count - 1);
  };

  const Reset = () => {
    setCount(initial);
    navigate("/cart");
  };

  return (
    <div className={s.counter}>
      <div className={s.botones}>
        <button className={s.resta} onClick={Restar}>-</button>
      <p className={s.numero}>{count}</p>
        <button className={s.suma} onClick={Sumar}>+</button>
      </div>
      <button className={s.agregar} onClick={Reset}>
        Agregar al Carrito
      </button>
      {/* <button className={s.reset} onClick={Reset}>
        Reset
      </button> */}
    </div>
  );
};

export default Counter;
