import { useState } from 'react';
import moment from 'moment';

export const useEvent = () => {
  const [title, setTitle] = useState('');
  const [sid, setSid] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);

  const send = async () => {
    console.log(JSON.stringify({ title: title, sid: sid, date: moment(date).format("YYYY-MM-DD HH:mm"), description: description }))
    await fetch('http://localhost:2289/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // dateはUTCに変換される
      body: JSON.stringify({ title: title, sid: sid, date: moment(date).format("YYYY-MM-DD HH:mm"), description: description })

    }).then(response => console.log(response));
  };

  return {
    setTitle, setDescription, setSid, date, setDate, send,
  };
};