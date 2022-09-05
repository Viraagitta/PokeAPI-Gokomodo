// import { legacy_createStore as createStore } from "redux";
import { DATA_FETCH_SUCCESS, DETAIL_POKEMON_ID } from "../actions/actiontype";
const initialState = { pokemons: [], detailPokemon: [] };
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return { ...state, pokemons: action.payload };
    case DETAIL_POKEMON_ID:
      return { ...state, detailPokemon: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
