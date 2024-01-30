import React from "react";
import "./competence.css";

function CardComp({ title, img }) {
  return (
    <div className="cardComp" target="_blank" rel="noreferrer">
        <img src={img} alt={title} />
        <h2>{title}</h2>
    </div>
  );
}

export default CardComp;
