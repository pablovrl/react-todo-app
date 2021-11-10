import React from 'react'
import { Wrap, WrapItem, Badge } from '@chakra-ui/react'


export default function Filters({ todos, completed, notCompleted }) {

  return (
    <Wrap justify="center" align="center">
      <WrapItem>
        <Badge w="10rem" p={2} align="center" colorScheme="green">Completados ({completed})</Badge>
      </WrapItem>
      <WrapItem>
        <Badge w="10rem" p={2} align="center">Sin completar ({notCompleted})</Badge>
      </WrapItem>
      <WrapItem>
        <Badge w="10rem" p={2} align="center" colorScheme="purple">Total ({todos.length})</Badge>
      </WrapItem>
    </Wrap >
  )
}
