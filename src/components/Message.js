import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 1400,
    },
    link: {
        color: "white",
        textDecoration: "none"
    },
}));

function Message() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3" gutterBottom>Thanks for Buying!</Typography>
            <Link to="/" className={classes.link}>
                <Button variant="contained" color="secondary">Continue Shopping</Button>
            </Link>

        </div>
    )
}

export default Message;
