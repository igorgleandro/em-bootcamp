import { useState } from 'react'
import { createPortal } from "react-dom";
import './App.css'
import NavBar from './components/NavBar'
import { InputForm } from './components/InputForm'
import Typography from '@mui/material/Typography';
import ColorButtons from './components/ColorButtons.jsx';
import Form2InputList from './components/Form2InputList.jsx'
import Form1InputList from './components/Form1InputList.jsx';
import Form3InputInsurer1 from './components/Form3InputInsurer1.jsx';
import Form3InputInsurer2 from './components/Form3InputInsurer2.jsx';
import Form3InputInsurer3 from './components/Form3InputInsurer3.jsx';
import Box from '@mui/material/Box';
import { useContext } from "react";
import { FormContext } from "./providers/FormProvider";
import SubmitButton from "./logic/SubmitButton";




const App = () => {

    const { form1, setForm1, form2, setForm2, form3a, setForm3a, form3b, setForm3b, form3c, setForm3c } = useContext(FormContext);
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

  const updateForm3a = (event) => {
    const { name, value } = event.target
    setForm3a(prev => ({
      ...prev,
      [name] : value,
    }))
  }

    const updateForm3b = (event) => {
        const { name, value } = event.target
        setForm3b(prev => ({
            ...prev,
            [name] : value,
        }))
    }

    const updateForm3c = (event) => {
        const { name, value } = event.target
        setForm3c(prev => ({
            ...prev,
            [name] : value,
        }))
    }


    const handleConfirm = () => setShowConfirm(true)
    const handleResetConfirm = () => setShowConfirm(false)

const ConfirmedInfo = ({ form1, form2, form3a,form3b,form3c }) => {

  return createPortal(
    
    <Box className="fixed inset-0 flex items-center justify-center bg-cyan-700/60 backdrop-blur-sm">
      <Box className="bg-white p-4 rounded shadow-lg max-w-sm w-full">
        <p><strong>Agent Name:</strong> {form1.agentName}</p>
        <p><strong>Agent Nbr:</strong> {String(form1.agentNbr)}</p>
        <p><strong>Agency Name:</strong> {form1.agencyName}</p>
        <p><strong>Agency Nbr:</strong> {String(form1.agencyNbr)}</p>
        <p><strong>Name of Insured:</strong> {form2.nameInsured}</p>
        <p><strong>Description Risk:</strong> {String(form2.descriptionRisk)}</p>
        <p><strong>Coverage Code</strong> {form2.coverageCode}</p>
      
      
      
            <Box sx={{ p: 2,borderRadius: 2,boxShadow: 2,bgcolor: "background.paper",display: "flex",            gap: 4,                     
    alignItems: "flex-start",   
  }}>
              <div>
              <Typography variant="h6" gutterBottom>Insurer 1</Typography>
              <p>Insurer: {form3a.insurer1}</p>
              <p>Contacted Through: {form3a.contactedThrough1}</p>
              <p>Full Contact Name: {form3a.fullContactName1}</p>
              <p>Phone Number / Email: {form3a.emailPhone1}</p>
              <p>Website: {form3a.website1}</p>
              <p>NAIC: {form3a.naic1}</p>
              <p>Date: {form3a.date1}</p>
              </div>
              <div>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Insurer 2</Typography>
              <p>Insurer: {form3b.insurer2}</p>
              <p>Contacted Through: {form3b.contactedThrough2}</p>
              <p>Full Contact Name: {form3b.fullContactName2}</p>
              <p>Phone Number / Email: {form3b.emailPhone2}</p>
              <p>Website: {form3b.website2}</p>
              <p>NAIC: {form3b.naic2}</p>
              <p>Date: {form3b.date2}</p>
              </div>
              <div>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Insurer 3</Typography>
              <p>Insurer: {form3c.insurer3}</p>
              <p>Contacted Through: {form3c.contactedThrough3}</p>
              <p>Full Contact Name: {form3c.fullContactName3}</p>
              <p>Phone Number / Email: {form3c.emailPhone3}</p>
              <p>Website: {form3c.website3}</p>
              <p>NAIC: {form3c.naic3}</p>
              <p>Date: {form3c.date3}</p>
              </div>
            </Box>

          <SubmitButton />
      
          <ColorButtons
          color={'red'}
          text={'Reset Input'}
          func= {handleResetConfirm}
        />
    </Box>
    </Box>,
    document.body 
  );
};

    //List Form1 data
    const form1InputList = Form1InputList({updateForm1, form1})
    const form2InputList= Form2InputList({ updateForm2, form2 })
    const form3aInputList = Form3InputInsurer1({ updateForm3a, form3a });
    const form3bInputList = Form3InputInsurer2({ updateForm3b, form3b });
    const form3cInputList = Form3InputInsurer3({ updateForm3c, form3c });


    return (
        <>
            <NavBar />

            <div className="min-h-screen grid place-items-center bg-gray-200">
                <div className="grid grid-cols-2 gap-4 w-full max-w-6xl">

                    {/* LEFT COLUMN */}
                    <div className="bg-white p-2">
                        {/* Form 1 */}
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

                        {/* Form 2 */}
                        <div className="grid grid-cols-1 gap-4">
                            {Object.values(form2InputList).map(
                                ({ onChange, name, type, value, placeholder, options }, idx) => (
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

                        <div className="flex flex-row gap-4">
                            <ColorButtons color="green" text="Confirm Input" func={handleConfirm} />
                            <ColorButtons color="red" text="Reset Input" func={handleResetConfirm} />
                        </div>
                    </div>

                    <div>
                        Create Something here!
                    </div>

                </div>
                <br/>
                    {/* FORM 3 – Inputs */}
                <div className="grid grid-cols-1 gap-4 max-w-6xl bg-white p-4">
                    <div className="grid grid-cols-3 gap-4 ">
                        <div className="bg-gray-500 p-4">
                            {Object.values(form3aInputList).map(
                                ({ onChange, name, type, value, placeholder, options }, idx) => (
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

                        <div className="bg-gray-500 p-4">
                            {Object.values(form3bInputList).map(
                                ({ onChange, name, type, value, placeholder, options }, idx) => (
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

                        <div className="bg-gray-500 p-4">
                            {Object.values(form3cInputList).map(
                                ({ onChange, name, type, value, placeholder, options }, idx) => (
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
                    </div>
                </div>
<br/>

                    {/*(Preview) */}
                    <div className="bg-white bg-clip-padding p-4">
                        <h1 className="text-red-700 font-bold">Preview:</h1>

                        <p>Agent Name: {form1.agentName}</p>
                        <p>Agent Nbr: {form1.agentNbr}</p>
                        <p>Agency Name: {form1.agencyName}</p>
                        <p>Agency Nbr: {form1.agencyNbr}</p>

                        <h1 className="text-red-700 font-bold">____________________________</h1>

                        <p>Name of Insured: {form2.nameInsured}</p>
                        <p>Description Risk: {form2.descriptionRisk}</p>
                        <p>Coverage Code: {form2.coverageCode}</p>

                        <h1 className="text-red-700 font-bold">____________________________</h1>






                    <Box sx={{ p: 2, borderRadius: 2, boxShadow: 2, bgcolor: 'background.paper' }}>
                        <Typography variant="h6" gutterBottom>Insurer 1</Typography>
                        <p>Insurer: {form3a.insurer1}</p>
                        <p>Contacted Through: {form3a.contactedThrough1}</p>
                        <p>Full Contact Name: {form3a.fullContactName1}</p>
                        <p>Phone Number / Email: {form3a.emailPhone1}</p>
                        <p>Website: {form3a.website1}</p>
                        <p>NAIC: {form3a.naic1}</p>
                        <p>Date: {form3a.date1}</p>

                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Insurer 2</Typography>
                        <p>Insurer: {form3b.insurer2}</p>
                        <p>Contacted Through: {form3b.contactedThrough2}</p>
                        <p>Full Contact Name: {form3b.fullContactName2}</p>
                        <p>Phone Number / Email: {form3b.emailPhone2}</p>
                        <p>Website: {form3b.website2}</p>
                        <p>NAIC: {form3b.naic2}</p>
                        <p>Date: {form3b.date2}</p>

                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Insurer 3</Typography>
                        <p>Insurer: {form3c.insurer3}</p>
                        <p>Contacted Through: {form3c.contactedThrough3}</p>
                        <p>Full Contact Name: {form3c.fullContactName3}</p>
                        <p>Phone Number / Email: {form3c.emailPhone3}</p>
                        <p>Website: {form3c.website3}</p>
                        <p>NAIC: {form3c.naic3}</p>
                        <p>Date: {form3c.date3}</p>
                    </Box>

                   </div>

            </div>

                    {showConfirm ? (
                    <ConfirmedInfo
                        form1={form1}
                        form2={form2}
                        form3a={form3a}
                        form3b={form3b}
                        form3c={form3c}
                    />
                ) : (
                    <p className="mt-4 text-gray-600">No data confirmed yet.</p>
                )}

        </>
    );
};

export default App;
