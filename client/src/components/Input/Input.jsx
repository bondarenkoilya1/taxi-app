import React from "react";

import PropTypes from "prop-types";

import { InputStyled } from "./styled";

export const Input = ({ name, ...attrs }) => {
  return <InputStyled name={name} {...attrs} />;
};

Input.propTypes = {
  name: PropTypes.string.isRequired
};
