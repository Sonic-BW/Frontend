import styled from "styled-components";

// Whole NavBar Container styling//

export const NavBar = styled.nav`
  background-color: darknavy;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1.0rem 2rem 1rem 2.0rem;
  align-items: center;
  border-bottom: 1px solid #4D4D58; 
  background-image: url("https://www.imageupload.net/upload-image/2020/01/18/fast.gif");
  background-size: 18vh !important;
  border: 20px double navy;
`;

// NavBar Buttons Component Container (contains Buttons) styling//

export const ButtonGroup = styled.div`
//   border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

//   @media (max-width: 760px) {  
//     display: flex;
//     flex-direction: column;
//     align-items: flex-end;
//     width: 100%;
//   }
`;


// NavBar Buttons Container styling//

export const NavBarButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  // border: 1px solid blue;


//   @media (max-width: 760px) {  
//     width: 100%;
//   }
`;


export const Button = styled.a`
  border: 1px solid #51e3c2;
  border-radius: 4px;
  background-color: #393945;
  color: #51e3c2;
  font-weight: bold;
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  transition: 0.1s ease-in-out;
  :hover:enabled {
    color: white;
    background-color: #51e3c2;
  }
  :disabled {
    color: grey;
    border: 1px solid grey;
  }
`;

// SONIC THE LAMBDOG header//

export const ButtonLink = styled.button`
  color: #FF2CBE;
  font-weight: bold;
  padding: 0.3rem 0.6rem;
  font-size: 2.5rem;
  margin-left: 0.5rem;
  font-family: Sonic;
  text-decoration: none;
  :hover {
    color: white;
  }
`;
