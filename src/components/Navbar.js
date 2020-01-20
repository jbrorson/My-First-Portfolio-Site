import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Nav = styled.nav`
display: flex; 
justify-content: flex-end;  
text-transform: uppercase;  
height: 12vh; 
background: var(--mainDark);


.nav-links {
display: flex;
justify-content: space-around;
align-items: center;
list-style: none; 
width: 55vw;
}

.link {
text-decoration: none; 
color: var(--mainWhite);
}

@media (max-width: 640px) {
        display: block;
        }

`;


export default class Navbar extends Component {
	render() {
		return (
            <Nav>
                {/* <ul className="nav-logo">Josefine</ul> */}
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="link" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link" >About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link" >Get in touch</Link>
                    </li>
                    <li>
                        <Link to="latestwork" className="link" >Latest Work</Link>
                    </li>
                </ul>

                
            </Nav>
		);
	}
}
 