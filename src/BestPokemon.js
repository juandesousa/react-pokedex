import React from "react";

const BestPokemon = ({abilities}) => {

    return (
      <div>
        <p>My favorite pokemon is: </p>
        <ul>
          {abilities.map( (ability,index) => <li key={index}>{ability}</li>)}
        </ul>
      </div>
    )
  }

  export default BestPokemon;