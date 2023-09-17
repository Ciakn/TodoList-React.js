import React from "react";

import Select from "react-select";
const NavBar = ({ unCompletedTodos, onSelect, selectedOption }) => {
  const options = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "Completed",
      label: "All",
    },
    {
      value: "unCompleted",
      label: "All",
    },
  ];
  if (!unCompletedTodos) return <p>set your Todays todo</p>;
  return (
    <header>
      <span> uncompletedTodos {unCompletedTodos} </span>
    
      <select value={selectedOption} onChange={onSelect}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="unCompleted">unCompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
