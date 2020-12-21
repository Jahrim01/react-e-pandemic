import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.module.scss';

const Footer = () => {

  return (
    <Navbar collapseOnSelect expand="md">
          <Navbar.Brand><img src={process.env.PUBLIC_URL + 'iconvirus.png'} alt="logo"/></Navbar.Brand>
              <Nav className="mr-auto ml-auto">
                  <a href="#Mirija">© 2020 Copyright | Mirija</a>
              </Nav>
              <Nav>
                  <img src={process.env.PUBLIC_URL + 'iconvirus.png'} alt="logo"/>
              </Nav>
    </Navbar>
  );
}

export default Footer