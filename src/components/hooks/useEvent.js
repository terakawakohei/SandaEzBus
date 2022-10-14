import { useState } from 'react';
import {
  useDisclosure,
} from '@chakra-ui/react'

export const useEvent = () => {
  const [event, setEvent] = useState('');
  const [description, setDescription] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false })

  const send = async ({}) => {
    const d = new Intl.DateTimeFormat("ja-jp", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date).replace(/\//g, '-');
    

    const status = await fetch('https://es4.eedept.kobe-u.ac.jp/ezbus/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    // dateはUTCに変換される
      body: JSON.stringify({title:event, date:d, sid:place, description: description}),
    })

    return status
  };

  return {
    event, setEvent, description, setDescription, place, setPlace, date, setDate, send, isVisible, onClose, onOpen
  };
};