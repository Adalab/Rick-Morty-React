import React from "react";
import "../stylesheets/Card.scss";
import live from "../images/live.png";
import dead from "../images/death.png";
import human from "../images/human.png";
import alien from "../images/alien.png";
import unknown from "../images/unknown.png";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const status = () => {
    if (props.character.status === "Alive") {
      return live;
    } else if (props.character.status === "Dead") {
      return dead;
    } else {
      return unknown;
    }
  };

  const specie = () => {
    if (props.character.specie === "Human") {
      return human;
    } else if (props.character.specie === "Alien") {
      return alien;
    }
  };

  return (
    <Link to={`/character/${props.character.id}`}>
      <article className="card">
        <img
          className="card__img"
          src={props.character.image}
          alt={props.character.name}
        />
        <h2 className="card__title">{props.character.name}</h2>
        <ul className="card__ul">
          <li className="card__li">
            {props.character.specie} / {props.character.gender}
          </li>
          <li className="card__li"></li>
          <img
            className="card__li-icon"
            src={specie()}
            alt={props.character.specie}
          />
          <img
            className="card__li-icon"
            src={status()}
            alt={props.character.status}
          />
        </ul>
      </article>
    </Link>
  );
};
export default CharacterCard;
