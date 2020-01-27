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

// H1 styling//
export const H1 = styled.h1`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  color: navy;
  padding-top: 40px;
  margin-bottom: 0px !important;
  padding-bottom: 40px;
  // min-height: 5vh;
  // max-height: 5vh;
  border: 20px double navy;
  animation: 2s ${fadeInUpAnimation};
`;

// H2 styling//
export const H2 = styled.h2`
  text-align: center;
  display: flex;
  color: white;
  margin: 0% 10% 1% 10%;

  @media (max-width: 800px) {
    margin: 2% 5% 0 7%;
  }
`;

// H3 styling//
export const H3 = styled.h3`
  text-align: center;
  display: flex;
  color: white;
  margin: 0% 10% 1% 10%;
  padding-top: 35px;
  padding-bottom: 15px;
  font-size: 1.1rem;

  @media (max-width: 800px) {
    margin: 2% 5% 0 7%;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #4d4d58;
  //   border: 1px solid yellow;
  // background: #393945;
  min-height: 71vh;
  overflow: auto;
  background: radial-gradient(ellipse at bottom, #5091dd 0%, #030617 100%);
  border: 20px double navy;

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;
  }
`;

export const Section = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
  width: 100%;
  //   border: 1px solid yellow;

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;
  }
`;
