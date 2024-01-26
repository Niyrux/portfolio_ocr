import React, { useState } from "react";
import "./header.css";
import Image from "./menu.png"
import Loger from './loger.png'

function Header() {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className="container-header">
      <div className="Header">
        <a href="#accueil">
            <img src={Loger} alt="" />
        </a>
        <div className="menu">
            <a href="#propos">À propos</a>
            <a href="#projets">Mes projets</a>
            <a href="#contact">Contact</a>
        </div>
       
      </div>
      <div className={`HeaderResp ${visible ? "visible" : ""}`}>
        <div>
          <a href="#propos">À propos</a>
          <a href="#projets">Mes projets</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
         
        </div>
      </div>
        <img
            className="img"
            onClick={toggleMenu}
            src={Image}
            alt=" rien trouvé"
          />
    </div>
  );
}

export default Header;
