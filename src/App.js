import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import dateFormat, { i18n } from "dateformat";

function App() {
  const now = new Date();
  const fecha = dateFormat(now, "dddd, dd mmmm, yyyy");

  i18n.dayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  i18n.monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const [lastTodo, setlastTodo] = useState();
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
      tarea: "Pasear a los perros",
      terminado: false,
    },
  ]);

  useEffect(() => {
    if (todos.length !== 0) {
      setlastTodo(todos[todos.length - 1].id);
    }
  }, [todos]);

  const handleAddClick = (tarea) => {
    if (tarea !== "") {
      let id = 1;
      if (todos.length !== 0) {
        id = todos[todos.length - 1].id + 1;
      }
      const newTodo = {
        id: id,
        tarea: tarea,
        terminado: false,
      };

      setlastTodo(newTodo.id);

      setTodos([...todos, newTodo]);
    } else {
      alert("Ingrese una tarea por favor.");
    }
  };

  const handleDelClick = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            terminado: !todo.terminado,
          };
        }
        return { ...todo };
      })
    );
  };

  return (
    <div className="bg-gray-200 h-screen sm:flex sm:justify-center font-sans">
      <div className="p-6 relative w-full sm:max-w-2xl flex flex-col">
        <div className="h-auto mt-8">
          <h1 className="text-4xl font-bold">Buenas tardes, Pablo</h1>
          <h2 className="text-xl mt-2">Hoy es {fecha}</h2>
        </div>
        <div className="">
          <Form handleAddClick={handleAddClick} />
        </div>
        <div className="flex-1 overflow-y-auto section">
          <TodoList
            todos={todos}
            setTodos={setTodos}
            handleDelClick={handleDelClick}
            handleCheck={handleCheck}
            lastTodo={lastTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
