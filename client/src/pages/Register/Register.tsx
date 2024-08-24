import { ContainerStyled } from "styled";

import { AuthForm } from "components";

export const Register = () => {
  return (
    <ContainerStyled>
      <AuthForm formType="register" />
    </ContainerStyled>
  );
};
