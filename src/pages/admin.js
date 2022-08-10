import { Link, Button, Flex } from '@chakra-ui/react'
import {
    Box,
    FormLabel,
    Textarea,
    Input,
    Select,
} from '@chakra-ui/react'
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css"

import { useEvent } from '../components/hooks/useEvent';
import moment from 'moment';

export default function Admin() {
    const { setTitle, setDescription, setSid, date, setDate, send } = useEvent();
    const Today = new Date();
    registerLocale('ja', ja);


    return (
        <Box margin={5}>
            <FormLabel>イベント名</FormLabel>
            <Input type="text" onChange={(e) => setTitle(e.target.value)} />
            <FormLabel>開催日時</FormLabel>
            <field>
                <DatePicker
                    dateFormat="yyyy/MM/dd HH:mm"
                    selected={date}
                    locale='ja'
                    showTimeSelect
                    onChange={selectedDate => {
                        // console.log(JSON.stringify(selectedDate));
                        console.log(moment(selectedDate).format("YYYY-MM-DD HH:mm"))
                        setDate(selectedDate)
                    }}
                />
            </field>

            <FormLabel>開催場所</FormLabel>
            <Select placeholder='開催場所を選択してください' onChange={(e) => setSid(e.target.value)} >
                <option value='century-praza'>センチュリープラザ前イオン</option>
                <option value='community-hall'>コミュニティホール前</option>
            </Select>
            <FormLabel>イベントの詳細</FormLabel>
            <Textarea onChange={(e) => setDescription(e.target.value)} />
            <Button type="button" onClick={send}>作成する</Button>
        </Box>
    );
}