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

  const getTypeColor = (pokeType) => {
    let background,
      text = "";
    switch (pokeType) {
      case "normal":
        background = "bg-gray-300";
        text = "text-black";
        break;
      case "fire":
        background = "bg-orange-400";
        text = "text-red-800";
        break;
      case "water":
        background = "bg-blue-400";
        text = "text-blue-800";
        break;
      case "grass":
        background = "bg-green-400";
        text = "text-green-800";
        break;
      case "poison":
        background = "bg-purple-400";
        text = "text-indigo-900";
        break;
      case "fighting":
        background = "bg-red-400";
        text = "text-rose-900";
        break;
      case "ice":
        background = "bg-cyan-400";
        text = "text-cyan-800";
        break;
      case "flying":
        background = "bg-sky-400";
        text = "text-sky-800";
        break;
      case "electric":
        background = "bg-yellow-400";
        text = "text-yellow-800";
        break;
      case "ground":
        background = "bg-yellow-600";
        text = "text-yellow-900";
        break;
      case "bug":
        background = "bg-lime-400";
        text = "text-lime-800";
        break;
      case "rock":
        background = "bg-orange-400";
        text = "text-orange-900";
        break;
      case "ghost":
        background = "bg-indigo-400";
        text = "text-indigo-900";
        break;
      case "dragon":
        background = "bg-violet-400";
        text = "text-violet-900";
        break;
      case "steel":
        background = "bg-gray-400";
        text = "text-gray-800";
        break;
      case "psychic":
        background = "bg-pink-300";
        text = "text-pink-900";
        break;
      case "dark":
        background = "bg-gray-800";
        text = "text-white";
        break;
      case "fairy":
        background = "bg-pink-400";
        text = "text-white";
        break;
    }
    return [background, text];
  };
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
                  return getTypeColor(el.type.name) ? (
                    <span
                      className={`inline-block ${
                        getTypeColor(el.type.name)[0]
                      }  ${
                        getTypeColor(el.type.name)[1]
                      } rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2`}
                      //   {getTypeColor(el.type.name)[0],
                      //   getTypeColor(el.type.name)[1]
                      // }
                    >
                      {el.type.name}
                    </span>
                  ) : (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 font-semibold mr-2 mb-2">
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
