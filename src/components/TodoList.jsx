import React from 'react'
import { FaTrash, FaPen } from 'react-icons/fa'
import {
	VStack,
	HStack,
	IconButton,
	Spacer,
	Text,
	Heading,

} from '@chakra-ui/react'

export default function TodoList({ todos, handleDelClick }) {

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
						key={todo.id}
						borderWidth="2px"
						borderRadius="5px"
						p={3}
					>
						<Text>{todo.task}</Text>
						<Spacer />
						<IconButton icon={<FaPen />} />
						<IconButton icon={<FaTrash />} onClick={() => handleDelClick(todo.id)} />
					</HStack>
				))}
			</VStack>
		</>
	)
}
