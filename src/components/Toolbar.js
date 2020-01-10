import React, { Component } from 'react';
import styled from 'styled-components';

// const Toolbar = (props) => (
//     <header className={classes.Toolbar}>
//         <div></div>
//             <nav>
//                 <ul>...</ul>
//         </nav>
// </header>
// ); 
const Nav = styled.nav`
height: 56px; 
width: 100%; 
background-color: rgb(4, 1, 34);
color: white;
`;

export default class Navbar extends Component {
	render() {
		return (
            <Nav>
            About
            Contact
            Work
            </Nav>
		);
	}
}


// const toolbar = (props) => (
//     <header className={classes.Toolbar}>
//         <div>MENU</div>
//         <nav>
//             <ul>...</ul>
//         </nav>
//     </header>
// );

// export default toolbar; 