import MapSVG from '../components/svg/Map'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'

import { ChakraProvider } from '@chakra-ui/react'
import { useState } from "react";
export default function Map() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState('md')

    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const openModal = (e) => {

        console.log(typeof e);
        setSize('full')
        onOpen()
    }

    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
    return (
        <div>
            <ChakraProvider>
                <MapSVG onClickSpot={(e) => openModal(e)} />
                {sizes.map((size) => (
                    <Button
                        onClick={() => handleSizeClick(size)}
                        key={size}
                        m={4}
                    >{`Open ${size} Modal`}</Button>
                ))}
                <Modal onClose={onClose} size={size} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            hghg
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </ChakraProvider>

        </div>
    )
}