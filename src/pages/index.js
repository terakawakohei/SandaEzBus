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
  Divider,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

// import { ChakraProvider } from '@chakra-ui/react'
import { useState } from "react"
import makeUrl from '../components/util/makeurl'
import makeUrlCrrTime from '../components/util/makeurl_now'
import spot_info from '../data/spot_coord.json'

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

      <Modal onClose={onClose} size={"sm"} isOpen={isOpen} margin={5}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{spot_info.spot[spot].spot_name}</ModalHeader>
          <Divider/>
          <ModalCloseButton />
          <ModalBody>
            {data.events[spot].map((item) => {
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
                <Button size='md' colorScheme='messenger' onClick={() => {
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
                <Divider/>
                </div>
                // <Box key={item.title} textAlign="center">
                //   <br />
                //   <Text fontWeight='bold'>
                //   <p>イベント名：{item.title}</p>
                //   <p>イベント詳細：{item.description}</p>
                //   <p>{item.date}</p>
                //   </Text>
                //   <Button colorScheme='messenger' onClick={() => {
                //     getPosition().then((position) => {
                //       const flat = position.coords.latitude
                //       const flon = position.coords.longitude
                //       const tlat = spot_info.spot[spot].latitude
                //       const tlon = spot_info.spot[spot].longitude
                //       const url = makeUrl(flat + "," + flon, tlat + "," + tlon, item.date)
                //       if (window.open(url, "_blank")) { } else {
                //         window.location.href = url
                //       }
                //     }
                //     )
                //   }}>ここに行く</Button>
                //   <br /><br />
                //   <Divider/>
                // </Box>
              )
            })}
          </ModalBody>
            <Center>
          <ModalFooter>
            <Button colorScheme='messenger' onClick={() => {
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
  // いったん消しとく
  const res = await fetch('https://es4.eedept.kobe-u.ac.jp/ezbus/api/get/') // api call
  const events = await res.json()

  // const events = {
  //   "century-praza": [
  //     { "eid": "1", "title": "餅つき", "date": "2022-08-12 11:45", "spot": "century-praza", "description": "餅つき" },
  //     { "eid": "2", "title": "餅まき", "date": "2022-08-12 12:12", "spot": "century-praza", "description": "餅まき" },
  //     { "eid": "3", "title": "マグロ解体ショー", "date": "2022-08-12 13:14", "spot": "century-praza", "description": "マグロ解体ショー" },
  //     { "eid": "4", "title": "アリヤナ～グランデライブ", "date": "2022-08-12 13:56", "spot": "century-praza", "description": "アリヤナ～グランデライブ" },
  //     { "eid": "5", "title": "サザナミオールスターズ解散ライブ", "date": "2022-08-15 13:56", "spot": "century-praza", "description": "サザナミオールスターズ解散ライブ" }
  //   ],
  //   "community-hall": [
  //     { "eid": "6", "title": "牛肉即売会", "date": "2022-08-12 11:45", "spot": "community-hall", "description": "牛肉即売会" },
  //     { "eid": "7", "title": "有機野菜即売会", "date": "2022-08-12 13:45", "spot": "community-hall", "description": "有機野菜即売会" },
  //     { "eid": "8", "title": "豚肉即売会", "date": "2022-08-12 13:59", "spot": "community-hall", "description": "豚肉即売会" }
  //   ],
  //   "akasia-4": [
  //     { "eid": "9", "title": "縄跳び大会", "date": "2022-08-12 11:45", "spot": "akasia-4", "description": "縄跳び大会" },
  //     { "eid": "10", "title": "大相撲大会・予選", "date": "2022-08-13 13:50", "spot": "akasia-4", "description": "大相撲大会・予選" },
  //     { "eid": "11", "title": "大相撲大会・決勝", "date": "2022-08-16 12:45", "spot": "akasia-4", "description": "大相撲大会・決勝" }
  //   ],
  //   "erumu-praza": [
  //     { "eid": "12", "title": "腕相撲大会・予選", "date": "2022-08-12 11:45", "spot": "erumu-praza", "description": "腕相撲大会・予選" },
  //     { "eid": "13", "title": "腕相撲大会・準決勝", "date": "2022-08-12 12:35", "spot": "erumu-praza", "description": "腕相撲大会・準決勝" },
  //     { "eid": "14", "title": "腕相撲大会・決勝", "date": "2022-08-12 12:56", "spot": "erumu-praza", "description": "腕相撲大会・決勝" }
  //   ],
  //   "sanda-municipal-hospital": []
  // }

  console.log(events)
  return { props: { events } }
}

