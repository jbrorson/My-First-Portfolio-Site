import React, { Component } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import styled from "styled-components";

const MyNavbar = styled.div`
  display: flex;
  width: 100vw;
  flex-flow: column nowrap;
  justify-content: flex-start;
  /* position: relative; */
  /* top: 0; */
  /* margin-bottom: 20px; */
`;

class Navbar extends Component {
  state = {
    displayMobileNavbar: false
  };

  conponentDidMount = () => {
    window.addEventListener("resize", this.checkAndAutoHideMobileNavbar);
  };

  conponentWillUnmount = () => {
    window.removeEventListener("resize", this.checkAndAutoHideMobileNavbar);
  };

  toggleMobileNavbar = () => {
    this.setState(prevState => {
      return { displayMobileNavbar: !prevState.displayMobileNavbar };
    });
  };

  checkAndAutoHideMobileNavbar = () => {
    const screenWidth = window.innerWidth;

    if (this.state.displayMobileNavbar && screenWidth > 768) {
      this.setState({
        displayMobileNavbar: false
      });
    }
  };

  render() {
    return (
      <MyNavbar>
        <DesktopNavbar toggleMobileNavbar={this.toggleMobileNavbar} />
        <MobileNavbar displayMobileNavbar={this.state.displayMobileNavbar} />
      </MyNavbar>
    );
  }
}

export default Navbar;
