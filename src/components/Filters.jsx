import React, {useState} from 'react'
import { Button, Wrap, WrapItem } from '@chakra-ui/react'


export default function Filters({todos, handleNotCompletedClick, handleAllClick, handleCompletedClick}) {

  return (
    <Wrap justify="center" align="center">
      <WrapItem>
        <Button w="10rem" p={2} onClick={handleAllClick}>Todos ({todos.length})</Button>
      </WrapItem>
      <WrapItem>
        <Button w="10rem" p={2} onClick={handleNotCompletedClick}>Sin completar ()</Button>
      </WrapItem>
      <WrapItem>
        <Button w="10rem" p={2} onClick={handleCompletedClick}>Completados ()</Button>
      </WrapItem>
    </Wrap >
  )
}
