import Image from 'next/image'
import {
    Box,
    Center,
    Stack,
    Text,
    Heading,
    Flex,
} from '@chakra-ui/react'

export default function Koen (){
    return (
    <Center>
        <Flex p="6" w="full" maxW="400px" alignItems='center' justifyContent='center' direction='column'>
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10'>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/koen-i.jpg"
                    fallbackSrc="https://via.placeholder.com/300x200"
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
                    <Text color="gray.500" fontSize="sm">
                    Chakra UI is a simple, modular and accessible component library that
                    gives you the building blocks you need to build your React
                    applications.
                    </Text>
                </Stack>
            </Box>
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10'>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/koen-ro.jpg"
                    fallbackSrc="https://via.placeholder.com/300x200"
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
                    <Text color="gray.500" fontSize="sm">
                    Chakra UI is a simple, modular and accessible component library that
                    gives you the building blocks you need to build your React
                    applications.
                    </Text>
                </Stack>
            </Box>
            <Box bg="white" boxShadow="lg" rounded="xl" p="6" overflow="hidden" marginBottom='10'>
                <Box h="200px" mt="-6" mx="-6" pos="relative">
                    <Image
                    src="/assets/koen-ha.jpg"
                    fallbackSrc="https://via.placeholder.com/300x200"
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
                    <Text color="gray.500" fontSize="sm">
                    Chakra UI is a simple, modular and accessible component library that
                    gives you the building blocks you need to build your React
                    applications.
                    </Text>
                </Stack>
            </Box>
        </Flex>
    </Center>
    )
}