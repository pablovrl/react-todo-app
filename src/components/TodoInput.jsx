import React, { useState } from 'react'
import { Input, Button, HStack } from '@chakra-ui/react'

export default function TodoInput({ handleAddClick }) {

  const [input, setInput] = useState("")

  const handleChange = (evt) => {
    setInput(evt.target.value)
  }

  const clearInput = () => {
    setInput("")
  }

  return (
    <form onSubmit={(evt) => { handleAddClick(input, evt); clearInput();}} style={{width: "100%"}}>
      <HStack>
          <Input value={input} placeholder="Haz algo..." onChange={handleChange} />
          <Button type="submit">Añadir</Button>
      </HStack>
    </form>
  )
}
