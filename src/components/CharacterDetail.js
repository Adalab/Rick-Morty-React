import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CardDetail.scss";

const CharacterDetail = (props) => {
  return (
    <div>
      <Link to="/">Volver al inicio</Link>

      <section className="card__detail">
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
          </ul>
        </div>
      </section>
    </div>
  );
};
export default CharacterDetail;
