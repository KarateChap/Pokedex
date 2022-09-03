import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import { PokemonContext } from "../context/pokemon.context";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const { currentPokemon,nextLink, prevLink, setCurrentLink, setPokemonDetailLink, pokemonDetailLink} = useContext(PokemonContext);

  const nextPageHandler = () => {
    setCurrentLink(nextLink);
  }

  const prevPageHandler = () => {
    setCurrentLink(prevLink);
  }

  const onViewPokemonDetails = (url) => {
    setPokemonDetailLink(url);
    navigate('/details')
  }

  return (
    <div className="w-full sm:h-[92vh] bg-zinc-800 flex flex-col justify-between align-center items-center pt-10 pb-[10px]">
      <div className="w-full max-w-[1240px] grid md:grid-rows-6 lg:grid-cols-4 md:grid-cols-3 p-4 sm:grid-cols-2 gap-10 shadow-2xl">
        {currentPokemon && currentPokemon.map((pokemon) => (
          <div
            key={pokemon.name}
            className="text-center p-4 hover:scale-110 active:scale-100 select-none transition duration-100 ease-in-out bg-[#e01111] h-[70px] flex w-full justify-center items-center rounded-md cursor-pointer border-black border-[3px]"
            onClick={event => onViewPokemonDetails(pokemon.url)}
          >
            <h1 className="text-white text-2xl tracking-wide">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h1>
          </div>
        ))}
      </div>
      <div className="w-full flex max-w-[100px] justify-center mb-10">
        <div className="w-full flex justify-between">
          <IconButton
            className="bg-[#e01111] text-white"
            onClick={prevPageHandler}
          >
            <ArrowLeftIcon />
          </IconButton>
          <IconButton
            className="bg-[#e01111] text-white"
            onClick={nextPageHandler}
          >
            <ArrowRightIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
