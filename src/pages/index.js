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
  const [spot, setSpot] = useState('century-praza')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const openModal = (spot) => {
    console.log(spot)
    setSize('md')
    setSpot(spot)
    onOpen()
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  console.log(data)
  return (
    <div>

      <SVGMap onClickSpot={openModal} />

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {spot}
            {data.events[spot].map((item) => {
              return (
                <div key={item.name}>
                  <br/>
                  <p>{item.date} : {item.description}</p>
                  <br/>
                </div>
              )
            })}
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
  // いったん消しとく
  // const res = await fetch('http://localhost:5000/event') // api call
  // const events = await res.json()

  const events ={
    "century-praza":[
        {"name":"ev1", "date":"2022-07-02", "description":"test_ev1"},
        {"name":"ev2", "date":"2022-07-03", "description":"test_ev2"},
        {"name":"ev3", "date":"2022-07-07", "description":"test_ev3"}
    ],
    "community-hole":[
        {"name":"ev4", "date":"2022-07-02", "description":"test_ev4"},
        {"name":"ev5", "date":"2022-07-04", "description":"test_ev5"},
        {"name":"ev6", "date":"2022-07-08", "description":"test_ev6"}
    ],
    "akasia-4":[
        {"name":"ev7", "date":"2022-07-02", "description":"test_ev7"},
        {"name":"ev8", "date":"2022-07-04", "description":"test_ev8"},
        {"name":"ev9", "date":"2022-07-08", "description":"test_ev9"}
    ],
    "erumu-praza":[
        {"name":"ev10", "date":"2022-07-02", "description":"test_ev10"},
        {"name":"ev11", "date":"2022-07-03", "description":"test_ev11"},
        {"name":"ev12", "date":"2022-07-07", "description":"test_ev12"}
    ]}


  // console.log("fdsafdsafdsa")
  console.log(events)
  return { props: { events } }
}

