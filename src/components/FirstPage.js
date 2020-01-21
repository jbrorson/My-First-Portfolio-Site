import React from "react";
import styled from "styled-components";

const FirstPage = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-size: 2em;
  color: black;
  margin: auto;
  /* padding: auto 0; */
`;

const Pagestyle = props => {
  return <FirstPage>{props.message}</FirstPage>;
};

export default Pagestyle;
