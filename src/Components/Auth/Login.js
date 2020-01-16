import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios"

class Login extends Component {
    state = {
        
          username: "",
          password: "",
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
            password: this.state.password
        }
        this.setState({ submitted: true });
        if(this.state.username && this.state.password ){
        axios
          .post("https://lambda-mud-test.herokuapp.com/api/login/", credentials)
          .then(res =>{
              localStorage.setItem("key", res.data.key);
              this.setState({
                username: '',
                password: '',
              });
              this.props.history.push(`/re`);
          })
      }
    }

  render() {
    return (
      <div>
        <div className="main">
          <p className="sign">
            {" "}
          </p>
          <form onSubmit={this.handleLogin}>
            <div>
              {this.state.submitted && !this.state.username && (
                <div className="help-block">Username is required</div>
              )}
              {this.props.error && (
                <div className="help-block">Invalid Credentials </div>
              )}
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
              {this.state.submitted && !this.state.password && (
                <div className="help-block">Password is required</div>
              )}
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="input"
                placeholder="Password"
              />
            </div>
            <button className="submit">Log in</button>
          </form>
          <div className="forgot">
            <a className="helpLink" href="/">
              Forgot Password?
            </a>
            <Link className="helpLink" to="/register">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
