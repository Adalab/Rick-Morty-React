import "../stylesheets/App.scss";
import Header from "./Header";
import CharacterDetail from "../components/CharacterDetail";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import getApiData from "../services/api";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    //a ejecutar en el montaje: pedir datos de los personajes
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []); //cuándo ejecutar el useEffect

  //función manejadora
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  //const characters = characters;
  //console.log(characters);

  //render filter by name
  const filteredcharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  //console.log("State filterName", filterName);

  //Route le pasa props a esta función
  const renderCharacterDetail = (props) => {
    const routeCharacterId = props.match.params.id;
    //busco el personaje por su id
    const foundCharacter = characters.find((character) => {
      return character.id === routeCharacterId;
    });
    console.log(foundCharacter, routeCharacterId);
    if (foundCharacter !== undefined) {
      return <CharacterDetail />;
    } else {
      return <p>Personaje no encontrado</p>;
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main characters={filteredcharacters} handleFilter={handleFilter} />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
