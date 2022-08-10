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

export default function Yuri (){
    return (
    <Center>
        <Flex p="6" w="full" maxW="400px" alignItems='center' justifyContent='center' direction='column'>
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10'>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/yuri-i.jpg"
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
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10'>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/yuri-ro.jpg"
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
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10'>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/yuri-ha.jpg"
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
        </Flex>
    </Center>
    )
}