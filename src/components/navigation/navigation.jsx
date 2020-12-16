import React from 'react';
import Nav from './Nav.js';
import NavItem from './NavItem.js';

const Navigation = () => {

    return (
        <div className="divide-y divide-gray-100 bg-gray-600">
            <Nav>
                <NavItem href="/">Accueil</NavItem>
                <NavItem href="/statistics">Statistique</NavItem>
            </Nav>
        </div>
        
    )

}

export default Navigation