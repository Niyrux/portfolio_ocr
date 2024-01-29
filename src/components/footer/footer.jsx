import React from "react";
import "./footer.css";
import logolinkedin from './linkedin.png'
import logogithub from './github.png'
import logomail from './e-mail.png'

function Footer() {

    let year = new Date().getFullYear();

  return (
    <div className="container-footer">
    <div className="container-logo" >
      <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin">
        <img src={logolinkedin} alt="" />
      </a>
      <a href="https://github.com/Niyrux/">
        <img src={logogithub} alt="https://github.com/Niyrux/" />
      </a>
      <a href="mailto:samuel47000@hotmail.com">
        <img src={logomail} alt="" />
      </a>
    </div>
    <div className="date">
        <p>© {year} LEVY Samuel, Tous droits réservés.</p>
    </div>
    </div>
  );
}

export default Footer;
