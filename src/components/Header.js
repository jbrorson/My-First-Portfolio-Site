import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;

  background: var(--mainDark);
`;

const NavLinks = styled.div`
  display: flex;
  width: 100%;
  /* flex-direction: row; */
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  color: var(--mainLight);
`;

// const Links = styled.div`
//   display: flex;
//   float: right;
//   margin-right: 20px;
//   list-style: none;
//   color: var(--mainLight);
//   align-items: center;
//   justify-content: space-between;
// `;

const LogoStyle = styled.span`
  float: left;
  margin-left: 20px;
  color: var(--mainLight);
`;
/* @media (max-width: 640px) {
    display: block;
  } */

export default class Navbar extends Component {
  render() {
    return (
      <Nav>
        <div>
          <LogoStyle />
          <NavLinks>
            <ul>
              {/* <Links> */}
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/weather" className="link">
                  Location
                </Link>
              </li>
              {/* <li>
            <Link to="/contact" className="link">
              Get in touch
            </Link>
          </li>
          <li>
            <Link to="latestwork" className="link">
              Latest Work
            </Link>
          </li> */}
              {/* </Links> */}
            </ul>
          </NavLinks>
        </div>
      </Nav>
    );
  }
}
