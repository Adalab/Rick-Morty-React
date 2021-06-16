import React from "react";
import Input from "./Input";
import "../stylesheets/Filters.scss";

const Filters = (props) => {
  const prevForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="filter__form" onSubmit={prevForm}>
      <label className="filter__label" htmlFor="">
        Busca tu personaje preferido:
      </label>
      <Input filterName={props.filterName} handleFilter={props.handleFilter} />
    </form>
  );
};

export default Filters;
