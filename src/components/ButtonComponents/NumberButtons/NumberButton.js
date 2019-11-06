import React, {useState} from "react";
import {Display} from "../../DisplayComponents/Display"

export const NumberButton = props => {
  const [number, changeNumber] = useState("0");
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="number_button">
        <span role="img" aria-label="heart">
          {props.button}
        </span>
      </button>
    </>
  );
};
