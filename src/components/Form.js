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
        className="flex flex-row m-4 items-center justify-between "
      >
        <input
          className="shadow border rounded h-9 w-full p-2 focus:ring focus:outline-none focus:ring-purple-500"
          value={tarea}
          onChange={handleChange}
          placeholder="Ingrese su tarea"
        />
        <button className="border ml-2 h-9 w-20 rounded shadow bg-purple-600 text-gray-100">
          Crear
        </button>
      </form>
  );
}
