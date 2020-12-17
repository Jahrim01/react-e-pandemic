import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';

import styles from './Cards.module.scss';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infectés"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Nombre de cas positifs au COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Rétablis"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Nombre de cas guéris du COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Morts"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Nombre de mort du COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;