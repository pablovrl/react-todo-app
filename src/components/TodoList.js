import React, { useState } from "react";
import Todo from "./Todo";
import ModalEditar from "./ModalEditar";

export default function TodoList(props) {
  const [visible, setVisible] = useState(false);
  const [editId, setEditId] = useState();

  const closeModal = () => {
    setVisible(false);
    setEditId();
  };

  const openModal = (id) => {
    setVisible(true);
    setEditId(id);
  };

  const handleEdit = (task) => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id === editId) {
          return { ...todo, tarea: task };
        }
        return { ...todo };
      })
    );
  };

  const todosComponents = props.todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      tarea={todo.tarea}
      terminado={todo.terminado}
      handleDelClick={props.handleDelClick}
      handleCheck={props.handleCheck}
      lastTodo={props.lastTodo}
      openModal={openModal}
    />
  ));

  return (
    <>
      {todosComponents}
      <ModalEditar
        visible={visible}
        closeModal={closeModal}
        handleEdit={handleEdit}
      />
    </>
  );
}
