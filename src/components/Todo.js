import React, { useState } from "react";
import Modal from "react-modal";
import "./Modal.css";

export default function Todo(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [tarea, setTarea] = useState(props.tarea);

  let buttonClass = "border-2";
  if (props.terminado) {
    buttonClass = "bg-gradient-to-r from-purple-300 to-purple-600";
  }

  const handleChange = (evt) => {
    setTarea(evt.target.value);
  };

  Modal.setAppElement("#root");

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
          <button className="text-gray-300" onClick={() => setIsOpen(!isOpen)}>
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
      <Modal
        isOpen={isOpen}
        contentLabel="Example Modal"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={200}
      >
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-gray-200 text-2xl mb-6">Edit task</h2>
          <form
            className=""
            onSubmit={(evt) => {
              props.handleEdit(evt, props.id, tarea);
              setIsOpen(false);
            }}
          >
            <input
              className="bg-gray-700 w-80 text-gray-400 sm:w-96 h-14 p-4 rounded-md mb-6 focus:outline-none"
              value={tarea}
              onChange={handleChange}
            />
          </form>
          <button
            className="h-10 font-semibold w-32 rounded p-1 bg-red-400 text-gray-100 hover:bg-red-600 "
            onClick={() => {
              setIsOpen(!isOpen);
              setTarea(props.tarea);
            }}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
