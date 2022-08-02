import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../../../Context/CartContext";
import { FavContext } from "../../../Context/FavContext";

import Counter from "../Counter/Counter";
import { isIn } from "../../../utils/utils";

import Favorite from "../../../assets/Favorite.png";
import FavoriteFilled from "../../../assets/FavoriteFilled.png";

import s from "./CardDetail.module.css";

const CardDetail = ({ item }) => {
  const { addToCart, cart } = useContext(CartContext);

  const isInCartDetail = isIn(cart, item.id);

  const navigate = useNavigate();

  const add = (cantidad) => {
    addToCart(item, cantidad);
    navigate("/cart");
  };

  const { fav, addFav } = useContext(FavContext);

  const isInFav = isIn(fav, item.id);

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
        {isInCartDetail ? (
          <h4>
            Ya está en el <Link to="/cart">carrito</Link>
          </h4>
        ) : (
          <div className={s.counterfavorite}>
            <Counter stock={item.stock} initial={1} add={add} />
            <img
              className={s.favorite}
              onClick={() => addFav(item)}
              src={isInFav ? FavoriteFilled : Favorite}
              alt="favoritos"
            />
          </div>
        )}
        <p className={s.categoria}>
          Categoría:
          <strong>
            <Link to={`/category/${item.categoria}`}>{item.categoria}</Link>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default CardDetail;
