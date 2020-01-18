import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import {
  PageDiv,
  RegisterContainer,
  RegisterInputsContainer,
  Input,
  H1,
  P,
  Label,
  Button
} from "./registration-style.js";

import { Header, Icon, Modal, Form, Message } from "semantic-ui-react";

class Registration extends Component {
  state = {
    username: "",
    password1: "",
    password2: "",
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
      password1: this.state.password1,
      password2: this.state.password2
    };
    this.setState({ submitted: true });
    if (this.state.username && this.state.password1 && this.state.password2) {
      axios
        .post(
          "https://lambda-mud-test.herokuapp.com/api/registration/",
          credentials
        )
        .then(res => {
          localStorage.setItem("key", res.data.key);
          this.setState({
            username: "",
            password1: "",
            password2: ""
          });
          this.props.history.push(`/dash`);
        });
    }
  };

  render() {
    return (
        <PageDiv className="main">
          <p className="sign"> </p>
          <H1>REGISTER</H1>
          <Form onSubmit={this.handleLogin}>
            <RegisterContainer>
              <RegisterInputsContainer>
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
                    <div className="help-block">Username is required</div>
                  )}
                </div>

                <div>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password1"
                    value={this.state.password1}
                    onChange={this.handleChange}
                    className="input"
                    placeholder="Password1"
                  />

                  {this.state.submitted && !this.state.password1 && (
                    <div className="help-block">Password is required</div>
                  )}
                </div>

                <div>
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.handleChange}
                    className="input"
                    placeholder="Password2"
                  />

                  {this.state.submitted && !this.state.password2 && (
                    <div className="help-block">Confirm password is required</div>
                  )}
                </div>

                <div>
                <Button className="submit">Sign Up</Button>
                </div>

                <div className="login">
                  <Link className="helpLink" to="/login">
                    Login
                  </Link>
                </div>

              </RegisterInputsContainer>
            </RegisterContainer>
          </Form>
        </PageDiv>
    );
  }
}

export default Registration;
