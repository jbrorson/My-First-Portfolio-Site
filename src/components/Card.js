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
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  margin-top: 12.5vh;
  font-family: "Ubuntu", sans-serif;
  color: var(--shadowColor);

  &:hover {
    background-color: ${props => props.theme.mainHover};
  }
  img {
    height: 300px;
    /* border-radius: 50%; */
    margin: 20px;
    /* box-shadow: 5px 10px 5px 0px ${props => props.theme.shadow}; */
  }
`;

const CardStyle = props => {
  return (
    <Card>
      <img src="/images/JBimg_optimized.jpg" alt="Profile" />
      {props.title} Hi, I'm Josefine!
      {props.skills}
    </Card>
  );
};

export default CardStyle;
