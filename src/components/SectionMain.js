import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import {createGlobalStyle} from "styled-components";

function SectionMain() {
  return (
    <Wrap>
      <ItemText>
      <Fade left>
        <h1>Welcome to Hulo Farm</h1>
        </Fade>
      </ItemText>
      <Footer>
        <FooterText>
          <h1 className="lefttext">
            The Hulo Agri & Leisure Farm remains to be a COVID-free safe place.
            All staff are fully vaccinated.
          </h1>
          <h1 className="righttext">
            2020 Hulo Farm, All right resrved.
          </h1>
        </FooterText>
      </Footer>
    </Wrap>
  );
}

export default SectionMain;

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/HuloIntro.JPG");
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
`;

const Footer = styled.div`
  margin-top: 1rem;
  padding: 1.3rem;
  background-color: #ae9376;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display:flex;


`;

const FooterText = styled.div`
  display: flex;
  width: 100%;
  font-size: 10px;
  color: #FFFFF;

.righttext{
  margin-left: 8rem;
  float: left;
  width: 40%;
}
.lefttext{
  margin-right: 8rem;
  width: 60%;
  float: right;
}
`;
