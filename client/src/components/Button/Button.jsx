import React from "react";

import PropTypes from "prop-types";

import { ButtonStyled } from "./styled";

export const Button = ({ children, ...attrs }) => {
  return <ButtonStyled {...attrs}>{children}</ButtonStyled>;
};

Button.propTypes = {
  children: PropTypes.node
};

Button.defaultProps = {
  children: null
};
