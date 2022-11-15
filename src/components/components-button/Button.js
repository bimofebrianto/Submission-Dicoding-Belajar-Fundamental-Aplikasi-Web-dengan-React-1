import React from "react";
import PropType from "prop-types";

const Button = ({ label, ...rest }) => {
  return (
    <>
      <button {...rest}>{label}</button>
    </>
  );
};

Button.protoType = {
  label: PropType.string,
  rest: PropType.object,
};
export default Button;
