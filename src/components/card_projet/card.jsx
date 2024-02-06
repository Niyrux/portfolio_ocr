import React from "react";
import "./card.css";

function Card({ title, img, description, link }) {
  return (
    <div className="card" target="_blank"  rel="noreferrer">
      <span className="flow"></span>
      <div className="inner">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}> Voir plus</a>
      </div>
      
    </div>
  );
}

export default Card;
