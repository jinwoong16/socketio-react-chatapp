import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

const useStyles = makeStyles(theme => ({
    container: {
        overflow: 'auto',
        flex: 'auto',
        scrollTop: 'scrollHeight',
        margin: '30px 10px',
    }, 
}));

const Messages = ({ messages, name }) => {
    const classes = useStyles();

    return (
        <ScrollToBottom className={classes.container}>
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </ScrollToBottom>
    )
}

export default Messages
