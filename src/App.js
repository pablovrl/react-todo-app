import React, { useState } from 'react'
import { Heading, VStack, IconButton, useColorMode, Flex } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Filters from './components/Filters';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Ver TV",
      completed: true
    },
    {
      id: 2,
      task: "Aprender sobre Chakra UI",
      completed: true
    },
    {
      id: 3,
      task: "Vivamus feugiat non augue eget molestie. Aliquam dapibus lorem vel sem lacinia tincidunt. Integer egestas tellus quis massa suscipit, eu ullamcorper nisi feugiat.",
      completed: false
    }
  ])

  const { colorMode, toggleColorMode } = useColorMode()

  const handleAddClick = (task) => {
    let id = 1;
    if (todos.length !== 0) {
      const todosIds = todos.map(todo => todo.id)
      id = Math.max(...todosIds) + 1
    }

    const newTodo = {
      id: id,
      task: task,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const handleDelClick = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEditClick = (id, task) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        return {...todo, task: task}
      } else return {...todo}
    }))
  }

  const handleCheckChange = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      } else return {...todo}
    }))
  }

  return (
    <Flex w="100vw" justifyContent="center">
      <VStack p={4} w="45rem" spacing="25px">
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          alignSelf="end"
        />
        <Heading>
          Simple Todo App
        </Heading>
        <TodoInput handleAddClick={handleAddClick}/>
        <Filters todos={todos} />
        <TodoList todos={todos} handleCheckChange={handleCheckChange} handleDelClick={handleDelClick} handleEditClick={handleEditClick}/>
      </VStack>
    </Flex>
  );
}

export default App;
