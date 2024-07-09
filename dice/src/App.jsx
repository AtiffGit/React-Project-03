import { useState } from "react"
import StartPage from "./components/StartPage"
import Gameplay from "./components/Gameplay";

function App() {
  const [isGameStarted,setIsGameStarted]= useState(false);
  
  const  toggleGamePlay = ()=>{
    setIsGameStarted((prev) =>!prev);
  };
  return (
    <>
    {
      isGameStarted ? <Gameplay/> : <StartPage
      toggle={toggleGamePlay}/>
    };
    
     
    </>
  )
}

export default App
