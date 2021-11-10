import React, { useState } from 'react'
import { FormControl, Input, Button, HStack } from '@chakra-ui/react'

export default function TodoInput({ handleAddClick }) {

  const [input, setInput] = useState("")

  const handleChange = (evt) => {
    setInput(evt.target.value)
  }

  const clearInput = () => {
    setInput("")
  }

  return (
    <FormControl>
      <HStack>
        <Input value={input} placeholder="Haz algo..." onChange={handleChange} />
        <Button onClick={() => { handleAddClick(input); clearInput(); }}>Añadir</Button>
      </HStack>
    </FormControl>
  )
}
