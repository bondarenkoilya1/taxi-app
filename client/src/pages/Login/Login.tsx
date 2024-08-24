import { ContainerStyled } from "styled";

import { AuthForm } from "components";

export const Login = () => {
  return (
    <ContainerStyled>
      <AuthForm formType="login" />
    </ContainerStyled>
  );
};
