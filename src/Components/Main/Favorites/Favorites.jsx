import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../../../Context/FavContext";
import FavoritesList from "./FavoritesList";
import s from "../Cart/Cart.module.css";
import ss from "../Card/Card.module.css";

const Favorites = () => {
  const { fav } = useContext(FavContext);

  if (fav.length === 0) {
    return (
      <div className={s.cartContainer}>
        <h1>Tu lista de favoritos esta vacia.</h1>
        <Link to="/">
          <button className={s.buttonhome}>Volver a la tienda</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={ss.cardcontainer}>
      <h2>Favoritos</h2>
      <FavoritesList fav={fav} />
    </div>
  );
};

export default Favorites;
