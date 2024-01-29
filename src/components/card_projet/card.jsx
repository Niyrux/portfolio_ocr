import React from "react";
import "./card.css";

function Card({ title, img, description, link }) {
  return (
    <a className="card" target="_blank" href={link} rel="noreferrer">
      <span className="flow"></span>
      <div className="inner">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default Card;
