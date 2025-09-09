function InputCheckmark() {
  return (
    <>
      <div className="p-3 block mb-2 text-sm font-medium bg-amber-100">Mortgage Type
      <div className="flex items-center mb-4 m-2.5">
        <input
          
          id="disabled-radio-1"
          type="radio"
          value=""
          name="disabled-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                     focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                     focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="disabled-radio-1"
          className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
        >
          Repayment
        </label>
      </div>

      <div className="flex items-center mb-4 m-2.5">
        <input
          id="disabled-radio-2"
          type="radio"
          value=""
          name="disabled-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                     focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                     focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="disabled-radio-2"
          className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">
          Interest Only
        </label>
      </div>
      </div>
    </>
  );
}

export default InputCheckmark;
