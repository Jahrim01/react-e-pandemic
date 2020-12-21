import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Container } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from "classnames";

import styles from './Cards.module.scss';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return (
      <div className={styles.loadbox}>
        <img src={process.env.PUBLIC_URL + '/images/aqua.gif'} alt="loading" className={styles.loading}/>
      </div>
    )
  }

  return (
    <Container>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
            <CardMedia
              component="img"
              alt="Infected"
              image={process.env.PUBLIC_URL + 'images/infected.png'}
              title="Infected"
              className={styles.imgcard}
            />
          <CardContent>
            <Typography color="secondary" gutterBottom>Infectés</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date().toDateString()}</Typography>
            <Typography variant="body2"> Nombre de cas positifs à la Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
            <CardMedia
              component="img"
              alt="healed"
              image={process.env.PUBLIC_URL + 'images/healthcare.png'}
              title="healed"
              className={styles.imgcard}
            />
          <CardContent>
            <Typography color="secondary" gutterBottom>Rétablis</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date().toDateString()}</Typography>
            <Typography variant="body2">Nombre de cas rétablis de la Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
            <CardMedia
              component="img"
              alt="funeral"
              image={process.env.PUBLIC_URL + 'images/deaths.png'}
              title="funeral"
              className={styles.imgcard}
            />
          <CardContent>
            <Typography color="secondary" gutterBottom>Décès</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date().toDateString()}</Typography>
            <Typography variant="body2">Nombre de morts de la Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;