import React from "react";
import "../stylesheets/Filters.scss";

const Filters = (props) => {
  const handleChange = (ev) => {
    //manejador de evento que lanza esta fc por lifting
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <form className="filter__form" action="#">
      <label className="filter__label" htmlFor="">
        Busca tu personaje preferido:
      </label>
      <input
        className="filter__input"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </form>
  );
};

export default Filters;
