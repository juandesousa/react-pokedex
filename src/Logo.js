import React from "react";


const Logo = ({ appName, logWhenClicked }) => {
  // const welcomeMessage = "Welcome to the Pokedex";
  // const appName = 'Pokedex';

  return (

    <header>
      <h1>{appName}</h1>
      <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png' alt="Pokemon" onClick={logWhenClicked}></img>
    </header>

  );
}

export default Logo;