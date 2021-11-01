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
          className="bg-gray-300 shadow-md w-full h-14 p-4 my-9 rounded-md focus:outline-none"
          value={tarea}
          onChange={handleChange}
          placeholder="Escribe una nueva tarea"
        />
      </form>
  );
}
