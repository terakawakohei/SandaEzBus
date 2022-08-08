import { Link, Button, Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'


export default function Test() {
  return (
    <Flex flexDirection='column' align='center'>
        <Button as='a' href='/busstop/tyuokoen' margin='10px' w='90%' h='300px' boxShadow='0 4px 8px 0 rgba(0, 0, 0, .5)' borderRadius='15px' _hover={{transform:'translateY(-10px)', transition:'0.5s'}}>
            中央公園前
        </Button>
        <Button as='a' href='/busstop/yurityu' margin='10px' w='90%' h='300px' boxShadow='0 4px 8px 0 rgba(0, 0, 0, .5)' borderRadius='15px' _hover={{transform:'translateY(-10px)', transition:'0.5s'}}>
            ゆり中前
        </Button>


    </Flex>
  )
}
