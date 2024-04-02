import React from 'react'
import styled from 'styled-components'


function StartGame() {
  return (
    <div>
    <img src="/images/dices.png" alt="dices" />
        <div>
                <h1>Dice Game</h1>
                <Button>Play Now</Button>
        </div>
    </div>
  )
}

export default StartGame

const Container=styled.div`
max-width:1180px;

`;

const Button=styled.button`
padding:10px 18px;
background:black;
color:white;
border-radius:5px;
min-width:220px;
border:none;
`;