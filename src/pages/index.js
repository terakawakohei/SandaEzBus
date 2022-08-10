import SVGMap from '../components/svg/Map'
import Link from 'next/link';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
  Box,
  Text,
  useDisclosure
} from '@chakra-ui/react'

// import { ChakraProvider } from '@chakra-ui/react'
import { useState } from "react"
import makeUrl from '../components/util/makeurl'
import makeUrlCrrTime from '../components/util/makeurl_now'
import spot_info from '../data/spot_coord.json'

export default function Home(data) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('md')
  const [spot, setSpot] = useState('century-praza')
  const [coords, setCoords] = useState()


  var getPosition = function (options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  const openModal = (spot) => {
    // console.log(spot)
    setSize('md')
    setSpot(spot)
    onOpen()
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  // console.log(data)
  return (
    <div>

      <SVGMap onClickSpot={openModal} />
      <Center>
          <Link href="/busstop">
        <Button w='80vw' h='20vh' margin="5px" boxShadow="lg" color="#7928CA" borderRadius="20px">
            <Text bg='#7928CA'
                  bgClip='text'
                  fontSize='20px'
                  fontWeight='extrabold'>乗り換え場所を確認する</Text>
        </Button>
          </Link>
      </Center>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{spot_info.spot[spot].spot_name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {data.events[spot].map((item) => {
              return (
                <div key={item.title}>
                  <br />
                  <p>{item.date}</p>
                  <p>イベント内容：{item.description}</p>
                  <Button onClick={() => {
                    getPosition().then((position) => {
                      const flat = position.coords.latitude
                      const flon = position.coords.longitude
                      const tlat = spot_info.spot[spot].latitude
                      const tlon = spot_info.spot[spot].longitude
                      const url = makeUrl(flat + "," + flon, tlat + "," + tlon, item.date)
                      if (window.open(url, "_blank")) { } else {
                        window.location.href = url
                      }
                    }
                    )
                  }}>ここに行く</Button>
                  <br /><br />
                </div>
              )
            })}
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => {
              getPosition().then((position) => {
                const flat = position.coords.latitude
                const flon = position.coords.longitude
                const tlat = spot_info.spot[spot].latitude
                const tlon = spot_info.spot[spot].longitude
                const url = makeUrlCrrTime(flat + "," + flon, tlat + "," + tlon)
                if (window.open(url, "_blank")) { } else {
                  window.location.href = url
                }
              }
              )
            }}>今から行く</Button>
            <Button onClick={onClose}> Close </Button>
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

  const events = {
    "century-praza": [
      { "eid": "1", "title": "ev1", "date": "2022-08-12 11:45", "spot": "century-praza", "description": "test_ev1" },
      { "eid": "2", "title": "ev2", "date": "2022-08-12 12:12", "spot": "century-praza", "description": "test_ev2" },
      { "eid": "3", "title": "ev3", "date": "2022-08-12 13:14", "spot": "century-praza", "description": "test_ev3" }
    ],
    "community-hall": [
      { "eid": "4", "title": "ev4", "date": "2022-08-12 11:45", "spot": "community-hall", "description": "test_ev4" },
      { "eid": "5", "title": "ev5", "date": "2022-08-12 13:45", "spot": "community-hall", "description": "test_ev5" },
      { "eid": "6", "title": "ev6", "date": "2022-08-12 13:59", "spot": "community-hall", "description": "test_ev6" }
    ],
    "akasia-4": [
      { "eid": "7", "title": "ev7", "date": "2022-08-12 11:45", "spot": "akasia-4", "description": "test_ev7" },
      { "eid": "8", "title": "ev8", "date": "2022-08-13 13:50", "spot": "akasia-4", "description": "test_ev8" },
      { "eid": "9", "title": "ev9", "date": "2022-08-16 12:45", "spot": "akasia-4", "description": "test_ev9" }
    ],
    "erumu-praza": [
      { "eid": "10", "title": "ev10", "date": "2022-08-12 11:45", "spot": "erumu-praza", "description": "test_ev10" },
      { "eid": "11", "title": "ev11", "date": "2022-08-12 12:35", "spot": "erumu-praza", "description": "test_ev11" },
      { "eid": "12", "title": "ev12", "date": "2022-08-12 12:56", "spot": "erumu-praza", "description": "test_ev12" }
    ],
    "sanda-municipal-hospital": []
  }


  // console.log("fdsafdsafdsa")
  // console.log(events)
  return { props: { events } }
}

