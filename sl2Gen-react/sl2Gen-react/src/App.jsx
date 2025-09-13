import { useState } from 'react'
import { createPortal } from "react-dom";
import './App.css'
import NavBar from './components/NavBar'
import { Button } from './components/Button'
import { InputForm } from './components/InputForm'

const App = () => {
  const [form1, setForm1] = useState({
    agentName: '',
    agentNbr: '',
    agencyName: '',
    agencyNbr: '',
  })

  const [showConfirm, setShowConfirm] = useState(false)

  const updateForm1 = (event) => {
    const { name, value } = event.target
    setForm1(prev => ({
      ...prev,
      [name] : value,
    }))
  }

   const handleConfirm = () => setShowConfirm(true) 
  const handleResetConfirm = () => setShowConfirm(false)

const ConfirmedInfo = ({ form1 }) => {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-cyan-700/60 backdrop-blur-sm">
      <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full">
        <p><strong>Agent Name:</strong> {form1.agentName}</p>
        <p><strong>Agent Nbr:</strong> {String(form1.agentNbr)}</p>
        <p><strong>Agency Name:</strong> {form1.agencyName}</p>
        <p><strong>Agency Nbr:</strong> {String(form1.agencyNbr)}</p>
      

      <Button
          color={'red'}
          text={'Reset Input'}
          func= {handleResetConfirm}
        />
    </div>
    </div>,
    document.body 
  );
};

  //List Form1 data

const form1InputList = {
  agentNameInput: {
            onChange:updateForm1,
            name:'agentName',
            type:'text',
            value:form1.agentName,
            placeholder:'Agent Name',
  },

  agentNbrInput : {
            onChange: updateForm1,  
            name: 'agentNbr',
            type: 'number',
            value : form1.agentNbr,
            placeholder: "Agent Number"
            
         },

          agencyNameInput:{

            onChange:updateForm1,
            name: "agencyName",
            type: "text",
            value: form1.agencyName,
            placeholder: "Agency Name",
          },

          agencyNbrInput: {
            onChange:updateForm1,
            name:"agencyNbr",
            type:"number",
            value:form1.agencyNbr,
            placeholder:"Agency Number",
          }

}

  return (
    <>
      <NavBar />
      
      <div className="min-h-screen grid place-items-center bg-gray-200">
        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
          <div className="bg-white p-4">
            <div className="grid grid-cols-2 gap-4">

         
         
          {Object.values(form1InputList).map(
          ({ onChange, name, type, value, placeholder }, idx) => (
            <InputForm
              key={idx}
              onChange={onChange}
              name={name}
              type={type}
              value={value}
              placeholder={placeholder}
            />
          )
        )}
         

        </div>
        <br></br>
        <Button
          color={'green'}
          text={'Confirm Input'}
          func= {handleConfirm}
        />

        <Button
          color={'red'}
          text={'Reset Input'}
          func= {handleResetConfirm}
        />

      </div>

        <div className="bg-white p-4">
          <h1 className='text-red-700 font-bold' >Preview:</h1>
          <p></p>
          <p>Agent Name: {form1.agentName}</p>
          <p>Agent Nbr: {String(form1.agentNbr)}</p>
          <p>Agency Name: {form1.agencyName}</p>
          <p>Agency Nbr: {String(form1.agencyNbr)}</p>
        </div>

        <div className='bg-gray-200 p-4 col-span-2'>
          Confirmed Information

        {showConfirm ? <ConfirmedInfo form1={form1} /> : <p>No data confirmed yet.</p>}

        </div>
      </div>
       </div>
    </>
  )
}

export default App

