import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailPokemon } from "../store/actions";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "flowbite-react";
const remy = (px) => `${px / 8}rem`;
const PokemonImage = styled.img`
  width: 400px;
  height: 400px;
  margin: auto;
  padding: 10px;
`;

const PokeCard = styled.div`
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 ${remy(40)} rgba(0, 0, 0, 0.15);
`;
function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const detailPokemon = useSelector((state) => state.detailPokemon);
  // console.log(detailPokemon);
  useEffect(() => {
    dispatch(fetchDetailPokemon(id));
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
  // console.log(getTypeColor("dragon")[1]);
  return (
    <div className="flex flex-row">
      <PokeCard>
        <Card>
          <div className="rounded overflow-hidden shadow-lg ">
            <div className="flex flex-row">
              <div className="text-md mb-2">
                <div className="flex flex-column font-bold text-lg mb-2 px-5 pt-5 uppercase">
                  #00{detailPokemon.id}
                </div>
                <div className="flex flex-column font-bold text-xl mb-2 px-5 uppercase">
                  {detailPokemon.name}
                </div>
                <div className="text-md px-8 py-4 pb-2 w-96 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>

              <PokemonImage
                className="flex items-center"
                src={
                  detailPokemon.sprites?.other["official-artwork"][
                    "front_default"
                  ]
                }
              />
              <div className="px-6 mt-14 uppercase">
                <div className="pl-6 text-lg font-bold text-left">Type </div>
                <div className="pl-6 text-sm font-bold text-left">
                  {detailPokemon.types?.map((el) => {
                    return getTypeColor(el.type.name) ? (
                      <span
                        className={`inline-block ${
                          getTypeColor(el.type.name)[0]
                        }  ${
                          getTypeColor(el.type.name)[1]
                        } rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2`}
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
                <div className="pl-6 pt-2 text-lg font-bold text-left">
                  Abilities
                </div>
                <div className="pl-6 pb-2 text-sm font-bold text-left">
                  {detailPokemon.abilities?.map((el) => {
                    return (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                        {el.ability.name}
                      </span>
                    );
                  })}
                </div>
                <div className="pl-6 pt-4 pb-2 text-lg font-bold">
                  {detailPokemon.stats?.map((el) => {
                    return (
                      <>
                        <div className="flex flex-row  text-base font-bold">
                          {el.stat.name} : {el.base_stat}
                        </div>
                        <div>
                          <span
                            className={`inline-block ${
                              getTypeColor(detailPokemon.types[0]?.type.name)[0]
                            } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-80 text-left`}
                          ></span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </PokeCard>
    </div>
  );
}

export default DetailPage;
