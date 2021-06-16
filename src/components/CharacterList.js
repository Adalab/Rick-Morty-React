import React from "react";
import "../stylesheets/CharacterList.scss";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  //si el personaje buscado no existe
  if (props.characters.length === 0) {
    return (
      <h2>
        Lo siento, el personaje que buscas no existe. ¡Vuelve a intentarlo!
      </h2>
    );
    //si existe, lo pintamos
  } else {
    const characterElements = props.characters.map((character) => {
      return <CharacterCard key={character.id} character={character} />;
    });

    return (
      <section>
        <ul className="cardList">{characterElements}</ul>
      </section>
    );
  }
};
export default CharacterList;
