import React, { useState } from "react";
import s from "./Counter.module.css";

const Counter = ({ add, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    count < stock && setCount(count + 1);
  };

  const restar = () => {
    initial < count && setCount(count - 1);
  };

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
    </div>
  );
};

export default Counter;
