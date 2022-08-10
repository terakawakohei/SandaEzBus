import Image from 'next/image'
import {
    Box,
    Center,
    Stack,
    Text,
    Heading,
    Flex,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react'

import { MdCheckCircle } from 'react-icons/md'

export default function Koen (){
    return (
    <Center>
        <Flex p="6" w="full" maxW="400px" alignItems='center' justifyContent='center' direction='column'>
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10'>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/koen-i.jpg"
                    fallbacksrc="https://via.placeholder.com/300x200"
                    layout="fill"
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
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10'>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/koen-ro.jpg"
                    fallbacksrc="https://via.placeholder.com/300x200"
                    layout="fill"
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
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10'>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/koen-ha.jpg"
                    fallbacksrc="https://via.placeholder.com/300x200"
                    layout="fill"
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
        </Flex>
    </Center>
    )
}