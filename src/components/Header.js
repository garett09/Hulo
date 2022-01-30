import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <Nav>
            <Logo src = "/assets/Hulofarmlogo.png" />
            <NavMenu>
                <a>
                    <span>Home</span>
                </a>
                <a>
                    <span>Accomodation</span>
                </a>
                <a>
                    <span>FAQS</span>
                </a>

                <MenuIcon />
            
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

    a{
        display: flex;
        alight-items:center;
        padding: 0 12px;
    }
    span{
        font-size: 13px;
        letter-spacing:1.42px;
    }
}
`