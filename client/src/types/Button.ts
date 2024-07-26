import { ButtonProps as MUIButtonProps } from "@mui/material/Button";

export type ButtonProps = Omit<MUIButtonProps, "children" | "color" | "size" | "sx" | "variant"> & {
  children: MUIButtonProps["children"];
  color: MUIButtonProps["color"];
  size: MUIButtonProps["size"];
  styles?: MUIButtonProps["sx"];
  variant: MUIButtonProps["variant"];
  href?: string;
};
