import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Link as Linkto } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Redshell's Chat App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    
  },
}));

const Join = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [channel, setChannel] = useState('');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            color='secondary'
            onChange={e => setName(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="channel"
            label="Channel"
            name="channel"
            color='secondary'
            onChange={e => setChannel(e.target.value)}
          />
          <Linkto onClick={e => (!name || !channel) ? e.preventDefault() : null} to={`/chat?name=${name}&channel=${channel}`} style={{ textDecoration: 'none' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              className={classes.submit}
            >
              Sign In
            </Button>
          </Linkto>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Join;