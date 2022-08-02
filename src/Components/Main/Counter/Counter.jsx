import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

import s from "./Counter.module.css";

const Counter = ({ add, stock, initial }) => {
  const [count, setCount] = useState(initial);
  // const navigate = useNavigate();

  const sumar = () => {
    // count >= stock ? console.log('No hay mas stock') : setCount(count + 1);
    count < stock && setCount(count + 1);
  };

  const restar = () => {
    // count < 2 ? console.log('por favor seleccione al menos un producto') : setCount(count - 1);
    initial < count && setCount(count - 1);
  };

  // const reset = () => {
  //   setCount(initial);
  //   navigate("/cart");
  // };

  const agregar = () => {
    add(count);
  };

  return (
    <div className={s.counter}>
      <div className={s.botones}>
        <button className={s.resta} onClick={restar}>
          -
        </button>
        <p className={s.numero}>{count}</p>
        <button className={s.suma} onClick={sumar}>
          +
        </button>
      </div>
      <button className={s.agregar} onClick={agregar}>
        Agregar al Carrito
      </button>
      {/* <button className={s.reset} onClick={reset}>
        <Reset></Reset>
      </button> */}
    </div>
  );
};

export default Counter;
