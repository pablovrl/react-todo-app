import React from "react";
import Todo from "./Todo";
export default function TodoList(props) {
  const todosComponents = props.todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      tarea={todo.tarea}
      terminado={todo.terminado}
      handleDelClick={props.handleDelClick}
      handleCheck={props.handleCheck}
    />
  ));

  return <div className="p-1">{todosComponents}</div>;
}
