import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { shoes } from '../Data';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        marginTop: 50,
        marginBottom: 50,
    },
    paper: {
        padding: theme.spacing(3),
        marginLeft: 20,
        height: 350,
        width: 400
    },
    img: {
        height: 300,
        width: 400
    },
    link: {
        color: "white",
        textDecoration: "none"
    },
}));


function Shoes() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center">
                {Object.entries(shoes).map(([slug, { title, img }]) => {
                    return (
                        <Grid item xs={12} sm={4} key={slug}>
                            <Link to={`/${slug}`} className={classes.link}>
                                <Paper className={classes.paper} elevation={5}>
                                    <Typography variant="h6" gutterBottom>{title}</Typography>
                                    <img src={img} alt={title} className={classes.img} />
                                </Paper>
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}


export default Shoes;
