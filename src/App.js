import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import ReactModal from "react-modal";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      tarea: "Hacer la cama",
      terminado: true,
    },
    {
      id: 2,
      tarea: "Lavar los platos",
      terminado: false,
    },
    {
      id: 3,
      tarea: "Ignacio González",
      terminado: false,
    },
  ]);

  const handleAddClick = (tarea) => {
    let id = 1;
    if (todos.length !== 0) {
      id = todos[todos.length - 1].id + 1;
    }

    const newTodo = {
      id: id,
      tarea: tarea,
      terminado: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleDelClick = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        return {...todo, terminado: !todo.terminado}
      } else { return {...todo}}
    }));
  };

  return (
    <div className="bg-gray-50 h-screen flex flex-col">
      <div className="h-18">
        <h1 className="text-4xl p-4 font-semibold text-black">Tus tareas</h1>
      </div>
      <div className=" flex-1 overflow-y-scroll">
        <TodoList
          todos={todos}
          handleDelClick={handleDelClick}
          handleCheck={handleCheck}
        />
      </div>
      <div className=" flex justify-center">
        <Form handleAddClick={handleAddClick} />
      </div>
    </div>
  );
}

export default App;
