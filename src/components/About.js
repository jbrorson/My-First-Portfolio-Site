import React, { Component } from "react";
import Content from "./Content";
import styled from "styled-components";

const About = styled.div`
  display: block;
  justify-content: center;
  margin-top: 20vh;
  padding: 20px;
  text-align: center;
  font-family: "Ubuntu", sans - serif;
  color: ${props => props.theme.main};
`;

export default class ContentStyle extends Component {
  render() {
    return (
      <About>
        <Content />
      </About>
    );
  }
}
