import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,
    Text,
    Center,
} from '@chakra-ui/react'
import React, { useRef } from "react"

export const TransitionModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
      <Center w = "100vw" >
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          size="md"
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text count={2} />
              bbbbbbbbbbbbbbbbbba<br />
              s<br />
              a<br />
              a<br />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                ここに行く
              </Button>
              <Button variant='outline' onClick={onClose}>閉じる</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Center>
      </>
    )
  }