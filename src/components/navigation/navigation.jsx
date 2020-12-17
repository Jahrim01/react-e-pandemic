import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.module.scss';

const Navigation = () => {

        return (

            <Navbar fixed="top" collapseOnSelect expand="md" className="border-bottom-3 border-black">
                <Navbar.Brand><img src={process.env.PUBLIC_URL + 'e_pandemics.png'} alt="logo"/><span style={{color: 'crimson'}}>E-pandemics</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link className="sizing" href="/">Accueil</Nav.Link>
                    <Nav.Link className="sizing" href="/statistics">Statistiques</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        
        );
}

export default Navigation