import React, { useState } from "react";
import "./header.css";
import Image from "./menu.svg"
import Loger from './android-chrome-512x512.png'

function Header() {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className="container-header">
      <div className="Header">
        <div>
            <img src={Loger} alt="logo" />
        </div>
        <div className="menu">
            <a href="#propos">À propos</a>
            <a href="#projets">Mes projets</a>
            <a href="#Competences">Compétences</a>
            <a href="#contact">Réseaux</a>
        </div>
       
      </div>
      <div className={`HeaderResp ${visible ? "visible" : ""}`}>
      
        <div>
          <a href="#propos">À propos</a>
          <a href="#projets">Mes projets</a>
          <a href="#Competences">Compétences</a>
          <a href="#contact">Réseaux</a>
        </div>
      </div>
      <div className="Logo-resp">
      <div>
            <img src={Loger} alt="logo" />
        </div>
        <img
            className="img"
            onClick={toggleMenu}
            src={Image}
            alt=" rien trouvé"
          />
    </div>
    </div>
  );
}

export default Header;
