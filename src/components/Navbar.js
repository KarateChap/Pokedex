import React from "react";
import { Outlet, Link } from "react-router-dom";
import Pokeball from "../assets/pokeball.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[8vh] bg-zinc-900 flex items-center justify-center">
        <div className="max-w-[1240px] w-full flex justify-start items-center select-none md:pl-0 pl-5">
          <img src={Pokeball} className="w-[55px] " draggable="false" />
          <h1 className="text-white text-4xl font-bold ml-5 cursor-pointer">
            <Link to='/'>Pokedex.</Link>
          </h1>
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default Navbar;
