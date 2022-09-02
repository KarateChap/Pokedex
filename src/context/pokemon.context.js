import { createContext, useReducer } from "react";

export const PokemonContext = createContext({
  currentPokemon: [],
  currentLink: "",
  prevLink: "",
  nextLink: "",
  pokemonDetailLink: "",
  setCurrentPokemon: () => null,
  setCurrentLink: () => null,
  setPrevLink: () => null,
  setNextLink: () => null,
  setPokemonDetailLink: () => null,
});

export const POKEMON_ACTION_TYPES = {
  SET_CURRENT_POKEMON: "SET_CURRENT_POKEMON",
  SET_CURRENT_LINK: "SET_CURRENT_LINK",
  SET_PREV_LINK: "SET_PREV_LINK",
  SET_NEXT_LINK: "SET_NEXT_LINK",
  SET_POKEMON_DETAIL_LINK: "SET_POKEMON_DETAIL_LINK",
};

const pokemonReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case POKEMON_ACTION_TYPES.SET_CURRENT_POKEMON:
      return {
        ...state,
        currentPokemon: payload,
      };
    case POKEMON_ACTION_TYPES.SET_CURRENT_LINK:
      return {
        ...state,
        currentLink: payload,
      };
    case POKEMON_ACTION_TYPES.SET_PREV_LINK:
      return {
        ...state,
        prevLink: payload,
      };
    case POKEMON_ACTION_TYPES.SET_NEXT_LINK:
      return {
        ...state,
        nextLink: payload,
      };
    case POKEMON_ACTION_TYPES.SET_POKEMON_DETAIL_LINK:
      return {
        ...state,
        pokemonDetailLink: payload,
      };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  currentPokemon: null,
  currentLink: "https://pokeapi.co/api/v2/pokemon",
  prevLink: "",
  nextLink: "",
  pokemonDetailLink: "",
};

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, INITIAL_STATE);
  const { currentPokemon, currentLink, prevLink, nextLink, pokemonDetailLink } = state;

  const setCurrentPokemon = (pokemon) => {
    dispatch({
      type: POKEMON_ACTION_TYPES.SET_CURRENT_POKEMON,
      payload: pokemon,
    });
  };

  const setCurrentLink = (currentLink) => {
    dispatch({
      type: POKEMON_ACTION_TYPES.SET_CURRENT_LINK,
      payload: currentLink,
    });
  };

  const setPrevLink = (prevLink) => {
    dispatch({ type: POKEMON_ACTION_TYPES.SET_PREV_LINK, payload: prevLink });
  };

  const setNextLink = (nextLink) => {
    dispatch({ type: POKEMON_ACTION_TYPES.SET_NEXT_LINK, payload: nextLink });
  };

  const setPokemonDetailLink = (pokemonDetailLink) => {
    dispatch({
      type: POKEMON_ACTION_TYPES.SET_POKEMON_DETAIL_LINK,
      payload: pokemonDetailLink,
    });
  };

  const value = {
    currentPokemon,
    currentLink,
    prevLink,
    nextLink,
    pokemonDetailLink,
    setCurrentPokemon,
    setCurrentLink,
    setPrevLink,
    setNextLink,
    setPokemonDetailLink,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
