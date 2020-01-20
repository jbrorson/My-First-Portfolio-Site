import React, { Component } from 'react'; 
import styled from 'styled-components';

const Card = styled.div`
   
    border-radius: 2px; 
    display: flex; 
    /* flex-direction: column;  */
    justify-content: center;
    align-items: center;
	background: var(--mainWhite);
	color: var(--mainDark);
	width: 50%; 
	height: 40vh; 
	margin: auto 0;  
	padding: 0; 
	display: inline-flex; 
	position: relative;
`;

export default class Cardstyle extends Component {
	render() {
		return (
            <Card>lorem ipsum</Card>          
		);
	}
}

