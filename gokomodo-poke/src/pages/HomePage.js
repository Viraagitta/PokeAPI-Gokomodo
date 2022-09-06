// import CarouselItem from "../components/Carousel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonsCard from "../components/PokemonsCard";
import { fetchDetailPokemon, fetchPokemons } from "../store/actions";

export default function HomePage() {
  // const dispatch = useDispatch();
  // let pokemons = useSelector((state) => state.pokemons);
  // const detailPokemon = useSelector((state) => state.detailPokemon);

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(false);
  //   dispatch(fetchPokemons());
  // }, []);

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col py-3">
            <div className="flex flex-wrap justify-center gap-4">
              {allPokemons.map((poke, i) => {
                return <PokemonsCard key={poke.id} poke={poke} i={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
