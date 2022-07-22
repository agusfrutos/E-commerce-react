import s from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ prod }) => {
  return (
    <div className={s.card}>
      <Link to={`/detail/${prod.id}`}>
        <img src={prod.img} alt={prod.name} />
      </Link>
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
