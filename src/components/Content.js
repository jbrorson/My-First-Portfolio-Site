import React, { Component } from "react";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 20vh;
  padding: 20px;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  color: ${props => props.theme.main};
`;

export default class ContentStyle extends Component {
  render() {
    return (
      <div>
        <Content>
          <h3>Hello and welcome to my portfolio website</h3>
          <br></br>
          <p>
            I am in first year of my education to become a Front-end Developer
          </p>
          <p>Learning React.js, CSS, Git and so on...</p>
          <p>
            In my sparetime I play soccer and enjoy haning out with my friends
            and my boyfriend
          </p>
          <br></br>
          <h4>PS. This page is still under progress ;)</h4>
        </Content>
      </div>
    );
  }
}
