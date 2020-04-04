import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

import onlineIcon from '../../icons/onlineIcon.png';

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Info = ({ channel }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static" style={{ width: '100%' }} color='secondary'>
            <Toolbar>
            <div className={classes.menuButton}>
                <img className="onlineIcon" src={onlineIcon} alt="online icon" />
            </div>
            <Typography variant="h6" className={classes.title}>
              {channel}
            </Typography>
            <IconButton href='/'>
                <ClearIcon />
            </IconButton>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Info
