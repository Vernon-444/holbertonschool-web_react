import React from "react";
import logo from '/src/assets/Holberton_Logo.jpg';
import "./Header.css";

function Header() {
  return (
    <React.Fragment>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>School Dashboard</h1>
    </React.Fragment>
  );
}

export default Header;
