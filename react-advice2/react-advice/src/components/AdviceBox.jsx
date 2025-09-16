import './AdviceBox.css'
import { useContext } from "react";
import { AdviceContext } from "../providers/AdviceProvider";


function AdviceBox() {
  
   const { advice } = useContext(AdviceContext);

  return (
    <>
    <main class="center-wrap">
      <div id="AdviceBox" class="adviceBox">
      
      <div id="idAdvice" class="divIdBox">Advice #{advice.id}</div>
       <div id="adAdvice" className="divAdviceBox">{advice.advice}</div>
      <div>
        <img 
          src="/pattern-divider-desktop.svg" 
          alt="dividerPage" 
          className="dice-icon" 
        />
      </div>
      </div>
      </main>
    </>
  )
}

export default AdviceBox