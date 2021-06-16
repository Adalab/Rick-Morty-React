import React from "react";
import "../stylesheets/Filters.scss";

const Input = (props) => {
  const handleChange = (ev) => {
    //manejador de evento que lanza esta fc por lifting
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <input
      className="filter__input"
      type="text"
      name="name"
      id="name"
      value={props.filterName}
      onChange={handleChange}
    />
  );
};

export default Input;
