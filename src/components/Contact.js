import React, { Component } from "react";
import styled from "styled-components";

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20vh;
  margin-right: 0;
  padding: 20px;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  color: ${props => props.theme.main};
`;

const ContactLinksUl = styled.ul`
  display: flex;
  width: 50%;
  padding-left: 0;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  font-size: 2rem;
`;

const ContactLinksLi = styled.li`
  width: 2rem;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  text-decoration: none;
`;

export default class ContactStyle extends Component {
  render() {
    return (
      <Contact>
        Get in touch with me!
        <ContactLinksUl>
          <ul>
            <ContactLinksLi>
              <li>
                <a href="https://github.com/jbrorson">
                  <img src="/images/github.png" alt="Go visit my github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/josefine-brorson-b8a69a118/">
                  <img
                    src="/images/linkedin.svg"
                    alt="Check out my linkedin profile"
                  />
                </a>
              </li>
            </ContactLinksLi>
          </ul>
        </ContactLinksUl>
      </Contact>
    );
  }
}
