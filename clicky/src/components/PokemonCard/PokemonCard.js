import React from "react";
import "./PokemonCard.css";

const PokemonCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.removePokemon(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default PokemonCard;
