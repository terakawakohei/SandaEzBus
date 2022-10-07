import { Link, Button, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import {
    Box,
    FormLabel,
    Textarea,
    Input,
    Select,
    Divider,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Center
} from '@chakra-ui/react'
import Router, { useRouter } from 'next/router' 
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css"
import spot_info from '../data/spot_coord.json' //spot_name, longtitude, latitude

import { useEvent } from '../components/hooks/useEvent';

export default function Admin(data) {
    const { setEvent, setDescription, setPlace, date, setDate,  send} = useEvent();
    const Today = new Date();
    // const [deletePlace, setDeletePlace] = useState('for-escape-error');
    const [deletePlace, setDeletePlace] = useState('century-praza');
    const [eventsByLoc, setEventsByLoc] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure(false, false, false)
    const [isFirst, setIsFirst] = useState(Boolean("true"));
    const router = useRouter()

    useEffect(() => {
        console.log("selected place: " + deletePlace)
        showEventList();
        setIsFirst(false);
      },[deletePlace]);

    //for debug
    // useEffect(() => {console.log(eventsByLoc)},[eventsByLoc]);

    registerLocale('ja', ja);

    async function deleteEvent(eid){
        await fetch('https://es4.eedept.kobe-u.ac.jp/ezbus/api/delete/'+eid, {
            method: 'DELETE',
        }).then(response => {
            console.log(response.status)
        })
        router.reload()//画面更新。ここ何とかならない？
    };

    return (
        <Box margin={5}>
            <FormLabel>イベント名</FormLabel>
            <Input type="text" onChange={(e) => setEvent(e.target.value)} />
            <FormLabel>開催日時</FormLabel>
            <field>
                <DatePicker 
                    dateFormat="yyyy/MM/dd HH:mm"
                    selected={date}
                    locale='ja'
                    showTimeSelect
                    onChange={selectedDate => {
                        console.log(selectedDate);
                        setDate(selectedDate)}}
                />
            </field>
            
            <FormLabel>開催場所</FormLabel>
            <Select placeholder='開催場所を選択してください' onChange={(e) => setPlace(e.target.value)} >
                <option value='century-praza'>センチュリープラザ前イオン</option>
                <option value='erumu-praza'>えるむプラザ</option>
                <option value='akasia-4'>あかしあ台4丁目</option>
                <option value='sanda-municipal-hospital'>さんだ市民病院</option>
                <option value='community-hall'>コミュニティホール前</option>
            </Select>
            <FormLabel>イベントの詳細</FormLabel>
            <Textarea onChange={(e) => setDescription(e.target.value)} />
            <Button type="button" onClick={send}>作成する</Button>

            {/* ↓added by ryo */}
            <br></br><br></br><Divider/><br></br>
            
            <FormLabel>イベントを削除する</FormLabel>
            <Select placeholder='削除するイベントの場所を選択してください' 
            onChange={(e) => setDeletePlace(e.target.value)
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
                    {data.events[deletePlace].map((item) => {
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
                                    <Thead>
                                        <Tr>
                                        <Th>for test：{item.eid}</Th>
                                        </Tr>
                                    </Thead>
                                    </Table>
                                </TableContainer>
                                <Center>
                                <Button size='md' colorScheme='messenger' onClick={() => {
                                    deleteEvent(item.eid)
                                    onClose();
                                }}>この予定を削除する</Button>
                                </Center>
                                <br></br>
                                <Divider/>
                            </div>
                        )
                        
                    })}
                    <Divider/>
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        </Box>
    );

    function showEventList(){
        // setEventsByLoc(data.events[deletePlace])
        if(!isFirst){onOpen()}
    }

    
}

export async function getServerSideProps() {
    const res = await fetch('https://es4.eedept.kobe-u.ac.jp/ezbus/api/get/') // api call
    const events = await res.json()
    // console.log(events)
    return { props: { events } }
}

