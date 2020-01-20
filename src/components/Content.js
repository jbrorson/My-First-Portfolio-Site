import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.span`
/* background-color: whitesmoke; */
/* height: 100vh;  */
color: var(--mainDark);
width: 90vw;
display: flex; 
justify-content: flex-end;
/* padding: 0 40px; */
margin: 0; 
padding: 0;
/* border-radius: 5px;  */
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