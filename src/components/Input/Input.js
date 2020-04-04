import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      display: 'flex',
      justifyContent: 'space-around',
    },
    field: {
        margin: theme.spacing(0),
        padding: theme.spacing(3),
    },
    input: {
        "&::placeholder": {
          color: "gray"
        },
        color: "#000",
      }
  }));

const Input = ({ message, setMessage, sendMessage }) => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off" style={{borderTop: '1px solid  #d3d3d3'}}>
            <TextField
                className={classes.field}
                id="standard-basic" 
                style={{ width: '60%' }}
                placeholder="Text here"
                InputProps={{className: classes.input}}
                value={message}
                color='secondary'
                onChange={e => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
            />
            <IconButton edge='end' color='secondary' onClick={e => sendMessage(e)}>
              <SendIcon />
            </IconButton>
            
            
        </form>
    )
}

export default Input
