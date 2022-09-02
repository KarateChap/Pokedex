
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../context/pokemon.context";

const Details = () => {
  const {pokemonDetailLink} = useContext(PokemonContext);

  useEffect(() => {
    axios.get(pokemonDetailLink).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <div>details</div>
  )
}

export default Details