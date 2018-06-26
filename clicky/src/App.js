import React, { Component } from "react";
import PokemonCard from "./components/PokemonCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import pokemons from "./pokemons.json";
import "./App.css";

class App extends Component {
  state = {
    pokemons,
    score: 0,
    highscore: 0,
    guess: "Make Your First Catch!"
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score });
    }
    this.state.pokemons.forEach(pokemon => {
      pokemon.clicked = 0;
    });
    alert(`You already caught that Pokemon! Game Over :( \nScore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  clickImage = id => {
    this.state.pokemons.find((x, y) => {
      if (x.id === id) {
        if (pokemons[y].clicked === 0) {
          pokemons[y].clicked = pokemons[y].clicked + 1;
          this.setState({ 
            score: this.state.score + 1,
            guess: "You Caught The Pokemon!"
           });
          this.state.pokemons.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.setState({guess: "Make Your First Catch!"});
          this.gameOver();
        }
      }
    });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar score={this.state.score} highscore={this.state.highscore} guess={this.state.guess}/>
        <Header />
        <Title>Pokemon Clicky Memory Game!</Title>
        <div className="container">
          {this.state.pokemons.map(pokemon => (
            <div className="imgDiv">
              <PokemonCard
                clickImage={this.clickImage}
                removePokemon={this.removePokemon}
                id={pokemon.id}
                key={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
              />
            </div>
          ))}
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
