import React from 'react'
import styled from 'styled-components';

function Rules() {
  return (
    <RulesContainer>
        <h2>How To Play</h2>
        <div className="text">
        <p>1.Select Any Number</p>
        <p>2.Click On Dice Image</p>
        <p>3.After Click On dice if Selected number is equal to dice number you will get same point as dice.{""}</p>
        <p>4.If You get wrong guess then 2 point will de deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules
const RulesContainer = styled.div`
background-color: #a09191;
max-width: 800px;
margin: 0 auto;
padding: 20px;
margin-top: 40px;
border-radius: 10px;
h2{
    font-size: 24px;
    font-weight: bold;

}
.text{
    margin-top: 24px;

}
`;