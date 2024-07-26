import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

import type { ButtonProps } from "types/Button.ts";

export const ButtonComponent: React.FC<ButtonProps> = ({
  variant,
  color,
  size,
  onClick,
  styles,
  children,
  disabled,
  href
}) => {
  if (href) {
    return (
      <Button
        component={Link as React.ElementType}
        to={href}
        variant={variant}
        color={color}
        size={size}
        onClick={onClick}
        sx={styles}
        disabled={disabled}>
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      sx={styles}
      disabled={disabled}>
      {children}
    </Button>
  );
};
