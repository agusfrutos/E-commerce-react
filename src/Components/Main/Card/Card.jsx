import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../../../Context/FavContext";
import { isIn } from "../../../utils/utils";
import Favorite from "../../../assets/Favorite.png";
import FavoriteFilled from "../../../assets/FavoriteFilled.png";

import s from "./Card.module.css";

const Card = ({ prod }) => {
  const {fav, addFav} = useContext(FavContext)

  const isInFav = isIn(fav, prod.id) 

  return (
    <div className={s.card}>
      <div className={s.imagefavorite}>
      <Link to={`/detail/${prod.id}`}>
        
        <img src={prod.img} alt={prod.name} />
      </Link>
      <img className={s.favorite} onClick={()=>addFav(prod)} src={isInFav ? FavoriteFilled : Favorite} alt='favoritos'/>
      </div>
      <div className={s.info}>
        <Link to={`/detail/${prod.id}`}>
          <h3>{prod.name.toUpperCase()}</h3>
        </Link>
        <p>{prod.price} ARS</p>
      </div>
    </div>
  );
};

export default Card;
