import { Button } from '@chakra-ui/react'

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
import AdminDeleteEvents from "../components/adminDeleteEvents"

export default function Admin(data) {
    const { setEvent, setDescription, setPlace, date, setDate,  send} = useEvent();
    const Today = new Date();
    registerLocale('ja', ja);

    return (
        <Box margin={5}>
            {/* FormにFormErrorMessage使いたい */}
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
            <AdminDeleteEvents edata={data}/>
        </Box>
    );
}

export async function getServerSideProps() {
    const res = await fetch('https://es4.eedept.kobe-u.ac.jp/ezbus/api/get/') // api call
    const events = await res.json()
    // console.log(events)
    return { props: { events } }
}

