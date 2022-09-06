// import CarouselItem from "../components/Carousel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import PokemonsCard from "../components/PokemonsCard";
import { fetchDetailPokemon, fetchPokemons } from "../store/actions";

export default function HomePage() {
  const dispatch = useDispatch();
  let pokemons = useSelector((state) => state.pokemons);
  // const detailPokemon = useSelector((state) => state.detailPokemon);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(false);
  //   dispatch(fetchPokemons());
  // }, []);

  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  const nextPages = (e, page) => {
    e.preventDefault();
    setNext(page);
  };
  function prevPage(e, page) {
    e.preventDefault();
    setPrev(page);
  }
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  console.log(pokemons.nextPage, " >>");
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
    </>
  );
}
