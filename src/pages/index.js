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
import { useState } from "react"

export default function Home(data) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('md')
  const [spot, setSpot] = useState('')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const openModal = (spot) => {
    console.log(spot)
    setSize('full')
    setSpot(spot)
    onOpen()
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  console.log(data)
  return (
    <div>

      {/* {data.posts.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <button onClick={onOpen}>Open Modal</button>
          </div>
        )
      })
      } */}

      <SVGMap aaaaaaaaaaaaaaa={openModal} />
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

export async function getServerSideProps() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users') // api call
  const res = await fetch('http://localhost:5000/event') // api call
  const spot = await res.json()
  console.log("fdsafdsafdsa")
  return { props: { spot } }
}

