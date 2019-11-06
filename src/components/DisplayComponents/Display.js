import React, {useState} from "react";

export const Display = () => {
  const [number, changeNumber] = useState("0");
  return <div className="display">{/* Display any props data here */}
    {number}
  </div>;
};
