import React, { useContext } from "react";
import Card from "../Card/Card";
import { FavContext } from "../../../Context/FavContext";
import s from "../Card/Card.module.css";

const Favorites = () => {
  const { fav } = useContext(FavContext);
  return (
    <div className={s.cardlist}>
      {fav.map((prod) => (
        <Card prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default Favorites;
