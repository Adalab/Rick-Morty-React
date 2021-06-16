import React from "react";
import FilterSpecie from "./FilterSpecie";
import FilterName from "./FilterName";
import "../stylesheets/Filters.scss";

const Filters = (props) => {
  const prevForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="filter__form" onSubmit={prevForm}>
      <FilterName handleFilter={props.handleFilter} />
      <FilterSpecie handleFilter={props.handleFilter} />
    </form>
  );
};

export default Filters;
