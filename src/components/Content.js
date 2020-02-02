import React, { Component } from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  color: var(--mainLight);
  width: 50%;
  height: 100vh;
  overflow-wrap: wrap;
  /* margin: 0;
  padding: 0; */
  /* display: flex; */
  /* position: relative; */

  &:hover {
    background-color: var(--mainHover);
  }
  /* color: var(--mainDark);
width: 90vw;
display: flex; 
justify-content: flex-end;
margin: 0; 
padding: 0;
margin-bottom: 0;  */
`;

export default class ContentStyle extends Component {
  render() {
    return (
      <Content>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </h3>
      </Content>
    );
  }
}
