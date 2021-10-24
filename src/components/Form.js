import React from "react";
import { useState } from "react/cjs/react.development";

export default function Form(props) {
  const [tarea, setTarea] = useState("");

  const handleChange = (evt) => {
    setTarea(evt.target.value);
  };

  return (
      <form
        onSubmit={e => {
          e.preventDefault();
          props.handleAddClick(tarea);
          setTarea("");
        }}
        className=""
      >
        <input
          className="bg-gray-700 text-gray-400 w-full h-14 p-4 my-9 rounded-md focus:outline-none"
          value={tarea}
          onChange={handleChange}
          placeholder="Create a new todo..."
        />
        <button className="hidden">
          <i className="fas fa-plus"></i>
        </button>
      </form>
  );
}
