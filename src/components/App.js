import "../stylesheets/App.scss";
import Header from "./Header";
import CharacterDetail from "../components/CharacterDetail";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import ls from "../services/local-storage";
import getApiData from "../services/api";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState("");
  const [filterSpecie, setFilterSpecie] = useState(ls.get("filterSpecie", ""));

  useEffect(() => {
    //pido datos solo cuando no los tengo al arrancar
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);

  //guardo en ls cada vez que cambia characters
  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  useEffect(() => {
    ls.set("filterSpecie", filterSpecie);
  }, [filterSpecie]);

  //función manejadora
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "specie") {
      console.log(data.key);
      setFilterSpecie(data.value);
    }
  };

  //render filter by name and specie
  const filteredcharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return filterSpecie === "" ? true : character.specie === filterSpecie;
    });

  //Route le pasa props a esta función
  const renderCharacterDetail = (props) => {
    const routeCharacterId = props.match.params.id;
    //busco el personaje por su id
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(routeCharacterId);
    });

    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <h3>El personaje que buscas no existe. ¡Vuelve a intentarlo!</h3>;
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main
            characters={filteredcharacters}
            handleFilter={handleFilter}
            filterName={filterName}
            filterSpecie={filterSpecie}
          />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
