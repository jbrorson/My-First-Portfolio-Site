import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.h3`
/* background-color: whitesmoke; */
/* height: 100vh;  */
color: var(--mainDark);
width: 90vw;
/* padding: 0 40px; */
margin: auto; 
padding: 20px;
border-radius: 5px; 
margin-bottom: 0; 
/* display: flex; 
justify-content: center; 
/* overflow: auto;  */
/* padding-bottom: 50px;  */
/* position: relative; */
/* min-height: 100vh;  */
`;

export default class Contentstyle extends Component {
	render() {
		return (
            <Content>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
				
			</Content>
		);
	}
}