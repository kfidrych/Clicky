import React, { Component } from "react";
import PokemonCard from "./components/PokemonCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pokemons from "./pokemons.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pokemons
  };

  removePokemon = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const pokemons = this.state.pokemons.filter(pokemon => pokemon.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ pokemons });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Pokemon Clicky Memory Game!</Title>
        <div class="container">
          {this.state.pokemons.map(pokemon => (
            <div class="imgDiv">
              <PokemonCard
                removePokemon={this.removePokemon}
                id={pokemon.id}
                key={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
