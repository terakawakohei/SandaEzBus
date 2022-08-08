import { Link, Button, Flex } from '@chakra-ui/react'
import {
    Box,
    FormLabel,
    Textarea,
    Input,
    Select
  } from '@chakra-ui/react'

import { useEvent } from '../components/hooks/useEvent';

export default function Admin() {
const { setEvent, setDescription, setPlace, send } = useEvent();

return (
    <Box margin={"5px"}>
        <FormLabel>イベント名</FormLabel>
        <Input type="text" onChange={(e) => setEvent(e.target.value)} />
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