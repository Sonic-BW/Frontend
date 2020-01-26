import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import {
  PageDiv,
  LoginContainer,
  LoginInputsContainer,
  Input,
  Label,
  H1
  // Button
} from "./login-style.js";
import { Image, Button, Form } from "semantic-ui-react";

class Login extends Component {
  state = {
    username: "",
    password: "",
    id: "",
    submitted: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password,
      id: this.state.id
    };
    this.setState({ submitted: true });
    if (this.state.username && this.state.password) {
      axios
        .post("https://sonicthelambhog.herokuapp.com/api/login/", credentials)
        .then(res => {
          console.log(res.data)
          localStorage.setItem("key", res.data.key);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("name", res.data.id);
          this.setState({
            username: "",
            password: "",
            id: ""
          });
          this.props.history.push(`/dashboard`, credentials);
        });
    }
  };

  render() {
    return (
      <div className="loginComponent">
        <PageDiv className="main">
          <p className="sign"> </p>
          <H1>SIGN IN</H1>
          <Form onSubmit={this.handleLogin}>
            <LoginContainer>
              <LoginInputsContainer>
                <Form.Field>
                  <div>
                    {this.props.error && (
                      <div className="help-block"> Invalid Credentials </div>
                    )}

                    <Label>Username</Label>

                    <Input
                      type="text"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      className="input"
                      placeholder="User Name"
                    />

                    {this.state.submitted && !this.state.username && (
                      <div className="help-block"> Username is required</div>
                    )}
                  </div>
                </Form.Field>

                <Form.Field>
                  <div>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      className="input"
                      placeholder="Password"
                    />

                    {this.state.submitted && !this.state.password && (
                      <div className="help-block"> Password is required</div>
                    )}
                  </div>
                </Form.Field>
              </LoginInputsContainer>

              <Button class="ui fluid button" className="submit" type="submit">
                Log in
              </Button>

              <Image
                // onClick={this.toggleVisibility}
                src="https://www.imageupload.net/upload-image/2020/01/18/login-gif.gif"
                as="a"
                size="large"
                // href="/login"
                id="loginImage"
              />

              <div className="forgot">
                <Link className="helpLink" href="/">
                  Forgot Password?
                </Link>
              </div>
            </LoginContainer>
          </Form>
        </PageDiv>
      </div>
    );
  }
}

export default Login;
