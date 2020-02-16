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

const LogoStyle = styled.span`
  float: left;
  margin-left: 20px;
  color: var(--mainLight);
`;

export default class Navbar extends Component {
  render() {
    return (
      <Nav>
        <div>
          <LogoStyle />
          <NavLinks>
            <ul>
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
            </ul>
          </NavLinks>
        </div>
      </Nav>
    );
  }
}
