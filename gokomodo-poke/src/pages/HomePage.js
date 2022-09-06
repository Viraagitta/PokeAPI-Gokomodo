import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import PokemonsCard from "../components/PokemonsCard";
import { fetchPokemons } from "../store/actions";

export default function HomePage() {
  const dispatch = useDispatch();
  let pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <>
      <Pagination pokemons={pokemons} />
      <div className="container-fluid">
        <div className="row">
          <div className="col py-3">
            <div className="flex flex-wrap justify-center gap-4">
              {pokemons.final?.map((poke, i) => {
                return <PokemonsCard key={poke.id} poke={poke} i={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Pagination pokemons={pokemons} />
    </>
  );
}
