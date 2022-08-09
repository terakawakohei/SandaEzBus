import SVGMapV2 from '../components/svg/map_v2/MapV2'
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

// import { ChakraProvider } from '@chakra-ui/react'
import { useState } from "react"
import makeUrlCrrTime from '../components/util/yahoo_url_ana'
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

      <SVGMapV2 onClickSpot={openModal} />

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
                  <p>{item.date} : {item.description}</p>
                  <Button onClick={()=>{
                    getPosition().then((position)=>{
                      // setCoords(position.coords)}
                        // console.log(position.coords)
                        const lat = position.coords.latitude
                        const lon = position.coords.longitude
                        // console.log(lat,lon)
                        const url = makeUrlCrrTime(lat + "," + lon, "34.8980847,135.1846334")
                      window.open(url)
                      }
                    )
                  }}>ここに行く</Button>
                  <br />
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

  const events = {
    "century-praza": [
      { "title": "ev1",  "date": "yyyy-MM-dd hh:mm", "spot":"century-praza", "description": "test_ev1" },
      { "title": "ev2",  "date": "2022-07-03 12:12", "spot":"century-praza", "description": "test_ev2" },
      { "title": "ev3",  "date": "2022-07-07 13:14", "spot":"century-praza", "description": "test_ev3" }
    ],
    "community-hall":[
      { "title": "ev4",  "date": "yyyy-MM-dd hh:mm", "spot":"community-hall","description": "test_ev4" },
      { "title": "ev5",  "date": "2022-07-04 13:45", "spot":"community-hall","description": "test_ev5" },
      { "title": "ev6",  "date": "2022-07-08 13:44", "spot":"community-hall","description": "test_ev6" }
    ],
    "akasia-4": [
      { "title": "ev7",  "date": "yyyy-MM-dd hh:mm", "spot":"akasia-4",      "description": "test_ev7" },
      { "title": "ev8",  "date": "2022-07-04 11:45", "spot":"akasia-4",      "description": "test_ev8" },
      { "title": "ev9",  "date": "2022-07-08 12:45", "spot":"akasia-4",      "description": "test_ev9" }
    ],
    "erumu-praza": [
      { "title": "ev10", "date": "yyyy-MM-dd hh:mm", "spot":"erumu-praza",   "description": "test_ev10" },
      { "title": "ev11", "date": "2022-07-03 12:35", "spot":"erumu-praza",   "description": "test_ev11" },
      { "title": "ev12", "date": "2022-07-07 12:56", "spot":"erumu-praza",   "description": "test_ev12" }
    ]
  }


  // console.log("fdsafdsafdsa")
  // console.log(events)
  return { props: { events } }
}

