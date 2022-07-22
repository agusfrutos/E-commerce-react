import React from "react";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";

import s from "./CardDetail.module.css";

const CardDetail = ({ item, categoria }) => {
  const add = () => {
    console.log("añadido")
  }
  return (
    <div className={s.detail}>
      <img src={item.img} alt={item.name} />
      <div className={s.detail_info}>
        <h2>{item.name}</h2>
        <h3> ${item.price} </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          unde fugit harum laboriosam sapiente? Ullam provident atque neque
          commodi optio itaque facere, praesentium rerum. Quisquam inventore
          quia delectus sapiente illum!
        </p>
        <Counter stock={item.stock} initial={1} add={add}/>
        <p className={s.categoria}> Categoría: <strong><Link to={`/category/${item.categoria}`}>{item.categoria}</Link></strong>  </p>
      </div>
    </div>
  );
};

export default CardDetail;
