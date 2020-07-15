import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 1400,
    }
}));

function ShoeList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Outlet />
        </div>
    )
}

export default ShoeList;
