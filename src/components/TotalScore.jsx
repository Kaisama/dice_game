import React from 'react'
import styled from 'styled-components'

function TotalScore() {
  return ( 
<ScoreContainer>
    <h1>0</h1>
    <p>Total Score</p>
</ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer=styled.div`

max-width:150px;
text-align:center;
h1{
    font-size:50px;
    margin:0;
    font-weight:800px;
  
}
p{
    font-size:24px;
    font-weight:500px;
    margin:0;
    
}

`;