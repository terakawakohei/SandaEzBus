
import { useSession, signIn, signOut } from "next-auth/react"

import {
    Box,
    FormControl,
    FormLabel,
    Textarea,
    Input,
    Select,
    FormErrorMessage,
    Divider,
    useToast,
    Button,
    Flex,
} from '@chakra-ui/react'

import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css"
import { useEvent } from '../components/hooks/useEvent';
import AdminDeleteEvents from "../components/adminDeleteEvents"



export default function Admin() {
    const { data: session } = useSession()
    const { event, setEvent, description, setDescription, place, setPlace, date, setDate, onClose, onOpen, isVisible, send } = useEvent();

    const Today = new Date();
    const isEvent = event === ''
    const isPlace = place === ''
    const isDate = date === ''
    const toast = useToast()
    registerLocale('ja', ja);
    
    if (session) {
        return (
        <Box margin={2} borderWidth='1px' borderRadius='lg' padding={4}>
          <FormControl  isRequired isInvalid={isEvent} marginBottom={5}>
            <FormLabel>イベント名</FormLabel>
            <Input type="text" onChange={(e) => setEvent(e.target.value)} value={event}/> 
            {!isEvent ? (
              <></>
            ) : (
              <FormErrorMessage>イベント名を入力してください</FormErrorMessage>
            )}
          </FormControl>
          <Divider/>
          <FormControl isRequired marginBottom={5}>
            <FormLabel>開催日時</FormLabel>
            <field>
                <DatePicker 
                    dateFormat="yyyy/MM/dd HH:mm"
                    placeholderText="日時を選択してください"
                    selected={date}
                    locale='ja'
                    showTimeSelect
                    onChange={selectedDate => {
                        console.log(selectedDate);
                        setDate(selectedDate)}}
                />
            </field>
            </FormControl>
            <Divider/>
            <FormControl isInvalid={isPlace} isRequired marginBottom={5}>
              <FormLabel>開催場所</FormLabel>
              <Select placeholder='開催場所を選択してください' onChange={(e) => setPlace(e.target.value)} value={place}>
                  {/* <option value='century-praza'>センチュリープラザ前イオン</option>
                  <option value='erumu-praza'>えるむプラザ</option>
                  <option value='akasia-4'>あかしあ台4丁目</option>
                  <option value='sanda-municipal-hospital'>さんだ市民病院</option>
                  <option value='community-hall'>コミュニティホール前</option> */}
                  <option value='woody-central'>ウッディタウン中央</option>
                  <option value='woody-south'>南ウッディタウン</option>
                  <option value='akasia-chiku-center'>あかしあ台地区センター</option>
                  <option value='woody-simin-center'>ウッディタウン市民センター</option>
                  <option value='sanda-municipal-hospital'>三田市民病院</option>
              </Select>
              {!isEvent ? (
                <></>
                ) : (
                  <FormErrorMessage></FormErrorMessage>
              )}
            </FormControl>
            <Divider/>
            <FormLabel>イベントの詳細</FormLabel>
            <Textarea onChange={(e) => setDescription(e.target.value)} value={description} marginBottom={4}/>
            <Button type="button" 
            onClick={()=>{
              if (!isEvent && !isPlace && !isDate) {
                send().then(response => {
                  if (response.ok) {
                      onOpen()
                      setEvent('')
                      setDescription('')
                      setPlace('')
                      setDate('')
                      toast({
                        title: 'Success',
                        description: "イベントを作成しました",
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                        position: 'top'
                      })
                  }
                  console.log(isPlace)
                  console.log(isEvent)
                  
                })
              } else{
                toast({
                        title: 'Error',
                        description: "入力されていない項目があります",
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                        position: 'top'
                      })
              }
            }}
            >作成する</Button>
            <AdminDeleteEvents/>
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
