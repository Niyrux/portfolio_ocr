import React from "react";
import "./footer.css";
import logolinkedin from './linkedin.png'
import logogithub from './github.png'
import logomail from './e-mail.png'

function Footer() {

    let year = new Date().getFullYear();

  return (
    <div className="container-footer" id="contact">
    <div className="container-logo" >
      <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" rel="noreferrer" target="_blank">
        <img src={logolinkedin} alt="logo linkedin" />
      </a>
      <a href="https://github.com/Niyrux/" rel="noreferrer" target="_blank">
        <img src={logogithub} alt="logo github" />
      </a>
      <a href="mailto:samuel47000@hotmail.com" rel="noreferrer" target="_blank">
        <img src={logomail} alt="logo mail" />
      </a>
    </div>
    <div className="date">
        <p>© {year} LEVY Samuel, Tous droits réservés.</p>
    </div>
    </div>
  );
}

export default Footer;
