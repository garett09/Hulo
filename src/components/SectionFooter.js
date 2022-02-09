import React from 'react';
import styled from "styled-components";
import {ListGroup, ListGroupItem } from 'reactstrap';

function SectionFooter() {
  return (
    <Footer>
    <ListGroup horizontal="lg">
      <ListGroupItem>
        The Hulo Agri & Leisure Farm remains to be a COVID-free safe place.
        All staff are fully vaccinated.
      </ListGroupItem>
      <ListGroupItem>
        2020 Hulo Farm, All right resrved.
      </ListGroupItem>
    </ListGroup>
  </Footer>
  );
}

export default SectionFooter;

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


