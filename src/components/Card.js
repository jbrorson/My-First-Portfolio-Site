import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  background: var(--mainWhite);
  color: var(--mainBlue);
  width: 50%;
  height: 40vh;
  margin: auto 0;
  padding: 0;
  display: inline-flex;
  position: relative;
  &:hover {
    background-color: var(--mainGrey);
  }
`;

const CardStyle = props => {
  return <Card>{props.title || "lorem ipsum"}</Card>;
};

export default CardStyle;
