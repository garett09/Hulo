import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { createGlobalStyle } from "styled-components";

function SectionCelso() {
  return (
    <Wrap>
      <ItemText>
        <Fade left>
          <p className="celso">Celso Hall</p>
        </Fade>
      </ItemText>
    </Wrap>
  );
}

export default SectionCelso;

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/CelsoHall.JPG");
  display: flex;
  flex-direction: column;
  justify-content: space-between; // vertical alignment
  align-items: center; // horizontal alignment
`;
const ItemText = styled.div`
    text-align: center;
    color: #CEBCA3;
    font-size: 3em;
    padding 25vh 0;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

    .celso{
        font-size: 3em;
        @import url('https://fonts.googleapis.com/css?family=Averia+Serif+Libre');
        font-family: 'Averia Serif Libre', serif;
        /* font-family: 'Averia Serif Libre', serif; that is how to add.*/
    }
`;

const Footer = styled.div`
  margin-top: 1rem;
  padding: 1.3rem;
  background-color: #ae9376;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
`;

const FooterText = styled.div`
  display: flex;
  width: 100%;
  font-size: 10px;
  color: #FFFFF;

  .righttext {
    margin-left: 8rem;
    float: left;
    width: 40%;
  }
  .lefttext {
    margin-right: 8rem;
    width: 60%;
    float: right;
  }
`;