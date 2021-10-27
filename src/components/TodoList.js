import React, { useState } from "react";
import Todo from "./Todo";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

export default function TodoList(props) {
  const [showModal, setShowModal] = useState(false);
  const [editTarea, setEditTarea] = useState("");
  const [editId, setEditId] = useState();


  const handleEdit = (id) => {
    setShowModal(true);
    const todo = props.todos.filter(todo => todo.id === id);
    setEditTarea(todo[0].tarea);
    setEditId(todo[0].id);
  }
  
  const handleChange = evt => {
    setEditTarea(evt.target.value);
  }

  const editTask = () => {
    props.setTodos(props.todos.map( todo => {
      if(todo.id === editId) {
        return {...todo, tarea: editTarea}
      } else return {...todo}
    }))
  }

  const todosComponents = props.todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      tarea={todo.tarea}
      terminado={todo.terminado}
      handleDelClick={props.handleDelClick}
      handleCheck={props.handleCheck}
      lastTodo={props.lastTodo}
      handleEdit={handleEdit}
    />
  ));

  return (
    <div className="bg-gray-700 rounded-md">
      {todosComponents}
      <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)}>
          Edit task
        </ModalHeader>
        <ModalBody>
          <input className="w-full border p-2 rounded" value={editTarea} onChange={handleChange}/>
        </ModalBody>
        <ModalFooter>
          <Button
            color="red"
            buttonType="link"
            onClick={(e) => setShowModal(false)}
            ripple="dark"
          >
            Close
          </Button>

          <Button
            color="green"
            onClick={(e) => {setShowModal(false); editTask()}}
            ripple="light"
          >
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
