import React from "react";

import Filters from "./Filters";
import CharacterList from "./CharacterList";

function Main(props) {
  return (
    <main>
      <Filters
        handleFilter={props.handleFilter}
        characters={props.filteredcharacters}
        filterName={props.filterName}
        //filterSpecie={filterSpecie}
      />
      <CharacterList characters={props.characters} />
    </main>
  );
}

export default Main;
