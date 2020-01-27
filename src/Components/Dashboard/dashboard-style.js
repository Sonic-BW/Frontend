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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;


  //blue background
  background: radial-gradient(ellipse at bottom, #5091dd 0%, #030617 100%);

  min-width: 85%;
  min-height: 40%;
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
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: stretch;
  margin: auto;
  padding: 2rem;
  border: 5px solid green;
  background-color: black;
  // background-image: url("https://www.imageupload.net/upload-image/2020/01/27/grass.png");

  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;

//-------------Map Styling------------------//

// Whole Map container styling //
export const MapContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  background-image: url("https://www.imageupload.net/upload-image/2020/01/27/grass.png");
  margin: auto;
  padding: 1rem;
  border: 5px solid pink;

  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;

// Whole Map Row container styling //
export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  align-content: space-evenly;
  align-items: center;
  // border: 5px solid grey;

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
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 2rem;
  // border: 5px solid brown;

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
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 2rem;
  // border: 5px solid green;

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
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 2rem;
  // border: 5px solid green;

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
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 2rem;
  // border: 5px solid green;

  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;

// East Map container styling //
export const EastMapContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;

  align-items: space-around;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 2rem;
  // border: 5px solid green;

  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;

// Center Map container styling //
export const CenterMapContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;

  align-content: space-around;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 2rem;
  animation: 2s ${fadeInUpAnimation};
  // border: 5px solid green;

  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;

//////////////////////////////////////////////////

// Left side container styling //
export const LeftContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  // align-content: space-between;
  align-items: center;
  margin: auto;
  padding: 1rem;
  border: 5px solid purple;
  h1 {
    font-family: 'Bangers', cursive;
  }
  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;


// Right side container styling //
export const RightContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  // align-content: space-between;
  align-items: center;
  margin: auto;
  padding: 1rem;
  border: 5px solid purple;
  h1 {
    font-family: 'Bangers', cursive;
  }
  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;

// Information container styling //
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  margin: auto;
  padding: 1rem;
  // @media (max-width: 700px) {
  //   width: 100%;
  // }
`;


// Player Info container styling//
export const PlayerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 100%;
`;

// Room Info container styling//
export const RoomInfoContainer = styled.div`
  display: flex;
  @import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');
  flex-direction: column;
  margin: auto;
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
  justify-content: space-around;
  align-items: center;
  margin: auto;
  padding: 1rem;
  border: 5px solid navy;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

// Movement container styling//
export const MovementContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto 10px auto;
  justify-content: center;
  align-items: center;
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
  padding-bottom: 20px;
  animation: 2s ${lightSpeedInAnimation};
`;

// h2 styling //
export const H2 = styled.h1`
  text-align: center;
  text-size: 20px;
  color: #fff29c;
  margin: 0 auto;
  // margin-left: 25px;
  // padding-top: 50px;
  animation: 2s ${lightSpeedInAnimation};
`;

// h3 styling //
export const H3 = styled.h1`
text-align: center;
text-size: 20px;
color: #fff29c;
margin: 0 auto;
// margin-left: 25px;
// padding-top: 50px;
padding-bottom: 20px;
animation: 2s ${lightSpeedInAnimation};
`;

// P styling//
export const P = styled.p`
  text-align: center;
  color: white;
`;