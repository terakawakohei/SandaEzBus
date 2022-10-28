import { Link, Button, Flex, useBoolean } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import {
    Box,
    FormLabel,
    Select,
    Divider,
    Table,
    Thead,
    Tr,
    Th,
    TableContainer,
    ButtonGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Center,  
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    useToast
} from '@chakra-ui/react'
import Router, { useRouter } from 'next/router' 
import spot_info from '../data/spot_coord.json' //spot_name, longtitude, latitude
import React from 'react'

export default function AdminDeleteEvents(props) {
    const [deletePlace, setDeletePlace] = useState('century-praza');
    const { isOpen, onOpen, onClose } = useDisclosure(false, false, false);
    const router = useRouter();
    const initialFocusRef = React.useRef();
    const firstFieldRef = React.useRef(null)
    const toast = useToast();
    const [edata, setEdata] = useState()

    useEffect(()=>{
        fetch('https://es4.eedept.kobe-u.ac.jp/ezbus/api/get/')
        .then((res) => res.json())
        .then((data) => {
            setEdata({'events':data})
        })
    }, [])

    async function deleteEvent(eid){
        await fetch('https://es4.eedept.kobe-u.ac.jp/ezbus/api/delete/'+eid, {
            method: 'DELETE',
        }).then(response => {
            if (response.ok){
                toast({
                    title: 'Success',
                    description: "イベントを削除しました",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                  })
            }else{
                toast({
                    title: 'Error',
                    description: "入力されていない項目があります",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                  })
            }
            return response.json()
        }).then(response => {
            setEdata({'events':response});
        })
    };

    const Popup = ({firstFieldRef, onCancel, item}) => {
        const [isOpen, setIsOpen] = useBoolean()
        return (
            <Popover
                isOpen={isOpen}
                onOpen={setIsOpen.on}
                onClose={setIsOpen.off}
                initialFocusRef={firstFieldRef}
                placement='bottom'
                closeOnBlur={true}
                >
                <PopoverTrigger>
                <Button>この予定を削除する</Button>
                </PopoverTrigger>
                <PopoverContent color='white' bg='red.500' borderColor='blue.800'>
                <PopoverHeader pt={4} fontWeight='bold' border='0' >
                    <Center>イベント名：{item.title}</Center>
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    このイベントを本当に削除しますか？
                </PopoverBody>
                <Center>
                    <PopoverFooter
                    border='0'
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    pb={4}
                    >
                        <ButtonGroup size='sm'>
                        <Button colorScheme='green' onClick={setIsOpen.off}>キャンセル</Button>
                        <Button colorScheme='blue' ref={initialFocusRef} onClick={() => {
                            deleteEvent(item.eid)
                            }}>
                            削除する
                        </Button>
                        </ButtonGroup>  
                    </PopoverFooter>
                </Center>
                
                </PopoverContent>
            </Popover>
        )
    }
    if (!edata) return <></>

    return (
        <Box>
            <br></br><Divider variant="dashed"/><br></br>
            <FormLabel>イベントを削除する
            <Select placeholder='削除するイベントの場所を選択してください' 
            onChange={(e) => 
                {
                    setDeletePlace(e.target.value);
                    onOpen();
                }
                }>
                <option value='century-praza'>センチュリープラザ前イオン</option>
                <option value='erumu-praza'>えるむプラザ</option>
                <option value='akasia-4'>あかしあ台4丁目</option>
                <option value='sanda-municipal-hospital'>さんだ市民病院</option>
                <option value='community-hall'>コミュニティホール前</option>
            </Select>
                    
            <Modal size={'lg'} isOpen={isOpen} onClose={onClose} margin={5} motionPreset='slideInBottom'>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>「{spot_info.spot[deletePlace].spot_name}」イベント一覧</ModalHeader>
                <ModalCloseButton />
                <Divider/>
                <ModalBody>
                    {edata.events[deletePlace].map((item) => {
                        console.log(edata)
                        return (
                            <div key={item.title}>
                                <TableContainer>
                                    <Table size='md' variant='unstyled'>
                                        <Thead>
                                        <Tr>
                                        <Th>イベント名　：{item.title}</Th>
                                        </Tr>
                                    </Thead>
                                    <Thead>
                                        <Tr>
                                        <Th>イベント詳細：{item.description}</Th>
                                        </Tr>
                                    </Thead>
                                    <Thead>
                                        <Tr>
                                        <Th>イベント日時：{item.date}</Th>
                                        </Tr>
                                    </Thead>
                                    {/* <Thead>
                                        <Tr>
                                        <Th>for test：{item.eid}</Th>
                                        </Tr>
                                    </Thead> */}
                                    </Table>
                                </TableContainer>
                                <Center>
                                    <Popup firstFieldRef={firstFieldRef} onCancel={onClose} item={item}></Popup>
                                </Center>
                                <br></br>
                                <Divider/>
                            </div>
                        )
                        
                    })}
                    {/* {console.log(props)} */}
                    <Divider/>
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            </FormLabel>
        </Box>
    );
}
