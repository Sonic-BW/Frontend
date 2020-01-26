import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import {
  PageDiv,
  SplitContainer,
  MapContainer,
  RightContainer,
  InfoContainer,
  PlayerInfoContainer,
  RoomInfoContainer,
  MovementHeaderContainer,
  MovementContainer,
  Input,
  Label,
  P,
  H1
} from "./dashboard-style";
import { Image, Button, Form, Icon, Container } from "semantic-ui-react";

class Dashboard extends Component {
  state = {
    id: "",
    username: "",
    user: "",
    uuid: "",
    currentRoom: "",
    submitted: false,
    room_id: "",
    title: "",
    description: "",
    n_to: "",
    s_to: "",
    e_to: "",
    w_to: "",
    message: ""
  };

  componentDidMount() {
    console.log("This is username:", this.state.username);
    console.log("This is password:", this.state.password);
    console.log("This is id:", this.state.id);

    axios
    .get(`https://sonicthelambhog.herokuapp.com/api/users/${this.state.id}/`)
    .then(response => {
      this.setState({ 
        id: response.data.id,
        username: response.data.username
      });
      console.log(response.data);
      console.log("This is updated user state:", this.state);
    })
    .catch(error => {
      console.log(error);
    });
    
    // Gets user data -- id, username//

    axios
      .get(`https://sonicthelambhog.herokuapp.com/api/users/${this.state.id}/`)
      .then(response => {
        this.setState({ 
          id: response.data.id,
          username: response.data.username
        });
        console.log(response.data);
        console.log("This is updated user state:", this.state);
      })
      .catch(error => {
        console.log(error);
      });

    // Gets player data -- user, uuid, currentRoom //
    axios
      .get(`https://sonicthelambhog.herokuapp.com/api/players/${this.state.id}/`)
      .then(response => {
        this.setState({
          user: response.data.user,
          uuid: response.data.uuid,
          currentRoom: response.data.currentRoom
        });
        console.log("This is updated player state:", this.state);
      })
      .catch(error => {
        console.log(error);
      });

    // Gets current room data --  //
    axios
      .get(`https://sonicthelambhog.herokuapp.com/api/rooms/${this.state.currentRoom}/`)
      .then(response => {
        this.setState({ 
          currentRoom: response.data.id,
          title: response.data.title,
          description: response.data.description,
        });
        console.log("This updated current room state:", this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  //Trying to make buttons green or red depending on if you could move there
  // componentDidUpdate() {
  //   if(this.n_to === 0){
  //     .northButton.color = red;
  //   }

  // }



  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClickGoNorth = e => {
    e.preventDefault();
    console.log("Old current room!", this.state.currentRoom);

    if (this.state.n_to === 0) {
      this.setState({ message: "There is no room to move to." });
    } else {
      this.setState({ currentRoom: this.state.n_to });

      axios.put(`https://sonicthelambhog.herokuapp.com/api/players/${this.state.id}/currentRoom/, ${this.state.currentRoom}/`)
      .then( response => {
        console.log("Successfully updated current room!", this.state.currentRoom);
        console.log("This is new North state", this.state);
      })

      axios
        .get(`https://sonicthelambhog.herokuapp.com/api/rooms/${this.state.currentRoom}/`)
        .then(response => {
          this.setState({ ...this.state, ...response.data });
          this.setState({ message: "You moved north." });
          console.log("This is new North state", this.state);
        });
    }
  };

  onClickGoSouth = e => {
    e.preventDefault();

    if (this.state.s_to === 0) {
      this.setState({ message: "There is no room to move to." });
    } else {
      this.setState({ currentRoom: this.state.s_to });

      axios
        .get(`https://sonicthelambhog.herokuapp.com/api/rooms/742/`)
        .then(response => {
          this.setState({ ...this.state, ...response.data });
          this.setState({ message: "You moved south." });
          console.log("This is new South state", this.state);
        });
    }
  };

  onClickGoEast = e => {
    e.preventDefault();

    if (this.state.e_to === 0) {
      this.setState({ message: "There is no room to move to." });
    } else {
      this.setState({ currentRoom: this.state.e_to });

      axios
        .get(`https://sonicthelambhog.herokuapp.com/api/rooms/742/`)
        .then(response => {
          this.setState({ ...this.state, ...response.data });
          this.setState({ message: "You moved east." });
          console.log("This is new East state", this.state);
        });
    }
  };

  onClickGoWest = e => {
    e.preventDefault();

    if (this.state.w_to === 0) {
      this.setState({ message: "There is no room to move to." });
    } else {
      this.setState({ currentRoom: this.state.w_to });

      axios
        .get(`https://sonicthelambhog.herokuapp.com/api/rooms/742/`)
        .then(response => {
          this.setState({ ...this.state, ...response.data });
          this.setState({ message: "You moved west." });
          console.log("This is new West state", this.state);
        });
    }
  };

  render() {
    return (
      <div className="dashboardComponent">
        <PageDiv className="main">
          <p className="dash"> </p>
          <H1>Dashboard</H1>

          <SplitContainer>
            <MapContainer>
              <H1>Map:</H1>
              <Image
                // onClick={this.toggleVisibility}
                src="https://www.imageupload.net/upload-image/2020/01/26/4-1024x655.jpg"
                as="a"
                size="large"
                // href="/login"
                id="mapImage"
              />
            </MapContainer>

            <RightContainer>
              <InfoContainer>
                <RoomInfoContainer>
                  <H1>Room Stats:</H1>
                  <P>You are in room (currentRoom):</P>
                  <P>{this.state.currentRoom}</P>
                  <P>You are currently in (Title):</P>
                  <P>{this.state.title}</P>
                  <P>Description:</P>
                  <P>{this.state.description}</P>
                </RoomInfoContainer>

                <PlayerInfoContainer>
                  <H1>Players Stats:</H1>
                  <P>Username: {this.state.username}</P>
                  <P>Message: {this.state.message}</P>
                </PlayerInfoContainer>
              </InfoContainer>

              <MovementHeaderContainer>
                <H1>Player Movement Controls:</H1>
                <MovementContainer>
                  <Button className="northButton" onClick={this.onClickGoNorth}>
                    <Icon name="angle double up"></Icon>
                  </Button>
                  <Button className="southButton" onClick={this.onClickGoSouth}>
                    <Icon name="angle double down"></Icon>
                  </Button>
                  <Button className="westButton" onClick={this.onClickGoEast}>
                    <Icon name="angle double left"></Icon>
                  </Button>
                  <Button className="eastButton" onClick={this.onClickGoWest}>
                    <Icon name="angle double right"></Icon>
                  </Button>
                </MovementContainer>
              </MovementHeaderContainer>
            </RightContainer>
          </SplitContainer>
        </PageDiv>
      </div>
    );
  }
}

export default Dashboard;
