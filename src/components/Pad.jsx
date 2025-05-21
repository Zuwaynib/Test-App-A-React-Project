import React from "react";

const Pad = (props) => {
  return (
    <button 
      style={{ backgroundColor: props.color }}
    >
        {props.color}
    </button>
  );
};

export default Pad;
