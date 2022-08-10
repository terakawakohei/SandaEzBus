import { useSession, signIn, signOut } from "next-auth/react"

import {
    Box,
    Button,
    Flex,
    FormLabel,
    Textarea,
    Input,
    Select,
} from '@chakra-ui/react'
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css"

import { useEvent } from '../components/hooks/useEvent';


export default function Admin() {
    const { data: session } = useSession()
    const { setEvent, setDescription, setPlace, date, setDate,  send } = useEvent();
    const Today = new Date();
    registerLocale('ja', ja);
    if (session) {
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
                    <option value='option1'>中央公園前</option>
                    <option value='option2'>えるむプラザ</option>
                </Select>
                <FormLabel>イベントの詳細</FormLabel>
                <Textarea onChange={(e) => setDescription(e.target.value)} />
                <Button type="button" onClick={send}>作成する</Button>
            </Box>
        );
    }

  return (
    <Flex h='80vh' justify='center' align='center' direction='column'>
        <Box>Not signed in</Box>
        <Box><Button onClick={() => signIn()}>Sign in</Button></Box>
    </Flex>
    )
}