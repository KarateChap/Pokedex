import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/pokemon.context";
import Pokeball from "../assets/pokeball-3d.png";

const Details = () => {
  const { pokemonDetailLink } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(pokemonDetailLink)
      .then((response) => {
        setPokemon(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full md:h-[92vh] md:p-0 p-5 h-screen bg-zinc-800 text-white flex justify-center">
      {loading && (
        <div className="w-full max-w-[1240px] flex flex-row flex-wrap items-center justify-center gap-10 shadow-2xl">
        <div className="animate-bounce flex justify-center">
          <img src={Pokeball} className="w-[200px] h-[200px] rounded-full" />
        </div>
        </div>
      )}

      {!loading && (
        <div className="w-full max-w-[1240px] flex flex-row flex-wrap items-center justify-center gap-10 shadow-2xl">
          {pokemon && (
            <div className="bg-zinc-700 text-white p-5 rounded-xl tracking-wide shadow-xl ">
              <div className="w-full bg-zinc-100 flex justify-center mb-2 rounded-xl border-slate-500 border-4">
                {pokemon.sprites.front_default && (
                  <img
                    src={pokemon.sprites.front_default} alt="/"
                    className="w-[300px]"
                  />
                )}
              </div>
              <h1 className="font-bold uppercase text-2xl pb-5">
                Name: <span className="text-[#ff3b3b]">{pokemon.name}</span>
              </h1>
              <div className="flex flex-col">
                <h1 className="font-bold uppercase text-1xl">
                  Type: {pokemon.types[0].type.name}
                </h1>
              </div>
              <h1 className="font-bold uppercase text-1xl">Abilities:</h1>
              {pokemon &&
                pokemon.abilities.map((ability) => {
                  return (
                    <h1 className="ml-20 uppercase font-bold text-right">
                      {ability.ability.name}
                    </h1>
                  );
                })}
            </div>
          )}
          <div className="w-full max-w-[300px] text-black bg-slate-50 p-5 rounded-xl shadow-2xl">
            <h1 className="uppercase font-bold tracking-wider text-3xl pb-5 text-[#ff3b3b]">
              Stats
            </h1>
            {pokemon &&
              pokemon.stats.map((stat) => {
                return (
                  <div className="flex w-full justify-between ">
                    <h1 className="font-bold tracking-wide uppercase">
                      {stat.stat.name}
                    </h1>
                    <h1 className="font-bold tracking-wide text-2xl">
                      {stat.base_stat}
                    </h1>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
