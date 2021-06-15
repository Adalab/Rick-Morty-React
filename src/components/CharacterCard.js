import React from "react";
import "../stylesheets/Card.scss";

const CharacterCard = (props) => {
  return (
    <article className="card">
      <img className="card__img" src={props.character.image} alt="" />
      <h2 className="card__title">{props.character.name}</h2>
      <ul className="card__ul">
        <li className="card__li">
          {props.character.specie} / {props.character.gender}
        </li>
        <li className="card__li">{props.character.status} </li>
      </ul>
    </article>
  );
};
export default CharacterCard;
