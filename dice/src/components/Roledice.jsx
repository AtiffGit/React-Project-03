import React, { useState } from 'react'
import styled from 'styled-components';

function Roledice ({currentDice,roleDice})  {
  
  
  return (
    <DiceContainer>
        <div onClick={roleDice} className='dice'>
        <img src={`/images/dice/dice_${currentDice}.png `} alt="Dice 1" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default Roledice;
const DiceContainer  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    
    
    .dice{
        cursor: pointer;
    }

    
    p{
        font-size: 24px;
        font-weight: 500;
   
    }
`;