import React from "react";

export const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operator_button">
        <span role="img" aria-label="heart">
          {props.button.char}
        </span>
      </button>
    </>
  );
};
