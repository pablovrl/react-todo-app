import React from "react";
import Modal from "react-modal";
import { useState } from "react/cjs/react.development";
import Button from "./UI/Button";

export default function ModalEditar(props) {

  const [input, setInput] = useState("");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    myOverlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  Modal.setAppElement('#root');


  const handleChange = evt => {
    setInput(evt.target.value);
  }

  const limpiarInput = () => {
    setInput("");
  }

  return (
    <div>
      <Modal
        isOpen={props.visible}
        style={customStyles}
        overlayClassName="myOverlay"
        contentLabel="Example Modal"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-2xl mb-2">Editar tarea</h1>
          <input className="border p-1 mb-2" onChange={handleChange} value={input} placeholder="Ingrese la nueva tarea"/>
          <div className="flex justify-end w-full">
            <Button
              onClick={() => {props.closeModal(); limpiarInput()}}
              className="bg-red-500 text-white p-2 rounded col-start-1 mr-3"
              text="Cancelar"
            />
            <Button
              onClick={() => {props.handleEdit(input); props.closeModal(); limpiarInput()}}
              className="bg-gray-500 text-white p-2 rounded col-start-10"
              text="Editar"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
