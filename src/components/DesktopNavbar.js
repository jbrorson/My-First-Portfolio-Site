import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Navlinks from "./Navlinks";
import mobileIcon from "../images/menu.svg";

const MyDesktopNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.theme.main};
  color: var(--mainLight);
  font-family: "Ubuntu", sans-serif;
  height: 12vh;
  box-shadow: 0 2px 2px ${props => props.theme.shadow};

  .logo {
    display: flex; 
    /* position: fixed;  */
    /* left: 0; */
    height: 10vh;
    font-size: 2.8vh;
    color: ${props => props.theme.mainTextColor};
    align-items: center; 
    font-family: 'Sigmar One', cursive;
    /* text-shadow: 3px 3px 3px ${props => props.theme.shadow}; */
    /* text-transform: uppercase; */
    
  }

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    float: right;
    margin-right: 15px;
    align-items: center;
    width: 48vw;
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
    height: 12vh;
    padding: 0 10px;
    font-size: 2.25vh;
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
  width: 5vh;
  margin: 30px;
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
      <div className="logo">Josefine Brorson</div>
      <Navlinks />
      <MyMobileNavButton onClick={props.toggleMobileNavbar}>
        <img
          src={mobileIcon}
          alt="You are able to see this only in mobile view"
        />
      </MyMobileNavButton>
    </MyDesktopNavbar>
  );
};

export default DesktopNavbar;
