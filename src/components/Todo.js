import React from "react";

export default function Todo(props) {
  return (
    <div className="flex m-5 bg-white p-3 rounded shadow-lg items-center border-l-4 border-purple-500">
      <div className="mr-2 items-center flex">
        <input className="w-4 h-4" type="checkbox" defaultChecked={props.terminado} onClick={() => props.handleCheck(props.id)}/>
      </div>
      <div className="grid grid-cols-12 w-full items-center">
        <p className={`col-start-1 col-end-8 overflow-ellipsis overflow-hidden ${props.terminado ? "line-through text-gray-400 italic": "text-black"}`}>{props.tarea}</p>
        <button
          className="col-start-11 bg-red-500 rounded text-xs border h-6 w-10 text-white"
          onClick={() => props.handleDelClick(props.id)}
        >
          DEL
        </button>
      </div>
    </div>
  );
}
