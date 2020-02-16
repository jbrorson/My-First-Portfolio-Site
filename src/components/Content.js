import React, { Component } from "react";
import styled from "styled-components";
//import Card from "./Card";

const Content = styled.div`
  margin-top: 20vh;
  padding: 20px;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  color: ${props => props.theme.main};
`;

// function Content() {
//   return (
//     <Content>
//       <div>Hello this is content about me</div>
//     </Content>
//   );
// }

export default class ContentStyle extends Component {
  render() {
    return (
      <Content>
        <h3>Hello this is content about me</h3>
        {/* <a href>https://github.com/jbrorson</a>
          <br></br>
          <a href>https://www.linkedin.com/in/josefine-brorson-b8a69a118/</a> */}
      </Content>
    );
  }
}
