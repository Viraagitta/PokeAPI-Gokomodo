import { DATA_FETCH_SUCCESS, DETAIL_POKEMON_ID } from "../actions/actiontype";

export const fetchPokemonSuccess = (payload) => {
  return {
    type: DATA_FETCH_SUCCESS,
    payload,
  };
};

export const fetchPokemons = (page) => {
  return async (dispatch, getState) => {
    try {
      let data = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"
      );
      // console.log(page, "page");
      if (page) {
        data = await fetch(page);
      }
      const result = await data.json();

      let pokemon = result.results.map(async (el) => {
        const data = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${el.name}`
        );
        return await data.json();
      });
      // console.log(await Promise.all(pokemon), "<<testing");
      const final = await Promise.all(pokemon);
      dispatch(
        fetchPokemonSuccess({
          final,
          nextPage: result.next,
          prevPage: result.previous,
          totalPage: result.count,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchDetailPokemonSuccess = (payload) => {
  return {
    type: DETAIL_POKEMON_ID,
    payload,
  };
};

export const fetchDetailPokemon = (id) => {
  console.log(id);
  return (dispatch, getState) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => dispatch(fetchDetailPokemonSuccess(data)))
      .catch((err) => console.log(err));
  };
};
