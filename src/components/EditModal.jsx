import React, {useState} from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input
} from '@chakra-ui/react'

export default function EditModal({isOpen, onClose, id, handleEditClick}) {

  const [input, setInput] = useState("")

  const handleChange = (evt) => {
    setInput(evt.target.value)
  }

  const clearInput = () => {
    setInput("")
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => {onClose(); clearInput()}} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar tarea</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={input} onChange={handleChange} placeholder="Nueva tarea"/>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => {handleEditClick(id, input); onClose()}}>Editar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
