import React, { useState } from 'react'
import styled from 'styled-components'

function NumberSelect({ setError,error,selectedNum,setSelectedNum}) {
    const arrNumber = [1,2,3,4,5,6];
   
    const numberSelectHandler =(value)=>{
      setSelectedNum(value);
      setError("");
    }
  return (
    <>
  <NumSelecter>
    <p className='err'>{error}</p>
    <div className='flex'>
    {arrNumber.map((value,i) =>(
        <Box 
        isSelected = {value == selectedNum}
        key={i}
        onClick={() =>numberSelectHandler(value)}
        >{value}
        </Box>
    ))}
    </div>
    <p>Select Number</p>
  </NumSelecter>
   
    </>
  )
}

export default NumberSelect;
const NumSelecter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;


    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
    .err{
      color: red;
    }
`;
const Box = styled.div`
  height  :72px ;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) =>(props.isSelected ? "black" : "white")};
  color: ${(props) =>(!props.isSelected ? "black" : "white")};
  transition: all.5s ease;
`;