import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'

function GamePlay() {
  return (
    <MainContainer>
      <div className="topSection">
      <TotalScore/>
       <NumberSelector/>
      </div>
       
    </MainContainer>
  )
}

export default GamePlay

const MainContainer=styled.div`
.topSection{
  display:flex;
  justify-content:space-between;
  align-items:end;
  padding-top:70px;
  padding-right:50px;
}

`;