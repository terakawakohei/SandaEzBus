import SvgMapOutlined20221028 from '../components/svg/MapOutlined20221028'
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
  Divider,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Select,
  TableContainer,
} from '@chakra-ui/react'

// import { ChakraProvider } from '@chakra-ui/react'
import { useState } from "react"
import makeUrl from '../components/util/makeurl'
import makeUrlCrrTime from '../components/util/makeurl_now'
import spot_info from '../data/spot_coord.json' //spot_name, longtitude, latitude

export default function Home(data) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [spot, setSpot] = useState('century-praza')

  var getPosition = function (options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  const openModal = (spot) => {
    setSpot(spot)
    console.log(spot_info.spot[spot])
    onOpen()
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  return (
    <div>
      <SvgMapOutlined20221028 onClickSpot={openModal} />
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

      <Modal onClose={onClose} size={'sm'} isOpen={isOpen} margin={5} motionPreset='slideInBottom'>

        <ModalOverlay />
        <ModalContent>
          <ModalHeader marginTop='20px' marginBottom='15px'>
            <Text fontSize='25px' textAlign={['center']}>
              {spot_info.spot[spot].spot_name}
            </Text>
            <Text fontSize='20px' textAlign={['center']}>
              行先バス停: {spot_info.spot[spot].bus_stop_name}
            </Text>
            {/* <Select placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
          </Select> */}
          </ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            {(spot in data.events ?
            data.events[spot].map((item) => {
              return (
                <div key={item.title}>
                  <TableContainer>
                    <Table size='md' variant='unstyled'>
                      <Thead>
                        <Tr>
                          <Th>イベント名　：{item.title}</Th>
                        </Tr>
                      </Thead>
                      <Thead>
                        <Tr>
                          <Th>イベント詳細：{item.description}</Th>
                        </Tr>
                      </Thead>
                      <Thead>
                        <Tr>
                          <Th>イベント日時：{item.date}</Th>
                        </Tr>
                      </Thead>
                    </Table>
                  </TableContainer>
                  <br></br>
                  <Center>
                    <Button size='md' shadow='base' bgColor="white" color='purple.500' onClick={() => {
                      getPosition().then((position) => {
                        const flat = position.coords.latitude
                        const flon = position.coords.longitude
                        const tlat = spot_info.spot[spot].latitude
                        const tlon = spot_info.spot[spot].longitude
                        const url = makeUrl(flat + "," + flon, tlat + "," + tlon, item.date)
                        if (window.open(url, "_blank")) { } else {
                          window.location.href = url
                        }
                      })
                    }}>ここに行く</Button>
                  </Center>
                  <br></br>
                  <Divider />
                </div>
              )
            }) : () =>
                {
                  return(<></>)
                }
              )}
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button bgColor="#7928CA" color="white" onClick={() => {
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
              {/* <Button onClick={onClose}> Close </Button> */}
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </div>
  )
}

export async function getServerSideProps() {
  //apiからイベント情報のフェッチ
  const res = await fetch('https://es4.eedept.kobe-u.ac.jp/ezbus/api/get/') // api call
  const events = await res.json()
  console.log(events)
  return { props: { events } }
}

