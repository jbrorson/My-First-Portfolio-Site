import React, { Component } from 'react'; 
import styled from 'styled-components';
// import './App.css';



// function Card(props) {
// 	return(
// 		<div className="CardInfo">
// 			<h3>{props.title}</h3>
// 			<p>{props.message}</p>
// 			<button>Click here</button>
// 		</div>
// 	);
// }

// export default Card;

const Card = styled.div`
	/* height: 300px; 
    width: 300px;  */
    background: white; 
    border-radius: 5px; 
    display: flex; 
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;

	background: var(--mainWhite);
	color: var(--mainDark);
	width: 25vw; 
	height: 30vh; 
	margin: auto 20px;  
	padding: 0; 
	margin-bottom: 20px;  
	display: inline-flex; 
	align-items: center; 
	justify-items: center;
	justify-content: space-evenly;
	border-bottom: var(--mainDark) solid 2px; 
	position: relative;

p {
	text-align: center; 
}
	
`;

export default class Cardstyle extends Component {
	render() {
		return (
            <Card>lorem ipsum</Card>          
		);
	}
}

