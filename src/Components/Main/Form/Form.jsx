import React from "react";
import { useState } from "react";

const Form = () => {
  const [dataForm, setDataForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  console.log(dataForm)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="ingresa tu nombre"
        onChange={handleChange}
        value={dataForm.nombre}
      ></input>
      <input
        type="email"
        name="email"
        placeholder="ingresa tu email"
        onChange={handleChange}
        value={dataForm.email}
      ></input>
      <input
        type="number"
        name="telefono"
        placeholder="ingresa tu telefono"
        onChange={handleChange}
        value={dataForm.telefono}
      ></input>
      <button>Enviar</button>
    </form>
  );
};

export default Form;
