import OutputCard from "../outputs/OutputCard"

function OutputBox() {
  console.log("OutputBox Loaded")

  return (
    <>

    <div className="p-4 w-1/3 bg-sky-900 text-amber-50">
      Your Results
        <div className="p-4 bg-sky-900 text-amber-50 text-sm"> 
        Your Results are shown below based on the information you provided.To adjust the results, edit the form and click "calculate repayments"again.
        </div>
    
    <OutputCard/>
    
    </div>
    </>
  )
}

export default OutputBox