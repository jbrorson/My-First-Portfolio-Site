import React from "react";
import styled from "styled-components";
import Navlinks from "./Navlinks";

const MyMobileNavbar = styled.nav`
  width: 50vw;
  background: ${props => props.theme.main};
  box-shadow: -2px 2px 2px ${props => props.theme.shadow};
  align-self: flex-end;

  transition: transform 1s;
  /* om navbar syns = true, annars = false. Går att ändra state till true*/
  transform: translateX(
    ${props => (props.displayMobileNavbar ? "0%" : "calc(100% + 10px)")}
  );

  .nav-links {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 40vh;
    list-style: none;
    font-family: "Ubuntu", sans-serif;
  }

  .link {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 20vw;
    padding: 10px 10px;
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

const MobileNavbar = props => {
  return (
    <MyMobileNavbar displayMobileNavbar={props.displayMobileNavbar}>
      <Navlinks isMobileLink={true} />
    </MyMobileNavbar>
  );
};

export default MobileNavbar;
