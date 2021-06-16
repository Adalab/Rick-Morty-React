import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props);
  return (
    <div className="card">
      <Link to="/">Volver al inicio</Link>
      Detalle del personaje
      <section>
        <img
          className="card__img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt=""
        />
        <h2 className="card__title">Nombre: </h2>
        <ul>
          <li>Status: </li>
          <li>Species: </li>
          <li>Origin: </li>
          <li>Episodes: </li>
        </ul>
      </section>
    </div>
  );
};
export default CharacterDetail;
