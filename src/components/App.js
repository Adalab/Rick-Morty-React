import "../stylesheets/App.scss";
import Header from "./Header";
import React, { useState, useEffect } from "react";
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
    console.log(data);
    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  //const characters = characters;
  //console.log(characters);

  //render filter by name
  const filteredcharacters = characters.filter((character) => {
    console.log(character.name);
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  console.log("State filterName", filterName);

  return (
    <div className="App">
      <Header />
      <Main characters={filteredcharacters} handleFilter={handleFilter} />
    </div>
  );
};

export default App;
