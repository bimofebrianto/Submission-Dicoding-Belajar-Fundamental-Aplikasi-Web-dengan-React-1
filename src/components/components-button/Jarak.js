import React from "react";
import PropType from "prop-types";

const Jarak = ({ height, width }) => {
  return <div style={{ height: height, width: width }}></div>;
};

Jarak.protoType = {
  height: PropType.string,
  width: PropType.string,
};
export default Jarak;
