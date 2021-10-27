import React from "react";
import "./Modal.css";

export default function Todo(props) {
  let buttonClass = "border-2";
  if (props.terminado) {
    buttonClass = "bg-gradient-to-r from-purple-300 to-purple-600";
  }

  return (
    <div
      className={`flex px-6 py-4 items-center overflow-hidden ${
        props.lastTodo === props.id ? "" : "border-b-2 border-gray-600"
      } `}
    >
      <div className="flex justify-center">
        <button
          className={
            buttonClass +
            " border-gray-500 rounded-full h-6 w-6 flex justify-center items-center"
          }
          onClick={() => props.handleCheck(props.id)}
        >
          {props.terminado && <i className="fas fa-check fa-sm"></i>}
        </button>
      </div>
      <div className="grid grid-cols-12 w-full items-center justify-center">
        <div className="col-span-10">
          <p
            className={`ml-3 ${
              props.terminado
                ? "line-through text-gray-500 italic"
                : "text-gray-300"
            }`}
          >
            {props.tarea}
          </p>
        </div>
        <div className="col-start-11 col-span-1 grid justify-end">
          <button
            className="text-gray-300"
            onClick={() => props.handleEdit(props.id)}
          >
            <i className="fas fa-pen"></i>
          </button>
        </div>
        <div className="col-start-12 col-span-1 grid justify-end">
          <button
            className="text-gray-300"
            onClick={() => props.handleDelClick(props.id)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
