import './DiceBox.css'

function DiceBox() {
  console.log("Dice")

  return (
    <>
      <div className="diceBox">
        <button id="diceButton" className="diceButtonBox">
          <img 
            src="/public/icon-dice.svg" 
            alt="dice icon" 
            className="dice-icon" 
          />
        </button>
      </div>
    </>
  )
}

export default DiceBox