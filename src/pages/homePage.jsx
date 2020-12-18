import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './homePage.module.scss';
import { Container, Grid } from '@material-ui/core';

AOS.init();

const homePage = () => {

    return (
        <Container maxWidth>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <img src={process.env.PUBLIC_URL + 'images/distance.jpg'} alt="1m"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={process.env.PUBLIC_URL + 'images/waiting.gif'} alt="logo"/>   
                </Grid>
            </Grid>
        </Container>
    )
}

export default homePage