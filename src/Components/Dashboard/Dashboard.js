import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import {
  PageDiv,
  SplitContainer,
  MapContainer,
  RowContainer,
  NorthMapContainer,
  SouthMapContainer,
  WestMapContainer,
  EastMapContainer,
  CenterMapContainer,
  DummyMapContainer,
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
import {
  Image,
  Message,
  Button,
  Transition,
  Icon,
  Container
} from "semantic-ui-react";

const transitions = [
  "jiggle",
  "flash",
  "shake",
  "pulse",
  "tada",
  "bounce",
  "glow"
];

const options = transitions.map(name => ({
  key: name,
  text: name,
  value: name
}));

class Dashboard extends Component {
  state = {
    visible: true,
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
    message: null,
    players: []
  };

  toggleVisibility = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  updatePlayer = e => {
    // Gets id, username and
    axios
      .get("https://sonicthelambhog.herokuapp.com/api/adv/init", {
        headers: { Authorization: "Token " + localStorage.getItem("Token") }
      })
      .then(res => {
        console.log("This is localStorage:", res.data);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("username", res.data.name);
        localStorage.setItem("currentRoom", res.data.currentRoom);

        this.setState({
          id: res.data.id,
          username: res.data.name,
          currentRoom: res.data.currentRoom,
          players: res.data.players
        });
      });
  };

  componentDidMount() {
    // Gets id, username and
    this.updatePlayer();

    console.log("This is username:", this.state.username);
    console.log("This is password:", this.state.password);
    console.log("This is id:", this.state.id);

    axios
      .get(
        `https://sonicthelambhog.herokuapp.com/api/users/${localStorage.getItem(
          "id"
        )}/`
      )
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
      .get(
        `https://sonicthelambhog.herokuapp.com/api/users/${localStorage.getItem(
          "id"
        )}/`
      )
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
      .get(
        `https://sonicthelambhog.herokuapp.com/api/players/${localStorage.getItem(
          "id"
        )}/`
      )
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
      .get(
        `https://sonicthelambhog.herokuapp.com/api/rooms/${localStorage.getItem(
          "currentRoom"
        )}/`
      )
      .then(response => {
        this.setState({
          currentRoom: response.data.id,
          title: response.data.title,
          description: response.data.description,
          n_to: response.data.n_to,
          s_to: response.data.s_to,
          e_to: response.data.e_to,
          w_to: response.data.w_to
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

  // Get current room of player by id
  getCurrentRoom = e => {
    axios
      .get(
        `https://sonicthelambhog.herokuapp.com/api/players/${localStorage.getItem(
          "id"
        )}/`
      )
      .then(response => {
        console.log("This is response data:", response.data);
        this.setState({ currentRoom: response.data.currentRoom });
        localStorage.setItem("currentRoom", response.data.currentRoom);
      })
      .then(response => {
        axios
          .get(
            `https://sonicthelambhog.herokuapp.com/api/rooms/${localStorage.getItem(
              "currentRoom"
            )}/`
          )
          .then(response => {
            console.log("This is updated room response data:", response.data);
            this.setState({
              currentRoom: response.data.id,
              title: response.data.title,
              description: response.data.description,
              n_to: response.data.n_to,
              s_to: response.data.s_to,
              e_to: response.data.e_to,
              w_to: response.data.w_to
            });
          });
      })
      .then(response => {
        // Gets id, username and
        axios
          .get("https://sonicthelambhog.herokuapp.com/api/adv/init", {
            headers: { Authorization: "Token " + localStorage.getItem("Token") }
          })
          .then(res => {
            this.setState({
              players: res.data.players
            });
          });
      });

    console.log(
      "This updated new current room state with information:",
      this.state
    );

    console.log("This updated new current room state:", this.state);
  };

  onClickGoNorth = e => {
    console.log("Old current room!", this.state.currentRoom);

    if (this.state.n_to === 0) {
      this.setState({ message: true });
    } else {
      this.setState({ message: false });
      axios
        .post(
          "https://sonicthelambhog.herokuapp.com/api/adv/move/",
          { direction: "n" },
          {
            headers: { Authorization: "Token " + localStorage.getItem("Token") }
          }
        )

        // Get where player is and sets/update currentRoom for frontend --  //

        .then(response => {
          this.getCurrentRoom();
        });
    }
  };

  onClickGoSouth = e => {
    e.preventDefault();
    console.log("Old current room!", this.state.currentRoom);

    if (this.state.s_to === 0) {
      this.setState({ message: true });
    } else {
      this.setState({ message: false });
      this.setState({ currentRoom: this.state.s_to });

      axios
        .post(
          "https://sonicthelambhog.herokuapp.com/api/adv/move/",
          { direction: "s" },
          {
            headers: { Authorization: "Token " + localStorage.getItem("Token") }
          }
        )

        // Get where player is and sets/update currentRoom for frontend --  //

        .then(response => {
          this.getCurrentRoom();
        });
    }
  };

  onClickGoEast = e => {
    e.preventDefault();
    console.log("Old current room!", this.state.currentRoom);

    if (this.state.e_to === 0) {
      this.setState({ message: true });
    } else {
      this.setState({ message: false });
      this.setState({ currentRoom: this.state.e_to });

      axios
        .post(
          "https://sonicthelambhog.herokuapp.com/api/adv/move/",
          { direction: "e" },
          {
            headers: { Authorization: "Token " + localStorage.getItem("Token") }
          }
        )

        // Get where player is and sets/update currentRoom for frontend --  //

        .then(response => {
          this.getCurrentRoom();
        });
    }
  };

  onClickGoWest = e => {
    e.preventDefault();
    console.log("Old current room!", this.state.currentRoom);

    if (this.state.w_to === 0) {
      this.setState({ message: true });
    } else {
      this.setState({ message: false });
      this.setState({ currentRoom: this.state.w_to });

      axios
        .post(
          "https://sonicthelambhog.herokuapp.com/api/adv/move/",
          { direction: "w" },
          {
            headers: { Authorization: "Token " + localStorage.getItem("Token") }
          }
        )

        // Get where player is and sets/update currentRoom for frontend --  //

        .then(response => {
          this.getCurrentRoom();
        });
    }
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="dashboardComponent">
        <PageDiv className="main">
          <p className="dash"> </p>
          <H1>Dashboard</H1>

          <SplitContainer>
            <div>
              <H1>Map:</H1>
              <MapContainer>
                <RowContainer>
                <DummyMapContainer />
                <NorthMapContainer>
                {this.state.n_to === 0 && <P>X</P>}
                {this.state.n_to !== 0 && <P>{this.state.n_to}</P>}
                </NorthMapContainer>
                <DummyMapContainer />
                </RowContainer>

                <RowContainer>
                <WestMapContainer>
                {this.state.w_to === 0 && <P>X</P>}
                {this.state.w_to !== 0 && <P>{this.state.w_to}</P>}
                </WestMapContainer>

                <CenterMapContainer>
                <P>{this.state.currentRoom}</P>
                </CenterMapContainer>

                <EastMapContainer>
                {this.state.e_to === 0 && <P>X</P>}
                {this.state.e_to !== 0 && <P>{this.state.e_to}</P>}
                </EastMapContainer>
                </RowContainer>

                <RowContainer>
                <DummyMapContainer />
                <SouthMapContainer>
                {this.state.s_to === 0 && <P>X</P>}
                {this.state.s_to !== 0 && <P>{this.state.s_to}</P>}
                </SouthMapContainer>
                <DummyMapContainer />
                </RowContainer>
              </MapContainer>
            </div>

            <RightContainer>
              <InfoContainer>
                <RoomInfoContainer>
                  <H1>Room Stats:</H1>
                  <P>You are currently in:</P>
                  <P>{this.state.title}</P>
                  <P>Description:</P>
                  <P>{this.state.description}</P>
                  <P>Players in room:</P>
                  {this.state.players.length === 0 && <P>You're all alone.</P>}
                  {this.state.players.length > 0 && <P>{this.state.players}</P>}
                </RoomInfoContainer>

                <PlayerInfoContainer>
                  <H1>Players Stats:</H1>
                  <P>Username: {this.state.username}</P>

                  {this.state.message === true && (
                    <Transition
                      visible={visible}
                      animation="flash"
                      duration={600}
                    >
                      <Message
                        color="red"
                        header="There is no room to move to."
                      />
                    </Transition>
                  )}
                  {this.state.message === false && (
                    <Transition
                      visible={visible}
                      animation="flash"
                      duration={600}
                    >
                      <Message color="green" header="Moving to next room." />
                    </Transition>
                  )}
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
                  <Button className="westButton" onClick={this.onClickGoWest}>
                    <Icon name="angle double left"></Icon>
                  </Button>
                  <Button className="eastButton" onClick={this.onClickGoEast}>
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
