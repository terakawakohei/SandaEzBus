import Link from 'next/link';
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";

export default function Header() {

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            // bg="teal.500"
            color="black"
        >
            {/* <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                    Chakra UI
                </Heading>

            </Flex> */}



            <Box
            >
                <Button bg="transparent" border="1px">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </Button>
            </Box>
     
            <Box>
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='20px'
                    fontWeight='extrabold'
                    >
                    Sanda Ez Bus
                    </Text>
            </Box>
        </Flex>


    );
}
