import React from "react";
import styled from "styled-components";

const Card = styled.span`
  height: 100vh;
  width: 100%;
  margin: 2rem;
  padding-top: 2rem;
  display: flex;
  justify-content: flex-start;
  margin-top: 12.5vh;
  font-family: "Ubuntu", sans-serif;
  color: ${props => props.theme.main};

  &:hover {
    background-color: ${props => props.theme.mainHover};
  }
  img {
    height: 300px;
    margin-right: 3rem;
  }
`;

const CardStyle = props => {
  return (
    <Card>
      <img src="/images/JBimg_optimized.jpg" alt="Profile" />
      {props.title} Hi, I'm Josefine! I'm a front end developer based in
      Stockholm, Sweden.
    </Card>
  );
};

export default CardStyle;
