import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import { PokemonContext } from "./context/pokemon.context";
import axios from "axios";

function App() {
  const {
    setCurrentPokemon,
    setNextLink,
    setPrevLink,
    currentLink,
  } = useContext(PokemonContext);

  useEffect(() => {
    let cancel;
    axios
      .get(currentLink, {
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then((res) => {
        setNextLink(res.data.next);
        setPrevLink(res.data.previous);
        setCurrentPokemon(res.data.results);

        return () => cancel();
      }).catch(error => {
        console.log(error);
      });
  }, [currentLink]);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
