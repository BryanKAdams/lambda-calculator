import React, {useState} from "react";
import {OperatorButton} from "./OperatorButton";
import {operators} from "../../../data"


//import any components needed

//Import your array data to from the provided data file

export const Operators = () => {
  // STEP 2 - add the imported data to state
  const [opButton] = useState(operators)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {opButton.map((b, index) => (
         <OperatorButton key={index} button={b} />
       ))}
    </div>
  );
};
