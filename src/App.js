import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {

  const [todos, setTodos] = useState([
    {
      id: 2,
      tarea: "Hacer la cama"
    }, 
    {
      id: 1,
      tarea: "Lavar los platos"
    }
  ])

  const handleAddClick = (tarea) => {
    let id = 1;
    if(todos.length !== 0) {
      id = todos[0].id + 1;
    }

    const newTodo = {
      id: id,
      tarea: tarea
    }

    setTodos([newTodo, ...todos])
  }

  const handleDelClick = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <Form handleAddClick={handleAddClick}/>
      <TodoList todos={todos} handleDelClick={handleDelClick}/>
    </div>
  )
}

export default App;
