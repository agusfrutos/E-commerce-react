import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import CardDetail from "./CardDetail";
import s from "./CardDetail.module.css";

const DetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});

  const { id } = useParams();

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://fake-products-eric.herokuapp.com/api/products/detail/${id}`)
      .then((res) => res.json())
      .then((res) => setItem(res));
    setLoading(false);
  }, [id]);

  return (
    <div className={s.detailContainer}>
      {loading ? (
        <BarLoader cssOverride={override} />
      ) : (
        <CardDetail item={item} />
      )}
    </div>
  );
};

export default DetailContainer;
