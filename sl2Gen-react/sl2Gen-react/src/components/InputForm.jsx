export const InputForm = ({ onChange, name, type, value, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {placeholder} : 
      </label>
      <input
        id={name}
        onChange={onChange}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};