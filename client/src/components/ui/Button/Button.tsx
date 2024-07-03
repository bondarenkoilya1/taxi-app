import React from "react";

import Button, { ButtonProps } from "@mui/material/Button";

export const ButtonComponent: React.FC<ButtonProps> = ({
  variant,
  color,
  onClick,
  sx,
  children,
  disabled
}) => {
  return (
    <Button variant={variant} color={color} onClick={onClick} sx={sx} disabled={disabled}>
      {children}
    </Button>
  );
};
