import Image from 'next/image'
import {
    AspectRatio,
    Button,
    Box,
    Center,
    Flex,
    Heading,
    List,
    ListItem,
    ListIcon,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react'

import { useState } from "react"
import { MdCheckCircle } from 'react-icons/md'
import bus_info from '../../data/bus_station_data.json'

export default function Yuri (){
    const [bus_station, setSpot] = useState('yurinoki-i')
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
    <Center>
        <Flex p="6" w="full" maxW="400px" alignItems='center' justifyContent='center' direction='column'>
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10' onClick={() => 
                {
                    setSpot("yurinoki-i")
                    console.log(bus_info.bus_station_info[bus_station])
                    onOpen()
                }}>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/yuri-i.jpg"
                    fallbacksrc="https://via.placeholder.com/300x200"
                    layout="fill"
                    alt='demo'
                    />
                </Box>
                <Stack>
                    <Text
                    color="blue.500"
                    fontWeight="800"
                    fontSize="xs"
                    letterSpacing="wide"
                    >
                    </Text>
                    <Heading color="gray.700" fontSize="lg" fontFamily="body">
                    ゆりのき台中学校前（イ）
                    </Heading>
                    <List spacing={3}>
                    <ListItem>
                        <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            「デイサービス ゆりのき」の南側にあるバス停
                        </Text>
                        <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            バスの方転場になっている
                        </Text>
                        <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            大きな駐車場の中(道路沿いではない)に存在する
                        </Text>
                        <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            コミュニティホール方面行のバスが走っている
                        </Text>
                    </ListItem>
                    </List>
                </Stack>
            </Box>
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10' onClick={() => 
                {
                    setSpot("yurinoki-r")
                    console.log(bus_info.bus_station_info[bus_station])
                    onOpen()
                }}>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/yuri-ro.jpg"
                    fallbacksrc="https://via.placeholder.com/300x200"
                    layout="fill"
                    alt='demo'
                    />
                </Box>
                <Stack>
                    <Text
                    color="blue.500"
                    fontWeight="800"
                    fontSize="xs"
                    letterSpacing="wide"
                    >
                    </Text>
                    <Heading color="gray.700" fontSize="lg" fontFamily="body">
                    ゆりのき台中学校前（ロ）
                    </Heading>
                    <List spacing={3}>
                    <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        「デイサービス ゆりのき」から北側に少し進んだところにあるバス停
                        </Text>
                    </List>
                </Stack>
            </Box>
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10' onClick={() => 
                {
                    setSpot("yurinoki-h")
                    console.log(bus_info.bus_station_info[bus_station])
                    onOpen()
                }}>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/yuri-ha.jpg"
                    fallbacksrc="https://via.placeholder.com/300x200"
                    layout="fill"
                    alt='demo'
                    />
                </Box>
                <Stack>
                    <Text
                    color="blue.500"
                    fontWeight="800"
                    fontSize="xs"
                    letterSpacing="wide"
                    >
                    </Text>
                    <Heading color="gray.700" fontSize="lg" fontFamily="body">
                    ゆりのき台中学校前（ハ）
                    </Heading>
                    <List spacing={3}>
                    <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            「デイサービス ゆりのき」の東側の道を挟んだ向かい側にあるバス停
                    </Text>
                    <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            えるむプラザ、センチュリープラザ、あかしあ台4丁目（新三田）方面行のバスが走っている
                        </Text>
                    </List>
                </Stack>
            </Box>
            <Button as="a" href='/busstop' colorScheme={"blue"} variant={"outline"}>戻る</Button>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{bus_info.bus_station_info[bus_station].name}</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
          <AspectRatio>
                <iframe 
                src={bus_info.bus_station_info[bus_station].emb_src}
                width="100%"
                height="100%" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </AspectRatio>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
    </Center>
    )
}