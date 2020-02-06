import React, { Component } from "react";
import styled from "styled-components";

const Contact = styled.div`
  display: block;
  justify-content: center;
  margin-top: 20vh;
  padding: 20px;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  color: ${props => props.theme.main};
`;

export default class ContactStyle extends Component {
  render() {
    return (
      <div>
        <Contact>
          <h3>Get in touch</h3>
          <a href>https://github.com/jbrorson</a>
          <br></br>
          <a href>https://www.linkedin.com/in/josefine-brorson-b8a69a118/</a>
        </Contact>
      </div>
    );
  }
}
