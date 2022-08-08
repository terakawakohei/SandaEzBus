import { useState } from 'react';

export const useEvent = () => {
  const [event, setEvent] = useState('');
  const [description, setDescription] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState(new Date());

  const send = async () => {
    await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    // dateはUTCに変換される
      body: JSON.stringify({event:event, date:date, place:place, description: description}),
    }).then(response => console.log(response));
  };

  return {
    setEvent, setDescription, setPlace, date, setDate, send,
  };
};