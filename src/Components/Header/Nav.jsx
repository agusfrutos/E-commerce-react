import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

import s from "./Nav.module.css";

import carrito from "../../assets/shopping_cart.png";
import logo from "../../assets/logo192.png";
import Favorite from "../../assets/Favorite.png";

const Nav = ({ isInHeader }) => {
  const { totalUnidades } = useContext(CartContext);

  return (
    <nav className={isInHeader ? s.nav : s.navFooter}>
      <Link to="/">
        <h2>CDA TIENDA</h2>
      </Link>
      <ul>
        <Link
          to={isInHeader ? "/category/remeras" : "https://www.instagram.com/"}
        >
          <li>{isInHeader ? "Remeras" : "Instagram"}</li>
        </Link>
        <Link
          to={isInHeader ? "/category/camisas" : "https://www.facebook.com/"}
        >
          <li>{isInHeader ? "Camisas" : "Facebok"}</li>
        </Link>
        <Link
          to={isInHeader ? "/category/gorras" : "https://www.linkedin.com/"}
        >
          <li>{isInHeader ? "Gorras" : "Linkedin"}</li>
        </Link>
        <Link to={"/category/rinoneras"}>
          <li>{isInHeader ? "Riñoneras" : undefined}</li>
        </Link>
        <Link to={"/category/billeteras"}>
          <li>{isInHeader ? "Billeteras" : undefined}</li>
        </Link>
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
