/* eslint-disable react/prop-types */
import React from "react";

const Button = (props) => {
  const { text = "test button", bg, color, onClick, disabled } = props;

  return (
    <button
      disabled={disabled}
      style={{ background: bg, color: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
