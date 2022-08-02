import React from "react";
import Card from "../Card/Card";
import s from "../Card/Card.module.css";

const FavoritesList = ({ fav }) => {
  return (
    <div className={s.cardlist}>
      {fav.map((prod) => (
        <Card prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default FavoritesList;
