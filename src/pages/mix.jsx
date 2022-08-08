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
  import {BasicModal} from "../components/BasicModal"
  import {TransitionModal} from "../components/TransitionModal"
  import {SizeModalExample} from "../components/SizeModalExample"
  import { ListExample } from '../components/ListExample'

  export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
      <Hero />
      {/* <BasicModal /> */}
      <TransitionModal />
      <SizeModalExample />
      <ListExample />
      </>
    )
  }