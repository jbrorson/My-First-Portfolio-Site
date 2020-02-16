import React, { Component } from "react";
import Content from "./Content";
import styled from "styled-components";

const AboutDiv = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
`;

export default class About extends Component {
  render() {
    return (
      <AboutDiv>
        <Content />
      </AboutDiv>
    );
  }
}
