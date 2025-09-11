import React from "react";


export const Button = ({text, color, func}) => {
      let col;
      switch (color) {
    case "green":
      col = "bg-green-200"
      break
    case "reed":
      col = "bg-red-200"
    	break
    default:
      col = "bg-red-200"
  }

  return <button onClick={() => func()} className={`border-2 p-2 ${col}`}>{text}</button>;
}

const hello = (name) => {console.log("Hello" + name + "!")}