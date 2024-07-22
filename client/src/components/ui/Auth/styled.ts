import styled from "@emotion/styled";

import type { FormTextProps } from "types";

export const FormStyled = styled.form`
  background-color: #f7fafd;
  border: 1px solid #bec3cb;
  padding: 20px 40px;
`;

export const FormTextStyled = styled.div`
  color: #a3a3a3;
  ${(props: FormTextProps) =>
    props.centered &&
    `
      display: flex;
      justify-content: center;
    `}
`;
