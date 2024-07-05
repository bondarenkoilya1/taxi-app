import React from "react";

import Button from "@mui/material/Button";

import type { ButtonProps } from "types/Button.ts";

export const ButtonComponent: React.FC<ButtonProps> = ({
  variant,
  color,
  size,
  onClick,
  styles,
  children,
  disabled
}) => {
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
