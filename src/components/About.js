import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/about">
        <AboutDiv>
          <Content />
        </AboutDiv>
      </Link>
    );
  }
}
