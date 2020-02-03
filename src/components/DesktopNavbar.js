import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Navlinks from "./Navlinks";
import mobileIcon from "../images/menu.svg";

const MyDesktopNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  background: ${props => props.theme.main};
  color: var(--mainLight);
  font-family: "Ubuntu", sans-serif;
  height: 15vh;
  box-shadow: 0 5px 5px ${props => props.theme.shadow};

  .logo {
    /* font-size: 1.5rem; */
    font-weight: bold;
    font-family: "Ubuntu", sans-serif;
    text-shadow: 3px 3px 3px ${props => props.theme.shadow};
    text-transform: uppercase;
  }

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 40vw;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .link {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 15vh;
    padding: 0 10px;
    color: ${props => props.theme.mainTextColor};
    text-decoration: none;
    border-radius: 10px;
    text-transform: uppercase;

    &:focus {
      background: ${props => props.theme.shadow};
      outline: none;
    }
  }
`;

const MyMobileNavButton = styled.button`
  background: transparent;
  height: 8vh;
  width: 8vh;
  position: relative;
  border: none;
  /* color: ${props => props.theme.mainTextColor}; */
  display: none; 

  @media screen and (max-width: 768px) {
      display: block;
  }
`;

const DesktopNavbar = props => {
  return (
    <MyDesktopNavbar>
      <div className="logo">Josefine B</div>
      <Navlinks />
      <MyMobileNavButton onClick={props.toggleMobileNavbar}>
        <img
          src={mobileIcon}
          alt="You are able to see this only i mobile view"
        />
      </MyMobileNavButton>
    </MyDesktopNavbar>
  );
};

export default DesktopNavbar;
