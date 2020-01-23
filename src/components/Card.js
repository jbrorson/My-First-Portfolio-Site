import React from "react";
import styled from "styled-components";
// import JBimg_optimized from "/images/JBimg_optimized";

const projects = [
  {
    title: "Project 1",
    url: "https://github.com/jbrorson/React---Portfolio"
  }
];

const Card = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  font-family: "Ubuntu", sans-serif;
  background: var(--mainWhite);
  color: var(--shadowColor);
  width: 50%;
  height: 100vh;
  margin: auto 0;
  padding: 0;
  display: inline-flex;
  position: relative;
  &:hover {
    background-color: var(--mainGrey);
  }
  img {
    height: 300px;
    border-radius: 2%;
    margin: 20px;
    /* padding: 20px; */
    box-shadow: 10px 10px 5px 0px;
  }
`;

const CardStyle = props => {
  return (
    <Card>
      <img src="/images/JBimg_optimized.jpg" alt="" />
      {props.title || "lorem ipsum"}
    </Card>
  );
};

export default CardStyle;
