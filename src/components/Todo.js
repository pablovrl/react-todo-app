import React from "react";

export default function Todo(props) {
  let buttonClass = "border-2";
  if (props.terminado) {
    buttonClass = "bg-gradient-to-r from-purple-300 to-purple-600";
  }

  return (
    <div
      className={`flex h-14 px-6 items-center ${
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
          {props.terminado &&
            <i className="fas fa-check fa-sm"></i>
          }
        </button>
      </div>
      <div className="flex justify-between w-full">
        <p
          className={`ml-3 ${
            props.terminado
              ? "line-through text-gray-500 italic"
              : "text-gray-300"
          }`}
        >
          {props.tarea}
        </p>
        <button
          className="text-gray-300"
          onClick={() => props.handleDelClick(props.id)}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}
