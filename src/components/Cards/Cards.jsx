import React from "react";
import { Card, CardContent, Typography,Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cn from "classnames";

import styles from "./Cards.module.scss";

const Cards = ( {data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'miandry kely...'
    }

    return (
       <div className={styles.container}>
           <Grid container spacing={2} justify="center">
                <Grid item component={Card} md={3} className={cn(styles.Card, styles.Infected)}>
                    <CardContent>
                        <Typography color="secondary" gutterBottom>Infectés</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Nombre de cas positifs</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} md={3} className={cn(styles.Card, styles.Recovered)}>
                    <CardContent>
                        <Typography color="secondary" gutterBottom>Rétablis</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Nombre de cas rétablis</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} md={3} className={cn(styles.Card, styles.Death)}>
                    <CardContent>
                        <Typography color="secondary" gutterBottom>Morts</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Nombre de morts</Typography>
                    </CardContent>

                </Grid>
           </Grid>
       </div>
    );
}

export default Cards