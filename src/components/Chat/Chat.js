import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import querystring from 'query-string';

import Info from '../Info/Info';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

import io from 'socket.io-client';

let socket;

const useStyles = makeStyles((theme) => ({
  chatcontainer: {
    padding: theme.spacing(0),
    margin: 0,
    // minWidth: '70vw',
    // minHeight: '80vh',
    height: '70%',
    widht: '35%',
    backgroundColor: '#fff',
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

const Chat = ({ location }) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [channel, setChannel] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'YOUR_SERVER';

  useEffect(() => {
    const { name, channel } = querystring.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setChannel(channel);

    socket.emit('join', { name, channel }, (error) => {
      if (error) {
        alert(error);
      }
    });
  },[location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = e => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div style={{
      height: '100vh'
    }}
    >
      <CssBaseline />
      <Container className={classes.chatcontainer} maxWidth="md" style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        <Info channel={channel} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </Container>
    </div>
  );
}

export default Chat;