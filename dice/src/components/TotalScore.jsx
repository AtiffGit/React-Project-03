import React from 'react'

import styled from 'styled-components'

function TotalScore({score}) {
  return (
    <Score>
        <div>
            <h1>{score}</h1>
            <p>Total Score</p>
        </div>
    </Score>
  )
}

export default TotalScore
const Score = styled.div`
    max-width: 200px;
    text-align: center;
    padding: 10px 10px;
    h1{
        font-size: 100px;
        line-height: 100px;
    }
    p{
      font-size  : 24px ;
      font-weight: 500px;
    }
`;