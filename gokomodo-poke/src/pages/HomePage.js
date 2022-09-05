// import CarouselItem from "../components/Carousel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonsCard from "../components/PokemonsCard";
import { fetchPokemons } from "../store/actions";

export default function HomePage() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col py-3">
            {/* <h3></h3> */}
            <div className="content-container">
              {pokemons.results?.map((poke) => {
                return <PokemonsCard key={poke.id} poke={poke} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
