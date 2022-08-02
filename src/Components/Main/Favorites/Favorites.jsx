import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../../../Context/FavContext";
import FavoritesList from "./FavoritesList";
import s from "../Card/Card.module.css";
import ss from "../Cart/Cart.module.css";

const Favorites = () => {
  const { fav } = useContext(FavContext);

  if (fav.length === 0) {
    return (
      <div className={ss.cartContainer}>
        <h1>Tu lista de favoritos esta vacia.</h1>
        <Link to="/">
          <button className={ss.buttonhome}>Volver a la tienda</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={s.cardcontainer}>
      <h2>Favoritos</h2>
      <FavoritesList fav={fav} />
    </div>
  );
};

export default Favorites;
