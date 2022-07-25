import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CardList } from "./CardList";
import s from "./Card.module.css";

export const CardContainer = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const URL = 'https://fake-products-eric.herokuapp.com/api/products'
    const peticion = categoria ? `${URL}/category/${categoria}` : URL;
    
    fetch(peticion)
    .then((res) => res.json())
    .then((res) => setItems(res))
    .catch((err) => console.log(err))
  }, [categoria]);

  // useEffect(() => {
  //   if (categoria) {
  //     fetch(
  //       `https://fake-products-eric.herokuapp.com/api/products/category/${categoria}`
  //     )
  //       .then((res) => res.json())
  //       .then((res) => setItems(res));
  //   } else {
  //     fetch("https://fake-products-eric.herokuapp.com/api/products")
  //       .then((res) => res.json())
  //       .then((res) => setItems(res));
  //   }
  // }, [categoria]);

  return (
    <div className={s.cardcontainer}>
      <h2>Artículos</h2>
      <CardList items={items} />
    </div>
  );
};
