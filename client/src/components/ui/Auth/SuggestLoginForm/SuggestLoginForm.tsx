import { FormStyled, FormTextStyled } from "../styled";

import { ButtonComponent } from "components/ui";

export const SuggestLoginForm = () => {
  return (
    <FormStyled>
      <FormTextStyled centered>Already have an account?</FormTextStyled>
      <ButtonComponent
        color="primary"
        size="medium"
        variant="contained"
        styles={{ width: "100%", marginTop: "14px" }}>
        Log In
      </ButtonComponent>
    </FormStyled>
  );
};
