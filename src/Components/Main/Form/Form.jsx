import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Form.module.css";

const URL = "https://fake-products-eric.herokuapp.com/api/orders";

const Form = ({ cart, clearCart, totalCart}) => {
  const [dataForm, setDataForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const order = async () => {
    setLoading(true);
    const enviarDatos = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart,
        total: totalCart,
        user: dataForm.nombre,
        phone: dataForm.telefono,
      }),
    });
    const response = await enviarDatos.json();
    console.log("response ", response);
    setLoading(false);
    clearCart();
    navigate(`/checkout/${response.id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    order();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
        <p className={s.formtext}>
          Ingresa tus datos para finalizar la compra:
        </p>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
          value={dataForm.nombre}
          required
        ></input>
        <input
          type="number"
          name="telefono"
          placeholder="Ingresa tu telefono"
          onChange={handleChange}
          value={dataForm.telefono}
          required
        ></input>
        <button>{loading ? "Enviando..." : "Enviar"}</button>
    </form>
  );
};

export default Form;
