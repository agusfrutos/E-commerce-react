import React from "react";
import Card from "./Card";
import s from "./Card.module.css";

export const CardList = ({ items }) => {
  return (
    <div className={s.cardlist}>
      {items.map((prod) => (
        <Card prod={prod} key={prod.id} />
      ))}
    </div>
  );
};
