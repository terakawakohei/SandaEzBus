import { useState } from 'react';

export const useEvent = () => {
  const [event, setEvent] = useState('');
  const [description, setDescription] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState(new Date());

  const send = async () => {
    const d = new Intl.DateTimeFormat("ja-jp", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date).replace(/\//g, '-');
    

    await fetch('https://es4.eedept.kobe-u.ac.jp/ezbus/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    // dateはUTCに変換される
      body: JSON.stringify({title:event, date:d, sid:place, description: description}),
    }).then(response => {
        console.log(response.status)
      
    });
  };

  return {
    setEvent, setDescription, setPlace, date, setDate, send,
  };
};