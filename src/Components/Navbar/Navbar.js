import React from "react";
import {
  NavBar,
  ButtonGroup,
  ButtonLink,
  NavBarButtonsContainer
} from "./navbar-style.js";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

class Navbar extends React.Component {
  handleAnimationChange = animation => () =>
    this.setState(prevState => ({ animation, visible: !prevState.visible }));

  render() {
    return (
      <NavBar className="Navbar">
        <Image
          className="lightning"
          src="https://img.imageupload.net/2020/07/18/lightningStrike.gif"
          as="a"
          size="small"
          id="leftNavImage"
        />

        <ButtonLink
          as={Link}
          // className="registerButton"
          name="about"
          to="/about"
        >
          SONIC THE LAMBDOG
        </ButtonLink>

        <ButtonGroup className="navbarContainer">
          <NavBarButtonsContainer>
            <Button
              as={Link}
              className="registerButton"
              name="login"
              to="/login"
            >
              Sign in
            </Button>

            <Button
              as={Link}
              className="registerButton"
              name="register"
              to="/register"
            >
              Register
            </Button>
          </NavBarButtonsContainer>
        </ButtonGroup>
      </NavBar>
    );
  }
}

export default Navbar;
