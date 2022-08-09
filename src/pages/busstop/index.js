import { Link, Button, Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

function BackdropFilters({href, img, children}) {
  const outerBoxStyles = {
    boxSize: '250px',
    margin: '10px',
    p: '10',
    background:
      'url('+img+') center/cover no-repeat',
  }

  const innerBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: 'full',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
  }
  return (
      <Box as='a' href={href} sx={outerBoxStyles}>
        <Box sx={innerBoxStyles} backdropFilter='auto' backdropContrast='30%'>
          {children}
        </Box>
      </Box>
  )
}

export default function Test() {
  return (
    <Flex flexDirection='column' align='center'>
      <BackdropFilters href='/busstop/yurityu' img='/assets/yuri.jpg'>
        ゆりのき台中学校前<br/>
        乗り換え
      </BackdropFilters>
      <BackdropFilters href='/busstop/tyuokoen' img='/assets/koen.jpg'>
        中央公園前<br/>
        乗り換え
      </BackdropFilters>
        {/* <Button as='a' href='/busstop/tyuokoen' margin='10px' w='90%' h='300px' boxShadow='0 4px 8px 0 rgba(0, 0, 0, .5)' borderRadius='15px' _hover={{transform:'translateY(-10px)', transition:'0.5s'}}>
            中央公園前
        </Button>
        <Button as='a' href='/busstop/yurityu' margin='10px' w='90%' h='300px' boxShadow='0 4px 8px 0 rgba(0, 0, 0, .5)' borderRadius='15px' _hover={{transform:'translateY(-10px)', transition:'0.5s'}}>
            ゆり中前
        </Button> */}


    </Flex>
  )
}
