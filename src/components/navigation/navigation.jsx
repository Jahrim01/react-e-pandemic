import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.module.scss';

const Navigation = () => {

        return (

            <Navbar fixed="top" collapseOnSelect expand="md">
                <Navbar.Brand><img src={process.env.PUBLIC_URL + 'images/e_pandemics.png'} alt="logo"/><span style={{color: 'crimson'}}>E-pandemics</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <a href="#">| ANDRIANALIZANDRY Mirija Valisoa | ESIIA 5 | N°19 |</a>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="/statistics">Statistiques</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        
        );
}

export default Navigation