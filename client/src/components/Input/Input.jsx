import React from "react";

import PropTypes from "prop-types";

import { InputStyled } from "./styled";

export const Input = ({ className, name }) => {
  return <InputStyled name={name} className={`input-reset ${className}`} />;
};

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};

Input.defaultProps = {
  className: ""
};
