import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    messageContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 5%'
    },
    messageBox: {
        borderRadius: '20px',
        background: '#f3f3f3',
        padding: '5px 20px',
        display: 'inline-block',
        maxWidth: '80%',
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    sentWho: {
        display: 'flex',
        alignItems: 'center',
        color: '#828282',
        letterSpacing: '1px',
    },
    pl_10: {
        paddingLeft: '10px',
    },
    pr_10: {
        paddingRight: '10px'
    },
    backgroundSecondary: {
        background: '#f50057',
        color: '#fff',
    }
}));

const Message = ({ message: { text, user }, name }) => {
    const classes = useStyles();

    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className={`${classes.messageContainer} ${classes.justifyEnd}`}>
                    <p className={`${classes.sentWho} ${classes.pr_10}`}>{trimmedName}</p>
                    <div className={`${classes.messageBox} ${classes.backgroundSecondary}`}>
                        <p>{text}</p>
                    </div>
                </div>
            )
            : (
                <div className={`${classes.messageContainer} ${classes.justifyStart}`}>
                    <div className={classes.messageBox}>
                        <p>{text}</p>
                    </div>
                        <p className={`${classes.sentWho} ${classes.pl_10}`}>{user}</p>
                </div>
            )
    )
}

export default Message
