import './AdviceBox.css'
import AdAdvice from './IdAdvice'
import IdAdvice from './AdAdvice'

function AdviceBox() {
  console.log("Test")

  return (
    <>
    <main class="center-wrap">
      <div id="AdviceBox" class="adviceBox">
      
      <AdAdvice />
      <IdAdvice />
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