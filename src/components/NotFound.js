import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1400,
        margin: '0 auto'
    },
}));


function NotFound () {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4">Not Found!</Typography>
        </div>
    )
}

export default NotFound;
