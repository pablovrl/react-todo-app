import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Heading, VStack, IconButton, useColorMode, Flex } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Filters from './components/Filters';

function App() {

  useEffect(() => {
    getAllNotes()
  }, [])

  const [todos, setTodos] = useState([])

  const { colorMode, toggleColorMode } = useColorMode()

  const completed = todos.filter(todo => todo.important === true)
  const notCompleted = todos.filter(todo => todo.important === false)

  const getAllNotes = () => {
    axios.get('https://pure-sea-64763.herokuapp.com/api/notes')
    .then((response) =>{
      setTodos(response.data)
    })
  }

  const handleAddClick = (task, evt) => {

    evt.preventDefault()

    const newNote = {
      content: task,
      important: false
    }

    axios.post('https://pure-sea-64763.herokuapp.com/api/notes/', newNote)
    .then(() => {
      getAllNotes()
    })
  }

  const handleDelClick = (id) => {
    axios.delete('https://pure-sea-64763.herokuapp.com/api/notes/' + id)
    .then(() => {
      getAllNotes()
    })
  }

  const handleEditClick = (id, task) => {
    const newNote = {
      content: task
    } 
    axios.put('https://pure-sea-64763.herokuapp.com/api/notes/' + id, newNote)
    .then(() => {
      getAllNotes()
    })
  }

  const handleCheckChange = (id) => {

    let currentImportant = false

    todos.forEach(todo => {
      if(todo._id === id) {
        currentImportant = todo.important
      }
    })

    const newNote = {
      important: !currentImportant
    }


    axios.put('https://pure-sea-64763.herokuapp.com/api/notes/' + id, newNote)
    .then(() => {
      getAllNotes()
    })
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
        <Filters todos={todos} completed={completed.length} notCompleted={notCompleted.length} />
        <TodoList todos={todos} handleCheckChange={handleCheckChange} handleDelClick={handleDelClick} handleEditClick={handleEditClick}/>
      </VStack>
    </Flex>
  );
}

export default App;
