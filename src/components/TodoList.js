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
      lastTodo={props.lastTodo}
    />
  ));

  return <div className="bg-gray-700 rounded-md">{todosComponents}</div>;
}
