import styled from "@emotion/styled";

import type { FormTextProps } from "types";

export const FormStyled = styled.form`
  background-color: #f7fafd;
  border: 1px solid #bec3cb;
  padding: 20px 40px;
  border-radius: 6px;
`;

export const FormTextStyled = styled.div`
  color: #a3a3a3;
  ${(props: FormTextProps) =>
    props.centered &&
    `
      display: flex;
      justify-content: center;
    `};
  ${(props: FormTextProps) =>
    props.marginRight &&
    `
    margin-right: 6px;
  `}
`;

export const FormTextWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
