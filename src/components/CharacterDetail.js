import React from "react";
import live from "../images/live.png";
import dead from "../images/death.png";
import human from "../images/human.png";
import alien from "../images/alien.png";
import unknown from "../images/unknown.png";
import house from "../images/house.png";
import { Link } from "react-router-dom";
import "../stylesheets/CardDetail.scss";

const CharacterDetail = (props) => {
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
    <div>
      <section className="card__detail">
        <Link to="/">
          <img className="card__icon" src={house} alt="Volver al inicio" />
        </Link>
        <img
          className="card__detail-img"
          src={props.character.image}
          alt={props.character.name}
        />
        <div className="card__detail-box">
          <h2 className="card__detail-title">{props.character.name}</h2>
          <ul>
            <li className="card__detail-dates">
              Status: {props.character.status}
            </li>
            <li className="card__detail-dates">
              Specie: {props.character.specie}
            </li>
            <li className="card__detail-dates">
              Origin: {props.character.origin}
            </li>
            <li className="card__detail-dates">
              Episodes: {props.character.episodes}
            </li>
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
        </div>
      </section>
    </div>
  );
};
export default CharacterDetail;
