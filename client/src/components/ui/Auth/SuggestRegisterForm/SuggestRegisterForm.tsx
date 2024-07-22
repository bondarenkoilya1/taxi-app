import { Link } from "react-router-dom";

import { FormStyled, FormTextStyled, FormTextWrapperStyled } from "../styled";

import { APPLICATION_NAME } from "constants/index.ts";

import { ButtonComponent } from "components/ui";

export const SuggestRegisterForm = () => {
  return (
    <FormStyled>
      <FormTextWrapperStyled>
        <FormTextStyled marginRight>New to {APPLICATION_NAME}?</FormTextStyled>
        <Link to="/register" style={{ color: "#7792F0" }}>
          Create an account
        </Link>
      </FormTextWrapperStyled>
      <ButtonComponent
        color="primary"
        size="medium"
        variant="outlined"
        styles={{ width: "100%", marginTop: "14px" }}>
        Log In
      </ButtonComponent>
    </FormStyled>
  );
};
