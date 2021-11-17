import React, { useState } from 'react'
import { FaTrash, FaPen } from 'react-icons/fa'
import EditModal from './EditModal'
import {
	VStack,
	HStack,
	IconButton,
	Spacer,
	Text,
	Heading,
	useDisclosure,
	Checkbox
} from '@chakra-ui/react'

export default function TodoList({ todos, handleDelClick, handleEditClick, handleCheckChange }) {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [editId, setEditId] = useState()

	if (todos.length === 0) {
		return (
			<Heading size="md">No tienes tareas pendientes</Heading>
		)
	}

	return (
		<>
			<VStack
				w="100%"
				alignItems='stretch'
			>
				{todos.map(todo => (
					<HStack
						key={todo._id}
						borderWidth="2px"
						borderRadius="5px"
						p={3}
					>
						<Checkbox isChecked={todo.important} onChange={() => handleCheckChange(todo._id)}/>
						<Text as={todo.important ? "del" : ""}>{todo.content}</Text>
						<Spacer />
						<IconButton icon={<FaPen />} onClick={() => { setEditId(todo._id); onOpen() }} />
						<IconButton icon={<FaTrash />} onClick={() => handleDelClick(todo._id)} />
					</HStack>
				))}
			</VStack>
			<EditModal isOpen={isOpen} onClose={onClose} id={editId} handleEditClick={handleEditClick} />
		</>
	)
}
