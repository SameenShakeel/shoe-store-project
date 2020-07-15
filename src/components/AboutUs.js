import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 600,
        textAlign: 'justify'
    },
    link: {
        color: "white",
        textDecoration: "none"
    },
    paper: {
        padding: theme.spacing(3),
    },
}));


function AboutUs()  {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" gutterBottom>About Us</Typography>
            <Paper className={classes.paper} elevation={5}>
                <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    <Link to="/" className={classes.link}>
                        <Button variant="contained" color="secondary">Learn More</Button>
                    </Link>
            </Paper>
        </div>
    )
}

export default AboutUs;
