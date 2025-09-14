import { useState } from 'react'
import { createPortal } from "react-dom";
import './App.css'
import NavBar from './components/NavBar'
import { InputForm } from './components/InputForm'
import ColorButtons from './components/ColorButtons.jsx';
import Form2InputList from './components/Form2InputList.jsx'
import Form1InputList from './components/Form1InputList.jsx';



const App = () => {
  const [form1, setForm1] = useState({
    agentName: '',
    agentNbr: '',
    agencyName: '',
    agencyNbr: '',
  })

  const [form2, setForm2] = useState({
    nameInsured: '',
    descriptionRisk: '',
    coverageCode: '',
  })


  const [showConfirm, setShowConfirm] = useState(false)

  const updateForm1 = (event) => {
    const { name, value } = event.target
    setForm1(prev => ({
      ...prev,
      [name] : value,
    }))
  }

  const updateForm2 = (event) => {
    const { name, value } = event.target
    setForm2(prev => ({
      ...prev,
      [name] : value,
    }))
  }

   const handleConfirm = () => setShowConfirm(true) 
  const handleResetConfirm = () => setShowConfirm(false)

const ConfirmedInfo = ({ form1, form2 }) => {

  return createPortal(
    
    <div className="fixed inset-0 flex items-center justify-center bg-cyan-700/60 backdrop-blur-sm">
      <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full">
        <p><strong>Agent Name:</strong> {form1.agentName}</p>
        <p><strong>Agent Nbr:</strong> {String(form1.agentNbr)}</p>
        <p><strong>Agency Name:</strong> {form1.agencyName}</p>
        <p><strong>Agency Nbr:</strong> {String(form1.agencyNbr)}</p>
        <p><strong>Name of Insured:</strong> {form2.nameInsured}</p>
        <p><strong>Description Risk:</strong> {String(form2.descriptionRisk)}</p>
        <p><strong>Coverage Code</strong> {form2.coverageCode}</p>
      
      
          <ColorButtons
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
const form1InputList = Form1InputList({updateForm1, form1})
    //List Form2 data
const form2InputList= Form2InputList({ updateForm2, form2 }) 


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

        {Object.values(form2InputList).map(
          ({ onChange, name, type, value, placeholder,options  }, idx) => (
            <InputForm
              key={idx}
              onChange={onChange}
              name={name}
              type={type}
              value={value}
              placeholder={placeholder}
              options={options}
            />
          )
        )}
         

        </div>
        <br></br>
        <div className="flex flex-row gap-4">
          <ColorButtons
            color={'green'}
            text={'Confirm Input'}
            func= {handleConfirm}
          />

          <ColorButtons
            color={'red'}
            text={'Reset Input'}
            func= {handleResetConfirm}
          />
        </div>

      </div>

        <div className="bg-white p-4">
          <h1 className='text-red-700 font-bold' >Preview:</h1>
          <p></p>
          <p>Agent Name: {form1.agentName}</p>
          <p>Agent Nbr: {String(form1.agentNbr)}</p>
          <p>Agency Name: {form1.agencyName}</p>
          <p>Agency Nbr: {String(form1.agencyNbr)}</p>
        
          <h1 className='text-red-700 font-bold' >____________________________</h1>
          <p></p>
          <p>Name of Insured: {form2.nameInsured}</p>
          <p>Description Risk: {String(form2.descriptionRisk)}</p>
          <p>Coverage Code {form2.coverageCode}</p>
          
        </div>

        <div className='bg-gray-200 p-4 col-span-2'>
          Confirmed Information

        {showConfirm ? <ConfirmedInfo form1={form1} form2={form2} /> : <p>No data confirmed yet.</p>}

        </div>
      </div>
       </div>
    </>
  )
}

export default App

