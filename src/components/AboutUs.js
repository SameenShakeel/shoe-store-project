import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 1400,
    }
}));


function AboutUs()  {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4">About Us</Typography>
        </div>
    )
}

export default AboutUs;
