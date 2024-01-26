import React from "react";
import "./card.css";

function Card({ title, img, description, link }) {
  return (
    <a className="card" target="_blank" href={link} rel="noreferrer">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
}

export default Card;
