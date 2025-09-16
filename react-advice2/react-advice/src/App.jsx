import './App.css'
import AdviceBox from './components/AdviceBox'
import DiceBox from './components/DiceBox'
import { AdviceProvider } from "./providers/AdviceProvider";

function App() {
  return (
    <>
    <AdviceProvider>
    <AdviceBox />
    <DiceBox />
    </AdviceProvider>
    </>
)
}

export default App
