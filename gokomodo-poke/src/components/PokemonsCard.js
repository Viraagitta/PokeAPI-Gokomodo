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
  console.log(poke.abilities, "<<card");
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
    <div classNameName="flex flex-row">
      <Card>
        <div className="rounded overflow-hidden shadow-lg">
          <Sprite
            classNameName="flex items-center"
            src={poke.sprites.other["official-artwork"]["front_default"]}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{poke.name}</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            {poke.abilities?.map((el) => {
              return (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {el.ability.name}
                </span>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PokemonsCard;
