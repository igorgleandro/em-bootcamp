import './DiceBox.css'
import { useContext } from "react";
import { AdviceContext } from "../providers/AdviceProvider";


function DiceBox() {
  
  const { refreshCommand } = useContext(AdviceContext);

  return (
    <div className="diceBox">
      <button id="diceButton" className="diceButtonBox" onClick={refreshCommand}>
        <img 
          src="/icon-dice.svg" 
          alt="dice icon" 
          className="dice-icon" 
        />
      </button>
    </div>
  );
}

export default DiceBox