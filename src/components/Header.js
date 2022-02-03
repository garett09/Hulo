import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Nav>
      <Logo
        src="/images/Hulo Farm Transparent white.png"
        alt="Hulo Farm Logo"
      />
      <CustomMenu onClick={() => setBurgerStatus(true)} />

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#"> About Us</a>
        </li>
        <li>
          <a href="#"> Accomodation</a>
        </li>
        <li>
          <a href="#"> Event Hall</a>
        </li>
        <li>
          <a href="#"> Resort Rules</a>
        </li>
        <li>
          <a href="#"> FAQs</a>
        </li>
      </BurgerNav>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justfy-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Logo = styled.img`
    width:90px;
    border-radius: 50%;
    margin-right 80%;
    padding-top:20px;
   
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  transform: scale(2.5);
  color: black; //black for now but original color is #AE9376

`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
