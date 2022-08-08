import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Box,
  } from '@chakra-ui/react'
  import React, { useRef } from "react"
  import {Hero} from "../components/Hero"
  import {ModalExample} from "../components/Modal"
  
  export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
      <Hero />
      <ModalExample />
      </>
    )
  }