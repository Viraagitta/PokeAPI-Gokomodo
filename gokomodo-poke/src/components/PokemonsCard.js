import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function PokemonsCard({ poke }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const detailHandler = (id) => {
  //   // console.log(id);
  //   navigate(`/${id}`);
  // };

  return (
    <>
      <div>POKEMON CARD {poke.name}</div>
    </>
  );
}

export default PokemonsCard;
