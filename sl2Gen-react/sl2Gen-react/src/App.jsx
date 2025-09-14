import { useState } from 'react'
import { createPortal } from "react-dom";
import './App.css'
import NavBar from './components/NavBar'
import { InputForm } from './components/InputForm'
import Typography from '@mui/material/Typography';
import ColorButtons from './components/ColorButtons.jsx';
import Form2InputList from './components/Form2InputList.jsx'
import Form1InputList from './components/Form1InputList.jsx';
import Form3InputList from './components/Form3InputList.jsx';
import Box from '@mui/material/Box';    



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

   const [form3, setForm3] = useState({
    insurer1: '', contactedThrough1: '', fullContactName1: '', emailPhone1: '', website1: '', naic1: '', date1: '',
    insurer2: '', contactedThrough2: '', fullContactName2: '', emailPhone2: '', website2: '', naic2: '', date2: '',
    insurer3: '', contactedThrough3: '', fullContactName3: '', emailPhone3: '', website3: '', naic3: '', date3: '',
  });


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

  const updateForm3 = (event) => {
    const { name, value } = event.target
    setForm3(prev => ({
      ...prev,
      [name] : value,
    }))
  }

   const handleConfirm = () => setShowConfirm(true) 
  const handleResetConfirm = () => setShowConfirm(false)

const ConfirmedInfo = ({ form1, form2, form3 }) => {

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
      
      
      
            <Box sx={{
    p: 2,
    borderRadius: 2,
    boxShadow: 2,
    bgcolor: "background.paper",
    display: "flex",            
    gap: 4,                     
    alignItems: "flex-start",   
  }}>
              <div>
              <Typography variant="h6" gutterBottom>Insurer 1</Typography>
              <p>Insurer: {form3.insurer1}</p>
              <p>Contacted Through: {form3.contactedThrough1}</p>
              <p>Full Contact Name: {form3.fullContactName1}</p>
              <p>Phone Number / Email: {form3.emailPhone1}</p>
              <p>Website: {form3.website1}</p>
              <p>NAIC: {form3.naic1}</p>
              <p>Date: {form3.date1}</p>
              </div>
              <div>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Insurer 2</Typography>
              <p>Insurer: {form3.insurer2}</p>
              <p>Contacted Through: {form3.contactedThrough2}</p>
              <p>Full Contact Name: {form3.fullContactName2}</p>
              <p>Phone Number / Email: {form3.emailPhone2}</p>
              <p>Website: {form3.website2}</p>
              <p>NAIC: {form3.naic2}</p>
              <p>Date: {form3.date2}</p>
              </div>
              <div>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Insurer 3</Typography>
              <p>Insurer: {form3.insurer3}</p>
              <p>Contacted Through: {form3.contactedThrough3}</p>
              <p>Full Contact Name: {form3.fullContactName3}</p>
              <p>Phone Number / Email: {form3.emailPhone3}</p>
              <p>Website: {form3.website3}</p>
              <p>NAIC: {form3.naic3}</p>
              <p>Date: {form3.date3}</p>
              </div>
            </Box>
      
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
// List Form3 data
const form3InputList= Form3InputList({ updateForm3, form3 }) 


  return (
    <>

      <NavBar />
      
      <div className="min-h-screen grid place-items-center bg-gray-200">
        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
          
          
          {/* LEFT COLUMN */}
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

        <div className="my-4">_____________________________________</div>
        
        <div className="grid grid-cols-1 gap-4">
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

        <div className="my-4">_____________________________________</div>

        <div className="grid grid-cols-1 gap-4">
            {Object.values(form3InputList).map(
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

        <br />

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

       {/* RIGHT COLUMN (Preview) */}

        <div className="bg-white p-4">
          <h1 className='text-red-700 font-bold' >Preview:</h1>
          <p></p>
          <p>Agent Name: {form1.agentName}</p>
          <p>Agent Nbr: {String(form1.agentNbr)}</p>
          <p>Agency Name: {form1.agencyName}</p>
          <p>Agency Nbr: {String(form1.agencyNbr)}</p>
        
          <h1 className="text-red-700 font-bold">____________________________</h1>
          <p></p>
          <p>Name of Insured: {form2.nameInsured}</p>
          <p>Description Risk: {String(form2.descriptionRisk)}</p>
          <p>Coverage Code {form2.coverageCode}</p>

          <h1 className="text-red-700 font-bold">____________________________</h1>
          <Box sx={{ p: 2, borderRadius: 2, boxShadow: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" gutterBottom>Insurer 1</Typography>
              <p>Insurer: {form3.insurer1}</p>
              <p>Contacted Through: {form3.contactedThrough1}</p>
              <p>Full Contact Name: {form3.fullContactName1}</p>
              <p>Phone Number / Email: {form3.emailPhone1}</p>
              <p>Website: {form3.website1}</p>
              <p>NAIC: {form3.naic1}</p>
              <p>Date: {form3.date1}</p>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Insurer 2</Typography>
              <p>Insurer: {form3.insurer2}</p>
              <p>Contacted Through: {form3.contactedThrough2}</p>
              <p>Full Contact Name: {form3.fullContactName2}</p>
              <p>Phone Number / Email: {form3.emailPhone2}</p>
              <p>Website: {form3.website2}</p>
              <p>NAIC: {form3.naic2}</p>
              <p>Date: {form3.date2}</p>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Insurer 3</Typography>
              <p>Insurer: {form3.insurer3}</p>
              <p>Contacted Through: {form3.contactedThrough3}</p>
              <p>Full Contact Name: {form3.fullContactName3}</p>
              <p>Phone Number / Email: {form3.emailPhone3}</p>
              <p>Website: {form3.website3}</p>
              <p>NAIC: {form3.naic3}</p>
              <p>Date: {form3.date3}</p>
            </Box>
        </div>

        <div className="bg-gray-500 p-4 col-span-2">Form 3 needs to go here</div>

        {showConfirm ? <ConfirmedInfo form1={form1} form2={form2} form3={form3}/> : <p>No data confirmed yet.</p>}

        
      </div>
       </div>
    </>
  );
};

export default App

