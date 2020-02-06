import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 10vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  padding: 25px 0;
  font-family: "Ubuntu", sans-serif;
  font-size: 13px;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.main};
  color: ${props => props.theme.mainTextColor};
`;

function Footer() {
  return (
    <FooterContainer>
      <div>
        &copy;{new Date().getFullYear()} Josefines portfolio - All Rights
        Reserved
      </div>
    </FooterContainer>
  );
}

export default Footer;
