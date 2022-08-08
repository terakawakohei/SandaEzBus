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
    Text,
} from '@chakra-ui/react'
import React, { useRef } from "react"

export const SizeModalExample = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')
  
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
    // mdぐらいの大きさがちょうどいいのかな？
    // lg以上はスマホでは大きさ変わらん、fullは全画面表示で微妙
    return (
      <>
        {sizes.map((size) => (
          <Button
            onClick={() => handleSizeClick(size)}
            key={size}
            m={4}
          >{`Open ${size} Modal`}</Button>
        ))}

        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal aaa</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text count={2} />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }