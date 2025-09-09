import { useState } from "react";

function InputAmount({type,label}) {

  const [value, setValue] = useState("");

  return (
    
    <>
      <label htmlFor={type} className="p-3 block mb-2 text-sm font-medium">{label}</label>
       <input
        type={type}
        id={type}
        onChange={(e) => setValue(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                 
      />
    </>
  );
}

export default InputAmount;