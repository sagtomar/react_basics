import React, { useReducer } from "react";
export function Checkbox() {
  const [selected, toggle] = useReducer((selected) => !selected, false);
  return (
    <>
      <label htmlFor="checkbox">{selected ? "selected" : "not selected"}</label>
      <input
        id="checkbox"
        type="checkbox"
        value={selected}
        onChange={toggle}
      ></input>
    </>
  );
}
