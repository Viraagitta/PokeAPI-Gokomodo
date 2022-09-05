import { DATA_FETCH_SUCCESS, DETAIL_POKEMON_ID } from "../actions/actiontype";

export const fetchPokemonSuccess = (payload) => {
  return {
    type: DATA_FETCH_SUCCESS,
    payload,
  };
};
export const fetchPokemons = () => {
  return (dispatch, getState) => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=40&offset=0", {})
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })

      .then((data) => {
        // console.log(data);
        dispatch(fetchPokemonSuccess(data));
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};
export const fetchDetailPokemonSuccess = (payload) => {
  return {
    type: DETAIL_POKEMON_ID,
    payload,
  };
};

export const fetchDetailPokemon = (id) => {
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
