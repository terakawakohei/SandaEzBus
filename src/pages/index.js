import SVGMap from '../components/svg/Map'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'

import { ChakraProvider } from '@chakra-ui/react'
import { useState } from "react";
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('md')
  const [spot, setSpot] = useState('')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const openModal = (spot) => {

    console.log(spot);
    setSize('full')
    setSpot(spot)
    onOpen()
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  return (
    <div>
      <SVGMap onClickSpot={openModal} />
      {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
          key={size}
          m={4}
        >{`Open ${size} Modal`}</Button>
      ))}
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {spot}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

