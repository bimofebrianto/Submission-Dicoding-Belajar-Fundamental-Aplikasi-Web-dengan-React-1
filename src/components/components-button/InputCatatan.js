import React from "react";
import PropType from "prop-types";

const InputCatatan = ({ placeholder, padding, width, margin, ...rest }) => {
  return (
    <>
      <input
        style={{
          padding: padding,
          width: width,
          margin: margin,
          border: "3px solid #f7f7fa",
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
        type="text"
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};

InputCatatan.ProtoType = {
  placeholder: PropType.string,
  padding: PropType.string,
  width: PropType.string,
  margin: PropType.string,
  rest: PropType.object,
};
export default InputCatatan;
