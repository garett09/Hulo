import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] =useState(false);
    return (
        <Nav>
            <Logo src = "/assets/Hulofarmlogo.png" />
            <NavMenu>
            <ul>
                <li className='nav-items'>
                     Home 
                </li>
                <li className='nav-items'>
                     Accomodation
                </li>
                <li className='nav-items'>
                     FAQS
                </li>
            </ul>
            <Custommenu onClick ={()=>setBurgerStatus(true)}/>
            <Burgermenu show={burgerStatus}>
                <Closeburger onClick ={()=>setBurgerStatus(false)}/>
            </Burgermenu>
            </NavMenu>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: transparent;
    display: flex;
    align-item: center;
    padding: 0 36px;

`
const Logo = styled.img`
    width:80px
    border-radius: 50%;
    margin-right 80%;
   
`
const NavMenu = styled.div`
    display: flex;
    flex:1;
    align-items:center;
    padding: 0 12px;

    ul{
        display: flex;
        alight-items:center;
        padding: 0 12px;
        text-decoration: none;
        list-style-type:none;

    }
    ul li{
        font-size: 13px;
        letter-spacing:1.42px;
        text-decoration: none;
        padding: 0 12px;

    }

   
}
`
const Custommenu = styled(MenuIcon)`
    
`
const Burgermenu = styled.div`
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
`

const Closeburger = styled(CloseIcon)`
`