import React from 'react'
import styled from 'styled-components'


function StartGame() {
  return (
    <Container>
    <img src="/images/dices.png" alt="dices" />
        <div className='content'>
                <h1>Dice Game</h1>
                <Button>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container=styled.div`
height:100vh;
display:flex;
align-items:center;
justify-content:center;

.content{
    h1{
        font-size:96px;
        white-space:no-wrap;
    }

}
`;

const Button=styled.button`
padding:10px 18px;
background:black;
color:white;
border-radius:5px;
min-width:220px;
border: 1px solid transparent;
font-size:20px;
cursor:pointer;

&:hover{
    background-color:white;
    color:black;
    border: 1px solid black;
}
`;