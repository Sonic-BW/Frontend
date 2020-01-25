import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import {
  PageDiv, 
  MapContainer,
  PlayerInfoContainer,
  RoomInfoContainer,
  Input,
  Label,
  H1
} from "./dashboard-style";
import { Image, Button, Form } from "semantic-ui-react";

class Dashboard extends Component {
  state = {
    username: "",
    password: "",
    submitted: false,
    room_id:"",
    n_to: none,
    s_to: none,
    e_to: none,
    w_to: none
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
    };
    this.setState({ submitted: true });
    if (this.state.username && this.state.password) {
      axios
        .post("https://sonicthelambhog.herokuapp.com/api/login/", credentials)
        .then(res => {
          localStorage.setItem("key", res.data.key);
          this.setState({
            username: "",
            password: ""
          });
          this.props.history.push(`/dashboard`);
        });
    }
  };

  render() {
    return (
      <div className="dashboardComponent">
        <PageDiv className="main">
          <p className="dash"> </p>
          <H1>Dashboard</H1>

          <MapContainer>Map Here</MapContainer>
          <RoomInfoContainer>{this.state.room_id} Room Info Here</RoomInfoContainer>
          <PlayerInfoContainer>{this.state.username} Player Info Here</PlayerInfoContainer>

        </PageDiv>
      </div>
    );
  }
}

export default Dashboard;
