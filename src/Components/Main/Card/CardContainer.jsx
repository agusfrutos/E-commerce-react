import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

import { CardList } from "./CardList";
import s from "./Card.module.css";

export const CardContainer = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const { categoria } = useParams();

  const URL = "https://fake-products-eric.herokuapp.com/api/products";

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    setLoading(true);
    const peticion = categoria ? `${URL}/category/${categoria}` : URL;

    fetch(peticion)
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [categoria]);

  return (
    <div className={s.cardcontainer}>
      <h2>Artículos</h2>
      {loading ? (
        <BarLoader cssOverride={override} />
      ) : (
        <CardList items={items} />
      )}
    </div>
  );
};
