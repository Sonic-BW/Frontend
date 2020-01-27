import styled, { keyframes } from "styled-components"; //for styling
import { tada, bounce, fadeInUp, lightSpeedIn } from "react-animations"; //for animation

const bounceAnimation = keyframes`${bounce}`;
const tadaAnimation = keyframes`${tada}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const lightSpeedInAnimation = keyframes`${lightSpeedIn}`;

// Bouncing Animation
const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

// Fade In Up Animation
const FadeInUpDiv = styled.div`
  animation: 1s ${fadeInUpAnimation};
`;

// Tada Animation
const TadaDiv = styled.div`
  animation: 1s ${tadaAnimation};
`;

// Light Speed In Animation
const LightSpeedInDiv = styled.div`
  animation: 1s ${lightSpeedInAnimation};
`;

// PageDiv Styling //
export const PageDiv = styled.div`
  //   background: #00FFAB;

  //aqua green background----//

  //   background: radial-gradient(
  //         1.5em 6.28571em at 1.95em,
  //         rgba(255, 255, 255, 0) 50%,
  //         rgba(255, 255, 255, 0.25) 50%,
  //         rgba(255, 255, 255, 0.25) 55%,
  //         rgba(255, 255, 255, 0) 55%
  //       )
  //       0 0,
  //     radial-gradient(
  //         1.5em 6.28571em at -0.45em,
  //         rgba(255, 255, 255, 0) 50%,
  //         rgba(255, 255, 255, 0.25) 50%,
  //         rgba(255, 255, 255, 0.25) 55%,
  //         rgba(255, 255, 255, 0) 55%
  //       )
  //       1.5em 5.5em,
  //     radial-gradient(
  //         2.3em 4.57143em at 2.99em,
  //         rgba(255, 255, 255, 0) 50%,
  //         rgba(255, 255, 255, 0.3) 50%,
  //         rgba(255, 255, 255, 0.3) 55%,
  //         rgba(255, 255, 255, 0) 55%
  //       )
  //       0 0,
  //     radial-gradient(
  //         2.3em 4.57143em at -0.69em,
  //         rgba(255, 255, 255, 0) 50%,
  //         rgba(255, 255, 255, 0.3) 50%,
  //         rgba(255, 255, 255, 0.3) 55%,
  //         rgba(255, 255, 255, 0) 55%
  //       )
  //       2.3em 4em,
  //     radial-gradient(
  //         3.5em 6.28571em at 4.55em,
  //         rgba(255, 255, 255, 0) 50%,
  //         rgba(255, 255, 255, 0.25) 50%,
  //         rgba(255, 255, 255, 0.25) 55%,
  //         rgba(255, 255, 255, 0) 55%
  //       )
  //       0 0,
  //     radial-gradient(
  //         3.5em 6.28571em at -1.05em,
  //         rgba(255, 255, 255, 0) 50%,
  //         rgba(255, 255, 255, 0.25) 50%,
  //         rgba(255, 255, 255, 0.25) 55%,
  //         rgba(255, 255, 255, 0) 55%
  //       )
  //       3.5em 5.5em,
  //     radial-gradient(#15ffa5, #00ced1);
  //   background-color: mediumspringgreen;
  //   background-size: 1.5em 11em, 1.5em 11em, 2.3em 8em, 2.3em 8em, 3.5em 11em,
  //     3.5em 11em, 100% 100%;
  //   background-repeat: repeat;

  //blue background
  background: radial-gradient(ellipse at bottom, #5091dd 0%, #030617 100%);

  min-width: 85%;
  min-height: 85%;
  padding-bottom: 50px;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover !important;

  //green bg border
  //   border: 20px double #02cac7;

  //blue bg border
  border: 20px double navy;
`;

// Form styling //
export const FormGroup = styled.form`
  background: whitesmoke;
  display: block;
  margin: 1rem auto;
`;

// Split container styling //
export const SplitContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  border: 5px solid navy;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
/////////////////////////////////////////////

// Whole Map container styling //
export const MapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  align-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  border: 5px solid grey;

  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;

// Dummy Map container styling //
export const DummyMapContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;

  align-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  border: 5px solid brown;

  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;

// North Map container styling //
export const NorthMapContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;

  align-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  border: 5px solid green;

  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;

// South Map container styling //
export const SouthMapContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;

  align-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  border: 5px solid green;

  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;

// West Map container styling //
export const WestMapContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;

  align-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  border: 5px solid green;

  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;

// East Map container styling //
export const EastMapContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;

  align-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  border: 5px solid green;

  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;

// Center Map container styling //
export const CenterMapContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;

  align-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  border: 5px solid green;

  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;




//////////////////////////////////////////////////

// Right side container styling //
export const RightContainer = styled.div`
 @import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');
  width: 50%;
  display: flex;
  flex-direction: column;

  align-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  border: 5px solid navy;
  h1 {
    font-family: 'Bangers', cursive;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

// Information container styling //
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  @media (max-width: 700px) {
    width: 100%;
  }
`;


// Player Info container styling//
export const PlayerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 100%;
`;

// Room Info container styling//
export const RoomInfoContainer = styled.div`
  display: flex;
  @import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  h2 {
    font-family: 'Bangers', cursive;
    color: red
  }
  width: 100%;
`;

// Movement Header container styling //
export const MovementHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  border: 5px solid navy;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

// Movement container styling//
export const MovementContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  // align-items: center;
  border: 1px solid red;
  width: 100%;
`;

// Input label styling //
export const Label = styled.label`
  display: flex;
  font-weight: bold;
  text-align: left !important;
  margin: 0 auto;
  //   color: #0521b0 !important;
  color: white !important;
  padding: 0.25em;
  max-width: 300px;
`;

// Input Styling //
export const Input = styled.input`
  padding: 1rem;
  color: white !important;
  background: white !important;
  border: none;
  border-radius: 3px;
  width: 100% !important;
  height: 30px !important;
  margin: 1rem, 0.5rem;
  animation: 1s ${fadeInUpAnimation};
`;

// Button Styling //
export const Button = styled.button`
  margin-top: 25px !important;
  text-align: center;
  padding: 1em 2em;
  // color: white !important;
  border-radius: 3px;
  margin-left: 35px;
  align-items: center;
`;

// h1 styling //
export const H1 = styled.h1`
  text-align: center;
  text-size: 20px;
  color: #fff29c;
  margin: 0 auto;
  // margin-left: 25px;
  padding-top: 50px;
  animation: 2s ${lightSpeedInAnimation};
`;

// P styling//
export const P = styled.p`
  text-align: center;
  color: white;
`;