import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './homePage.module.scss';
import { Container, Grid, Paper, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

AOS.init();

const homePage = () => {

    return (
        <Container maxWidth>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={8} md={6}>
                    <Paper elevation={0} className={styles.paper}>
                        <div data-aos="fade-right" data-aos-duration="2000">
                            <img src={process.env.PUBLIC_URL + 'images/covid.gif'} alt="covid" className={styles.covid}/>
                            <Typography variant="h3" color="secondary">
                                Qu'est-ce que le COVID-19?
                            </Typography>
                            <p className={styles.border}></p>
                            
                            <Typography variant="h5" color="textSecondary" >
                            La COVID-19 est la maladie causée par un nouveau coronavirus, le SARS-CoV-2. L’OMS a appris l’existence de ce nouveau virus le 31 décembre 2019 lorsqu’un foyer épidémique de cas de « pneumonie virale » a été notifié à Wuhan, en République populaire de Chine.
                            </Typography>
                        </div>
                        <div><br/></div>
                    </Paper>

                    <Paper elevation={0} className={styles.paper}>
                        <div data-aos="zoom-out-right" data-aos-duration="2000">
                            <img src={process.env.PUBLIC_URL + 'images/symptomes.jpg'} alt="covid" className={styles.media}/>
                            <Typography variant="h3" color="secondary">
                                Quels sont les symptômes de la COVID-19 ?
                            </Typography>
                            <p className={styles.border}></p>
                            
                            <Typography variant="h6" color="textSecondary" >
                            La COVID-19 est la maladie causée par un nouveau coronavirus, le SARS-CoV-2. L’OMS a appris l’existence de ce nouveau virus le 31 décembre 2019 lorsqu’un foyer épidémique de cas de « pneumonie virale » a été notifié à Wuhan, en République populaire de Chine.
                            </Typography>
                            <div className={styles.root}>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography variant="h6" color="secondary">Voir les symptômes</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Les symptômes les plus courants sont les suivants :
                                    <br/>
                                    - Fièvre
                                    - Toux sèche
                                    - Fatigue
                                    <br/>
                                    D’autres symptômes moins courants peuvent toucher certains patients :
                                    <br/>
                                    - Perte du goût et de l’odorat,
                                    - Congestion nasale,
                                    - Conjonctivite (yeux rouges),
                                    - Mal de gorge,
                                    - Maux de tête,
                                    - Douleurs musculaires ou articulaires,
                                    - Différents types d’éruption cutanée,
                                    - Nausées ou vomissements,
                                    - Diarrhée,
                                    - Frissons ou vertiges.
                                    <br/>

                                    Les symptômes de la forme grave de COVID-19 sont les suivants :
                                    <br/>
                                    - Essoufflement,
                                    - Perte d’appétit,
                                    - État confusionnel,
                                    - Douleurs ou sensation d’oppression persistantes dans la poitrine,
                                    - Température élevée (supérieure à 38° C).
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </div>
                            <br/>
                            <Button variant="contained" color="secondary" href="https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19#:~:text=symptomes">
                                Voir l'article
                            </Button>
                        </div>
                        <div><br/></div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Paper elevation={0} className={styles.paper}>
                        <div data-aos="zoom-in-left" data-aos-duration="2000">
                            <img src={process.env.PUBLIC_URL + 'images/corpsmedical.png'} alt="traitement" className={styles.media}/>
                            <Typography variant="h3" color="secondary">
                                Que faire en cas de symptômes de la COVID-19 ?
                            </Typography>
                            <p className={styles.border}></p>
                            <Typography variant="h6" color="textSecondary" component="p">
                            Si vous présentez des symptômes évocateurs de la COVID-19, appelez votre prestataire de soins ou la ligne d’assistance téléphonique afin d’obtenir des instructions et de savoir quand et où vous faire tester, restez chez vous pendant 14 jours, à l’écart des autres et surveillez votre état de santé.
                                <br/>
                            Si vous ressentez un essoufflement, des douleurs ou une sensation d’oppression dans la poitrine, consultez immédiatement un médecin. Appelez au préalable votre prestataire de soins ou la ligne d’assistance téléphonique pour savoir où se trouve l’établissement de santé approprié.
                                <br/>
                            Si vous avez de la fièvre et vivez dans une région où le paludisme ou la dengue sévit, consultez un médecin.
                            </Typography>
                                <br/>
                            <Button variant="contained" color="secondary" href="https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters?gclid=CjwKCAiAoOz-BRBdEiwAyuvA66gQC7Z-keDb2FRyN-UV-fXHpvp-NtvI8qj3RVWSryXYJeVZPYwxKxoCCYEQAvD_BwE#recovery">
                                En savoir plus
                            </Button>
                            
                        </div>
                        <div><br/></div>
                    </Paper> 
                    <Paper elevation={0} className={styles.video}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6b2LB6nCmBs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className={styles.mediavideo}></iframe>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container className={styles.container}>
                <Grid item xs={12}>
                        <Paper elevation={0} className={styles.paper}>
                            <div data-aos="zoom-out-up" data-aos-duration="2000">
                                <img src={process.env.PUBLIC_URL + 'images/recovered.jpg'} alt="fighting corona"/>
                                <Typography variant="h3" color="secondary">
                                    Comment se protéger et protéger les autres si on ne sait pas qui est infecté ?
                                </Typography>
                                <p className={styles.border}></p>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={4} md={3}>
                                        <img src={process.env.PUBLIC_URL + 'images/satyhome.gif'} alt="stay at home" className={styles.gestes}/>
                                        <Typography variant="h6" color="textSecondary" component="p">
                                            # Restez chez vous !!
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={3}>
                                        <img src={process.env.PUBLIC_URL + 'images/donttouch.gif'} alt="respectez la distance 1m" className={styles.gestes}/>
                                        <Typography variant="h6" color="textSecondary" component="p">
                                            # Ne touchez pas votre nez
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={3}>
                                        <img src={process.env.PUBLIC_URL + 'images/handswash.gif'} alt="lavez régulièrement les mains" className={styles.gestes}/>
                                        <Typography variant="h6" color="textSecondary" component="p">
                                            # lavez vos mains régulièrement
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={3}>
                                        <img src={process.env.PUBLIC_URL + 'images/keepdistance.gif'} alt="ne touchez pas vos nez" className={styles.gestes}/>
                                        <Typography variant="h6" color="textSecondary" component="p">
                                            # Respectez la distance d' 1m
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={3}>
                                        <img src={process.env.PUBLIC_URL + 'images/covercough.gif'} alt="éternuement" className={styles.gestes}/>
                                        <Typography variant="h6" color="textSecondary" component="p">
                                            # Utilisez votre coude pour éternuer
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={3}>
                                        <img src={process.env.PUBLIC_URL + 'images/salutation.jpg'} alt="ne serrez pas la main" className={styles.gestes}/>
                                        <Typography variant="h6" color="textSecondary" component="p">
                                            # Ne serrez pas la main
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={3}>
                                        <img src={process.env.PUBLIC_URL + 'images/wearmask.gif'} alt="wear mask" className={styles.gestes}/>
                                        <Typography variant="h6" color="textSecondary" component="p">
                                            # Portez votre masque
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={3}>
                                        <img src={process.env.PUBLIC_URL + 'images/covidtest.jpg'} alt="faites-vous tester" className={styles.gestes}/>
                                        <Typography variant="h6" color="textSecondary" component="p">
                                            # Faites-vous tester
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Paper> 
                </Grid>
            </Grid>
                <br/>
        </Container>
    )
}

export default homePage