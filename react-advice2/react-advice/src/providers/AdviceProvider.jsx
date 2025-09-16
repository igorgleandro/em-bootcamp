import { createContext, useState, useEffect } from "react";

export const AdviceContext = createContext({});

export const AdviceProvider = ({ children }) => {
    const [advice, setAdvice] = useState("");
    const [refresh, setRefresh] = useState(0);


useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip)) 
      .catch((err) => console.error("Error fetching advice:", err));
  }, [refresh]);

const refreshCommand = () => setRefresh((prev) => prev + 1);

  return (
    <AdviceContext.Provider value={{ advice, refreshCommand }}>
      {children}
    </AdviceContext.Provider>
  );
};

