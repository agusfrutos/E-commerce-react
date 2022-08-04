import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

import s from "./Nav.module.css";

import carrito from "../../assets/shopping_cart.png";
import logo from "../../assets/logo192.png";
import Favorite from "../../assets/Favorite.png";

const Nav = ({ isInHeader }) => {
  const { totalUnidades } = useContext(CartContext);

  const categoriasNav = [
    {
      id: 1,
      name: "Remeras",
      path: "/category/remeras",
    },
    {
      id: 2,
      name: "Camisas",
      path: "/category/camisas",
    },
    {
      id: 3,
      name: "Gorras",
      path: "/category/gorras",
    },
    {
      id: 4,
      name: "Billeteras",
      path: "/category/billeteras",
    },
    {
      id: 5,
      name: "Riñoneras",
      path: "/category/rinoneras",
    },
  ];

  const categoriasFooter = [
    {
      id: 1,
      name: "Facebook",
      path: 'https://google.com',
    },
    {
      id: 2,
      name: "Instagram",
      path: "https://www.instagram.com/",
    },
    {
      id: 3,
      name: "Linkedin",
      path: "https://www.linkedin.com/",
    },
  ];

  const categorias = isInHeader ? categoriasNav : categoriasFooter;

  return (
    <nav className={isInHeader ? s.nav : s.navFooter}>
      <Link to="/">
        <h2>CDA TIENDA</h2>
      </Link>
      <ul>
        {categorias.map((categoria) => (
          <Link key={categoria.id} to={categoria.path}>
            {categoria.name}
          </Link>
        ))}
      </ul>
      <div>
        <Link to="/favorites">
          <img src={isInHeader ? Favorite : null} alt="" />
        </Link>
        <Link to="/cart">
          <span>{isInHeader ? totalUnidades : null}</span>
          <img src={isInHeader ? carrito : logo} alt="logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
