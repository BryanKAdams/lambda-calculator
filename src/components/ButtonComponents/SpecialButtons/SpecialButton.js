import React from "react";

export const SpecialButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="special_button">
        <span role="img" aria-label="heart">
          {props.button}
        </span>
      </button>
    </>
  );
};
