import React from "react";
import styled from "styled-components";

function SectionMain() {
    return (
        <Wrap>
            <ItemText>
                <h1>Welcome to Hulo Farm</h1>
            </ItemText>
        </Wrap>

    );
}

export default SectionMain;

const Wrap = styled.div `
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/images/HuloIntro.JPG');
display:flex;
flex-direction: column;
justify-content: space-between; // vertical alignment
align-items: center; // horizontal alignment

`

const ItemText = styled.div`
    text-align: center;
    color: #CEBCA3;
    font-size: 3em;
    padding 25vh 0;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;