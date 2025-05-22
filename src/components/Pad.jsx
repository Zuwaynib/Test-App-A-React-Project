import React from "react";

const Pad = (props) => {
  return (
    <button 
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : "off"}
    >
        {props.color}
    </button>
  );
};

export default Pad;
