import { useState } from 'react';

export const useEvent = () => {
  const [event, setEvent] = useState('');
  const [description, setDescription] = useState('');
  const [place, setPlace] = useState('');

  const send = async () => {
    await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({event:event, place:place, description: description}),
    }).then(response => console.log(response));
  };

  return {
    setEvent, setDescription, setPlace, send,
  };
};