import { useState } from 'react'
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

  const ConfirmedInfo = () => (
    <div className="bg-white p-4 rounded">
      <p>Agent Name: {form1.agentName}</p>
      <p>Agent Nbr: {String(form1.agentNbr)}</p>
      <p>Agency Name: {form1.agencyName}</p>
      <p>Agency Nbr: {String(form1.agencyNbr)}</p>
    </div>
  )

  return (
    <>
      <NavBar />
      
      <div className="min-h-screen grid place-items-center bg-gray-200">
        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
      <div className="bg-white p-4">
        <div className="flex flex-col gap-2">

          <InputForm
            onChange={updateForm1}
            name={'agentName'}
            type={'text'}
            value= {form1.agentName}
            placeholder={'Agent Name'}
            />

          <InputForm
            onChange={updateForm1}  
            name={'agentNbr'}
            type='number'
            value={form1.agentNbr}
            placeholder="Agent Number"
            
          />

          <InputForm
            onChange={updateForm1}
            name="agencyName"
            type="text"
            value={form1.agencyName}
            placeholder="Agency Name"
           />

          <InputForm
            onChange={updateForm1}
            name="agencyNbr"
            type="number"
            value={form1.agencyNbr}
            placeholder="Agency Number"
          />

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
          <p>Agent Name: {form1.agentName}</p>
          <p>Agent Nbr: {String(form1.agentNbr)}</p>
          <p>Agency Name: {form1.agencyName}</p>
          <p>Agency Nbr: {String(form1.agencyNbr)}</p>
        </div>

        <div className='bg-gray-200 p-4 col-span-2'>
          Confirmed Information

         {showConfirm ? <ConfirmedInfo /> : <p>No data confirmed yet.</p>}

        </div>
      </div>
       </div>
    </>
  )
}

export default App

