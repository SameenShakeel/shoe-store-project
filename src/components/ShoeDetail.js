import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { shoes } from "../Data";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 800,
        textAlign: 'justify',
        marginBottom: 30
    },
    img: {
        height: 500,
        width: 600,
        marginBottom: 15,
    },
    detail: {
        width: 600
    },
    link: {
        color: "white",
        textDecoration: "none"
    },
}));

function ShoeDetail() {
    const classes = useStyles();

    const { slug } = useParams();
    const shoe = shoes[slug];

    if (!shoe) {
        return <Typography variant="body1">Not Found</Typography>
    }

    const { title, img, price, detail } = shoe;

    return (
        <div className={classes.root}>
            <Typography variant="h6">{title}</Typography>
            <img src={img} alt={title} className={classes.img} />
            <Typography variant="body2" className={classes.detail} gutterBottom>Details: {detail}</Typography>
            <Typography variant="body1" gutterBottom>Price: {price} Rs</Typography>
            <Link to="/msg" className={classes.link}>
                <Button variant="contained" color="secondary">Buy Now</Button>
            </Link>
        </div>
    )
}

export default ShoeDetail;
