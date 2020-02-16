import React, { Component } from "react";
//import { Link } from "react-router-dom";
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
        {/* <Link to="/contact"> */}
        <Contact>
          <h3>Get in touch</h3>
          <h5>https://github.com/jbrorson</h5>
          <br></br>
          <h5>https://www.linkedin.com/in/josefine-brorson-b8a69a118/</h5>
        </Contact>
        {/* </Link> */}
      </div>
    );
  }
}
