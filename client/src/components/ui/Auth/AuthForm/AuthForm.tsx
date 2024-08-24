import React from "react";

import { FormStyled, FormTitleStyled } from "../styled";

import { APPLICATION_NAME } from "constants";

import { ButtonComponent, Input } from "components";
import { SuggestLoginForm, SuggestRegisterForm } from "components";

import type { FormTypes } from "types";

const renderTitle = (formType: FormTypes["formType"]) => (
  <FormTitleStyled>
    {formType === "login"
      ? `Log in to ${APPLICATION_NAME}`
      : `Create an account in ${APPLICATION_NAME}`}
  </FormTitleStyled>
);

// discover why such type use type[""]
const renderButton = (formType: FormTypes["formType"]) => (
  <ButtonComponent
    color="primary"
    size="medium"
    variant="contained"
    styles={{ width: "100%", marginTop: "28px" }}>
    {formType === "login" ? "Log in" : "Create an account"}
  </ButtonComponent>
);

const renderSuggestForm = (formType: FormTypes["formType"]) =>
  formType === "login" ? <SuggestRegisterForm /> : <SuggestLoginForm />;

export const AuthForm: React.FC<FormTypes> = ({ formType }) => {
  return (
    <div style={{ marginTop: "100px" }}>
      {/* todo remove styles for form, input */}
      {renderTitle(formType)}
      <FormStyled formStyle="primary" style={{ marginBottom: "28px" }}>
        <Input
          label="Email"
          InputLabelProps={{ shrink: true }}
          placeholder="john.doe@gmail.com"
          fullWidth
        />
        <Input
          label="Password"
          InputLabelProps={{ shrink: true }}
          placeholder="Must be at least 3 charachters"
          fullWidth
          sx={{ marginTop: "46px" }}
        />
        {renderButton(formType)}
      </FormStyled>
      {renderSuggestForm(formType)}
    </div>
  );
};
