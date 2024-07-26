import { FormStyled, FormTextStyled, FormTextWrapperStyled } from "../styled";

import { APPLICATION_NAME } from "constants/index.ts";

import { ButtonComponent } from "components/ui";

export const SuggestRegisterForm = () => {
  return (
    <FormStyled>
      <FormTextWrapperStyled>
        <FormTextStyled marginRight>New to {APPLICATION_NAME}?</FormTextStyled>
        <ButtonComponent color="primary" size="medium" variant="text" href="/register">
          Create an account
        </ButtonComponent>
      </FormTextWrapperStyled>
      <ButtonComponent
        color="primary"
        size="medium"
        variant="outlined"
        styles={{ width: "100%", marginTop: "14px" }}>
        Log In as demo user
      </ButtonComponent>
    </FormStyled>
  );
};
