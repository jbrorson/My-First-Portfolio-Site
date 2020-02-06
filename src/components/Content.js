import React from "react";
import styled from "styled-components";
//import Card from "./Card";

const contentStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-family: "Ubuntu", sans-serif;
  color: ${props => props.theme.mainHover};
`;

function Content() {
  return (
    <contentStyle>
      <div>Hello this is content about me</div>
    </contentStyle>
  );
}

export default Content;
