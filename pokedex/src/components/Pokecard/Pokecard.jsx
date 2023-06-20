import React from "react";
import './Pokecard.css';

const poke_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends React.Component {
  render() {
    let imageSource = `${poke_API}${padToThree(this.props.id)}.png`;

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img className="Pokecard-image" src={imageSource} alt="Pokemon" />
        <div className="Pokecard-data">
            <p>Type: {this.props.type}</p>
            <p>Base Experience: {this.props.baseExperience}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;
