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
            color="black"
        >
            <Box>
                <Link href="/">
                <Button bg="transparent" border="1px">
                        <a>Home</a>
                </Button>
                </Link>
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
