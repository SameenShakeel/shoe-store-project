import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 600,
    },
    paper: {
        padding: theme.spacing(3),
    },
    subheading: {
        fontSize: 45,
    },
    heading: {
        fontSize: 20
    },
    link: {
        color: "white",
        textDecoration: "none"
    },
    text: {
        width: theme.spacing(40),
        marginBottom: 20,
        color: "gray"
    }
}));

function ContactUs() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" gutterBottom>Contact Us</Typography>
            <Paper className={classes.paper} elevation={5}>
                <Typography variant="subtitle" className={classes.heading} gutterBottom>
                    GET IN TOUCH WITH US AND WE CAN HELP YOU
                    </Typography>
                <Typography variant="h5" className={classes.subheading} gutterBottom>
                    Ask a question right now
                    </Typography>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            required
                            label="First Name"
                            placeholder="Enter First Name..."
                            InputLabelProps={{ shrink: true }}
                            className={classes.text}
                        />
                        <TextField
                            label="Last Name"
                            placeholder="Enter Last Name..."
                            InputLabelProps={{ shrink: true }}
                            className={classes.text}
                        />
                        <TextField
                            required
                            label="Email"
                            placeholder="Enter Email..."
                            InputLabelProps={{ shrink: true }}
                            className={classes.text}
                        />
                        <TextField
                            label="Message"
                            placeholder="Enter your Message...."
                            multiline
                            InputLabelProps={{ shrink: true }}
                            className={classes.text}
                        />
                    </div>
                    <Link to="/" className={classes.link}>
                        <Button variant="contained" color="secondary">Send Message</Button>
                    </Link>
                </form>
            </Paper>
        </div>
    )
}

export default ContactUs;
