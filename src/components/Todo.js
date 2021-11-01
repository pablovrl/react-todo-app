import React from "react";
import Button from "./UI/Button";

export default function Todo(props) {

  let terminadoTarea = ""
  let terminadoBoton = "border-2 h-5 w-5 rounded-full "
  let terminadoIcon = ""
  if (props.terminado) {
    terminadoTarea = "line-through italic text-gray-300"
    terminadoBoton = ""
    terminadoIcon = "check"
  }

  return (
    <div className="bg-white mb-3 h-14 rounded shadow-md grid grid-cols-12 items-center font-semibold">
      <div className="flex justify-center">
        <Button className={terminadoBoton} icon={terminadoIcon} onClick={() => props.handleCheck(props.id)}/>
      </div>
      <div className="col-span-9">
        <p className={terminadoTarea}>{props.tarea}</p>
      </div>
      <div className="md:flex md:justify-end">
        <Button icon="pen" onClick={ () => props.openModal(props.id)}/>
      </div>
      <div className="md:flex md:justify-center">
        <Button icon="times" onClick={() => props.handleDelClick(props.id)}/>
      </div>
    </div>
  );
}
