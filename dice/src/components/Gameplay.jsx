import React from 'react'
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import styled from 'styled-components'
import Roledice from './Roledice'
import { useState } from 'react'
import { Button } from '../styled/Button'
import Rules from './Rules'

function Gameplay() {
  const [score,setScore ] = useState(0);
  const [selectedNum,setSelectedNum] = useState();
  const [currentDice,setcurrentDice] = useState(1);
  const [error ,setError]= useState();
  const [showRule,setShowRules] = useState();

  const RandomNum =(min ,max)=>{
    return Math.floor(Math.random()*(max - min) + min);
};

const roleDice = () =>{
  if(!selectedNum) {
    setError("Please Select a Number First")
    return
  }
  
    const randomNum  = RandomNum(1,7);
    setcurrentDice((prev) =>  randomNum);


    if(selectedNum == randomNum){
      setScore((prev) => prev + randomNum)
    }
    else{
      setScore((prev) => prev - 2)
    }
    setSelectedNum(undefined)
}
const resetScore =()=>{
  setScore(0);
};


  return (
    <>
    <MainContainer>
       <div className='top-section'>
        <TotalScore score={score}/>       
        <NumberSelect error={error}
        setError={setError}
        selectedNum={selectedNum}                
        setSelectedNum={setSelectedNum}
        />       

       </div>
        <Roledice currentDice={currentDice} roleDice={roleDice}/>       
        <div className='btn'>
          <Button
          onClick={resetScore}>Reset Score</Button>
          <Button
          onClick={()=>setShowRules((prev) => !prev)}
          >{
            showRule ? "Hide" : "Show"} Rules</Button>
        </div>
       {showRule && <Rules/>}
    </MainContainer>
    </>
  )
};

export default Gameplay
const MainContainer = styled.main`

    padding-top: 70px;
.top-section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
.btn{
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* max-width: 228px; */
  align-items: center;
  gap: 15px;
  margin-top: 40px;
}

`;

