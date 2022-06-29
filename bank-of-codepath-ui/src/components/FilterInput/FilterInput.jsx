import * as React from "react";
import "./FilterInput.css";

export default function FilterInput({ inputValue, handleOnChange }) {
  return (
    <div className="filter-input">
      <i className="material-icons">search</i>
      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Search transactions"
      />
    </div>
  );
}
