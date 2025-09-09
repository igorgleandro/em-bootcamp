import InputAmount from "../inputs/InputAmount"
import InputCheckmark from "../inputs/InputCheckmark"
import BtnCal from "../buttons/BtnCalc"

function InputBox() {
  console.log("InputBox Loaded")

  return (
    <div className="p-4 w-1/3 bg-white">
      <div> Mortgage Calculator </div>
      <InputAmount type="number" label="Mortgage Calculator" />
      <div className="flex items-center">
      <InputAmount type="number" label="Mortgage Term" />
      <InputAmount type="number" label="Interest Rate" />
      </div>
      
      <InputCheckmark/>
      <BtnCal/>
    </div>
  )
}

export default InputBox