import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailPokemon } from "../store/actions";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "flowbite-react";
const remy = (px) => `${px / 16}rem`;
const PokemonImage = styled.img`
  width: 300px;
  height: 300px;
  margin: 20px;
  padding: 10px;
`;

const PokeCard = styled.div`
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 ${remy(40)} rgba(0,0,0,.15);
`;
function PokemonsCard({ poke, i }) {
  // console.log(poke.abilities, "<<card");
  const dispatch = useDispatch();

  const detailPokemon = useSelector((state) => state.detailPokemon);

  useEffect(() => {
    dispatch(fetchDetailPokemon(poke.name));
  }, []);

  return (
    <div className="flex flex-row">
      <Link to={`${poke.id}`}>
        <PokeCard>
          <Card>
            <div className="rounded overflow-hidden shadow-lg">
              <PokemonImage
                className="flex items-center"
                src={poke.sprites.other["official-artwork"]["front_default"]}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{poke.name}</div>
              </div>
              <div className="px-6 pt-4 pb-2">
                {poke.types?.map((el) => {
                  return (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {el.type.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </Card>
        </PokeCard>
      </Link>
    </div>
  );
}

export default PokemonsCard;
