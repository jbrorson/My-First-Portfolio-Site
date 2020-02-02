import React from "react";
import styled from "styled-components";
// import Content from "./components/Content";

// const information = [
//   {
//     title: "Project",
//     url: "https://github.com/jbrorson/React---Portfolio",
//   }
// ];

// const profile = [
//   {
//     icon: "img src={require('/images/JBimg_optimized.jpg')}"
//   }
// ];

const Card = styled.span`
  display: flex;
  font-family: "Ubuntu", sans-serif;
  color: var(--shadowColor);
  width: 50%;
  height: 100vh;
  /* position: wrap; */

  &:hover {
    background-color: var(--mainHover);
  }
  img {
    height: 300px;
    border-radius: 2%;
    margin: 20px;
    box-shadow: 5px 10px 5px 0px;
  }
  /* span #text {
    color: black;
  } */
`;

const CardStyle = props => {
  return (
    <Card>
      <img src="/images/JBimg_optimized.jpg" alt="" />
      {props.title} Come visit me!
      {props.skills}
    </Card>
  );
};

export default CardStyle;
