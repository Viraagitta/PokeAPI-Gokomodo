import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailPokemon } from "../store/actions";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "flowbite-react";
const Sprite = styled.img`
  width: 300px;
  height: 300px;
  alignself: center;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;
function PokemonsCard({ poke, i }) {
  // console.log(poke, "<<card");
  const dispatch = useDispatch();

  const detailPokemon = useSelector((state) => state.detailPokemon);

  useEffect(() => {
    dispatch(fetchDetailPokemon(poke.name));
  }, []);
  // const detailHandler = (id) => {
  //   // console.log(id);
  //   navigate(`/${id}`);
  // };

  return (
    <div className="flex flex-row">
      <Card>
        <div class="rounded overflow-hidden shadow-lg">
          <Sprite
            className="flex items-center"
            src={poke.sprites.other["official-artwork"]["front_default"]}
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{poke.name}</div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PokemonsCard;
