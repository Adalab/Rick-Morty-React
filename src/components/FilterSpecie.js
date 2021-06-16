import React from "react";

const FilterSpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "specie",
    });
  };

  return (
    <>
      <label className="filter__label" htmlFor="specie">
        Especie:
      </label>
      <select
        className="filter__input"
        name="specie"
        id="specie"
        value={props.filterSpecie}
        onChange={handleChange}
      >
        <option value="">Todos</option>
        <option value="Alien">Alien</option>
        <option value="Human">Human</option>
      </select>
    </>
  );
};
export default FilterSpecie;
