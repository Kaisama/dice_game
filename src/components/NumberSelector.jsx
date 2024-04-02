import React, { useState } from 'react'
import styled from 'styled-components'
function NumberSelector() {
    const array=[1,2,3,4,5,6];

    const[selectNumber,setSelectedNumber]=useState();


  return (
    <NumberContainer>
         <div className='flex'>
        {
            array.map((value,i)=>
                <Box
                isSelect={value===selectNumber}
                key={i}
                onClick={
                    ()=>setSelectedNumber(value)
                }
                >{value}</Box>
            )
        }
        
    </div>
    <p>Select Number</p>
    </NumberContainer>
   
  )
}

export default NumberSelector

const NumberContainer=styled.div`

display:flex;
flex-direction:column;
align-items:end;


.flex{
    display:flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight:700;
}
`;

const Box=styled.div`
height:72px;
width:72px;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700;
background-color:${(props)=>props.isSelect?"black":"white"};
color:${(props)=>!props.isSelect?"black":"white"};

`;