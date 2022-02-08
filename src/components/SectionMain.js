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
      <Footer>
        <List type="inline">
          <ListInlineItem className="hello">
            {" "}
            The Hulo Agri & Leisure Farm remains to be a COVID-free safe place.
            All staff are fully vaccinated.{" "}
          </ListInlineItem>
          <ListInlineItem className="hello2">
            {" "}
            2020 Hulo Farm, All right resrved.
          </ListInlineItem>
        </List>
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

  .hello {
    color: #fff;
    float: left;
  }
  .hello2 {
  }
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
