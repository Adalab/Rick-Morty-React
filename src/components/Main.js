import React from "react";

import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

function Main(props) {
  return (
    <main>
      <Filters
        handleFilter={props.handleFilter}
        characters={props.filteredcharacters}
        filterName={props.filterName}
      />
      <CharacterList characters={props.characters} />
    </main>
  );
}

export default Main;
