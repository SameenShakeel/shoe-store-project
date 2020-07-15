import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 60
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(4),
  },
  link: {
    color: "white",
    textDecoration: "none"
  },

}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shoe Store
          </Typography>
          <Link to="/" className={classes.link}>
            <Button color="inherit" className={classes.button}>Home</Button>
          </Link>
          <Link to="/aboutus" className={classes.link}>
            <Button color="inherit" className={classes.button}>About Us</Button>
          </Link>
          <Link to="/contactus" className={classes.link}>
            <Button color="inherit" className={classes.button}>Contact Us</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
