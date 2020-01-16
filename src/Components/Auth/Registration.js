import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios"


class Registration extends Component {
  state = {
    username: "",
    password1: "",
    password2:"",
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
      password2: this.state.password2,
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
            password2:""
          });
          this.props.history.push(`/dash`);
        });
    }
  };

  render() {
    return (
      <div>
        <div className="main">
          <p className="sign"> </p>
          <form onSubmit={this.handleLogin}>
            <div>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                className="input"
                placeholder="User Name"
              />
            </div>
            <div>
              {this.state.submitted && !this.state.password1 && (
                <div className="help-block">Password is required</div>
              )}
              <input
                type="password"
                name="password1"
                value={this.state.password1}
                onChange={this.handleChange}
                className="input"
                placeholder="Password1"
              />
            </div>
            <div>
              {this.state.submitted && !this.state.password2 && (
                <div className="help-block">Password is required</div>
              )}
              <input
                type="password"
                name="password2"
                value={this.state.password2}
                onChange={this.handleChange}
                className="input"
                placeholder="Password2"
              />
            </div>
            <button className="submit">Sign Up</button>
          </form>
          <div className="login">
            
            <Link className="helpLink" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
