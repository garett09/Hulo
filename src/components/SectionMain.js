import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { createGlobalStyle } from "styled-components";
import { Button, ListInlineItem, List } from "reactstrap";
import { width } from "@mui/system";

function SectionMain() {
  return (
    <Wrap>
      <ItemText>
        <Fade left>
          <p className="huloTitle">Welcome to Hulo Farm</p>
        </Fade>
      </ItemText>
      <Button color="danger">Danger!</Button>
    </Wrap>
  );
}

export default SectionMain;

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    @import url('https://fonts.googleapis.com/css?family=Averia+Serif+Libre');
    font-family: 'Averia Serif Libre', serif;
  }
`;

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
  position: relative;
`;
const ItemText = styled.div`
    text-align: center;
    color: #CEBCA3;
    font-size: 3em;
    padding 25vh 0;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

    .huloTitle{
        font-size: 3em;
        }
`;



