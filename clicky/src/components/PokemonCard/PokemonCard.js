import React from "react";
import "./PokemonCard.css";

const PokemonCard = props => (
  <div className="card" clicked={props.clicked} onClick={() => props.clickImage(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default PokemonCard;
