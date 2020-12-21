import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Typed from 'react-typed';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navigation.module.scss';

const Navigation = () => {

        return (

            <Navbar fixed="top" collapseOnSelect expand="md">
                <Navbar.Brand><img src={process.env.PUBLIC_URL + 'images/e_pandemics.png'} alt="logo"/><span style={{color: 'crimson'}}>E-pandemics</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <Typed
                        strings={[
                            '✊ Together against the Covid19 ✊',
                            'Take care 👨‍⚕️',
                            'Be blessed 👼']}
                        typeSpeed={80}
                        backSpeed={50}
                        className={styles.typer}
                        loop />
                    </Nav>
                    <Nav>
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="/Statistics">Statistiques</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        
        );
}

export default Navigation