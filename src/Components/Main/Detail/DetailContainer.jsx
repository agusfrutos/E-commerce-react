import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "./CardDetail";
import s from "./CardDetail.module.css";

const DetailContainer = () => {
  const [item, setItem] = useState({});
  //const prueba = useParams()
  //console.log(prueba.id)
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fake-products-eric.herokuapp.com/api/products/detail/${id}`)
      .then((res) => res.json())
      .then((res) => setItem(res));
  }, [id]);

  return (
    <div className={s.detailContainer}>
      <CardDetail item={item} />
    </div>
  );
};

export default DetailContainer;
