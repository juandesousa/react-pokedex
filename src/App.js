// import logo from './logo.svg';
import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import './App.css';


const App = () => {

  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];

  const date = new Date().toLocaleDateString();

  const logWhenClicked = () => {
    console.log("it doesn't matter what the message is")
  };

  return (

    <div>
      <Logo appName="Pokedex" logWhenClicked={logWhenClicked}/>
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon date={date}/>
    </div>

  );
}

export default App;
