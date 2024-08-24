import styled from "@emotion/styled";

import type { FormStyles, FormTextProps } from "types";

export const FormStyled = styled.form<FormStyles>`
  ${({ formStyle }) => formStyle === "primary" && "padding: 40px;"}
  ${({ formStyle }) => formStyle === "secondary" && "padding: 20px 40px;"}
  background-color: #f7fafd;
  border: 1px solid #bec3cb;
  border-radius: 6px;
  // todo: set width for parent component
  max-width: 500px;
  margin: 0 auto;
`;

export const FormTextStyled = styled.div<FormTextProps>`
  ${({ centered }) => centered && "display: flex; justify-content: center;"};
  ${({ marginRight }) => marginRight && "margin-right: 6px;"}
  color: #a3a3a3;
`;

export const FormTextWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormTitleStyled = styled.h1`
  text-align: center;
  font-size: 24px;
  // remove
  margin-bottom: 40px;
`;
