//import React from 'react'
//import style from './Header.module.css';
import Nav from "./Nav";

/* const styles = {
    navbar: {
        color: 'white',
    },
}; */

const Header = () => {
  return (
    <header className="header">
      <Nav isInHeader={true}/>
    </header>
  );
};

export default Header;
