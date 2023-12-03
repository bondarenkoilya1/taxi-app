import React from "react";

import PropTypes from "prop-types";

import { ButtonStyled } from "./styled";

export const Button = ({ children, className, ...attrs }) => {
  return (
    <ButtonStyled className={`button-reset ${className}`} {...attrs}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Button.defaultProps = {
  children: null,
  className: ""
};
