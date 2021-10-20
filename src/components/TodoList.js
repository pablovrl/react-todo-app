import React from "react";
import Todo from "./Todo";
export default function TodoList(props) {
  const todosComponents = props.todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      tarea={todo.tarea}
      handleDelClick={props.handleDelClick}
    />
  ));

  return <div>{todosComponents}</div>;
}
