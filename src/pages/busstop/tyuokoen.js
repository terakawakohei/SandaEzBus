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

import { MdCheckCircle } from 'react-icons/md'
import { useState } from "react"
import bus_info from '../../data/bus_station_data.json'



export default function Koen (){
    const [bus_station, setSpot] = useState('yurinoki-i')
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <Center>
        <Flex p="6" w="full" maxW="400px" alignItems='center' justifyContent='center' direction='column'>
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10' onClick={() => 
                {
                    setSpot("chuou-koen-i")
                    console.log(bus_info.bus_station_info[bus_station])
                    onOpen()
                }}>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/koen-i.jpg"
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
                        中央公園前（イ）
                    </Heading>
                    <List spacing={3}>
                    <ListItem>
                        <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            中央公園噴水広場の南側の道路沿いにあるバス停
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            中央公園南側を東から西側に通っている道路の道路沿いにある
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            コミュニティホール、えるむプラザ、あかしあ台4丁目方面行のバスが走っている
                        </Text>
                    </ListItem>
                    </List>
                </Stack>
            </Box>
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10' onClick={() => 
                {
                    setSpot("chuou-koen-r")
                    console.log(bus_info.bus_station_info[bus_station])
                    onOpen()
                }}>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/koen-ro.jpg"
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
                        中央公園前（ロ）
                    </Heading>
                    <List spacing={3}>
                    <ListItem>
                        <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            中央公園噴水広場の南側の道路沿いにあるバス停
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            中央公園南側を西から東側に通っている道路の道路沿いにある
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            新三田、三宮方面行のバスが走っている
                        </Text>
                    </ListItem>
                    </List>
                </Stack>
            </Box>
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10' onClick={() => 
                {
                    setSpot("chuou-koen-h")
                    console.log(bus_info.bus_station_info[bus_station])
                    onOpen()
                }}>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/koen-ha.jpg"
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
                        中央公園前（ハ）
                    </Heading>
                    {/* <Text color="gray.500" fontSize="sm"> */}
                    <List spacing={3}>
                    <ListItem>
                        <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            中央公園西側を南から北側に通っている道路の道路沿いにあるバス停
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="gray.500" fontSize="sm">
                        <ListIcon as={MdCheckCircle} color='green.500' />
                            センチュリープラザ方面行のバスが走っている
                        </Text>
                    </ListItem>
                    </List>
                </Stack>
            </Box>
            <Button as="a" href='/busstop' colorScheme={"blue"} variant={"outline"}>戻る</Button>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{bus_info.bus_station_info[bus_station].name}</ModalHeader>
          <ModalCloseButton />
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